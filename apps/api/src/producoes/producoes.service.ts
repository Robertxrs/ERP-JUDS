import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma';
import { CreateProducaoDto } from './dto/create-producao.dto';

/**
 * ProducoesService — Transação Atômica Prisma
 *
 * Ao registrar uma produção, executa atomicamente:
 * 1. Busca a receita com todos os itens (ingredientes)
 * 2. Valida que há estoque suficiente de cada insumo
 * 3. Cria o registro de Produção
 * 4. Cria Movimentações tipo PRODUCAO para cada insumo consumido
 * 5. Debita o estoque de cada insumo
 * 6. Credita o estoque do produto final
 *
 * Se qualquer etapa falhar, TUDO é revertido.
 */
@Injectable()
export class ProducoesService {
  private readonly logger = new Logger(ProducoesService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Registra uma produção com transação atômica.
   */
  async create(dto: CreateProducaoDto) {
    // 1. Busca a receita com itens e produto
    const receita = await this.prisma.receita.findUnique({
      where: { id: dto.receitaId },
      include: {
        itens: {
          include: {
            insumo: true,
          },
        },
        produto: true,
      },
    });

    if (!receita) {
      throw new NotFoundException(`Receita #${dto.receitaId} não encontrada`);
    }

    if (!receita.ativo) {
      throw new BadRequestException(`Receita #${dto.receitaId} está inativa`);
    }

    if (receita.itens.length === 0) {
      throw new BadRequestException(
        `Receita #${dto.receitaId} não possui ingredientes`,
      );
    }

    // Calcula o multiplicador de produção
    // Se a receita rende 10 unidades e queremos produzir 30, multiplicador = 3
    const multiplicador = dto.quantidadeProduzida / receita.rendimento;

    // 2. Valida estoque suficiente para cada insumo
    const insumosInsuficientes: string[] = [];

    for (const item of receita.itens) {
      const quantidadeNecessaria = item.quantidade * multiplicador;

      if (item.insumo.estoqueAtual < quantidadeNecessaria) {
        insumosInsuficientes.push(
          `${item.insumo.nome}: necessário ${quantidadeNecessaria.toFixed(3)} ${item.insumo.unidade}, disponível ${item.insumo.estoqueAtual.toFixed(3)}`,
        );
      }
    }

    if (insumosInsuficientes.length > 0) {
      throw new BadRequestException({
        message: 'Estoque insuficiente para os seguintes insumos',
        insumos: insumosInsuficientes,
      });
    }

    // 3-6. Transação atômica
    return this.prisma.$transaction(async (tx) => {
      // Calcula o custo total
      let custoTotal = 0;

      for (const item of receita.itens) {
        custoTotal += item.insumo.custoUnitario * item.quantidade * multiplicador;
      }

      // 3. Cria o registro de produção
      const producao = await tx.producao.create({
        data: {
          receitaId: receita.id,
          produtoId: receita.produtoId,
          quantidadeProduzida: dto.quantidadeProduzida,
          custoTotal,
          observacao: dto.observacao,
        },
      });

      // 4 + 5. Para cada insumo: cria movimentação PRODUCAO + debita estoque
      for (const item of receita.itens) {
        const quantidadeConsumida = item.quantidade * multiplicador;

        // 4. Movimentação tipo PRODUCAO (append-only ledger)
        await tx.movimentacao.create({
          data: {
            insumoId: item.insumoId,
            tipo: 'PRODUCAO',
            quantidade: quantidadeConsumida,
            custoUnitario: item.insumo.custoUnitario,
            observacao: `Produção #${producao.id} — Receita: ${receita.nome}`,
            producaoId: producao.id,
          },
        });

        // 5. Debita estoque do insumo
        await tx.insumo.update({
          where: { id: item.insumoId },
          data: {
            estoqueAtual: { decrement: quantidadeConsumida },
          },
        });
      }

      // 6. Credita estoque do produto final
      await tx.produto.update({
        where: { id: receita.produtoId },
        data: {
          estoqueAtual: { increment: dto.quantidadeProduzida },
        },
      });

      this.logger.log(
        `✅ Produção #${producao.id}: ${dto.quantidadeProduzida}x ${receita.produto.nome} (Receita: ${receita.nome}) — Custo: R$ ${custoTotal.toFixed(2)}`,
      );

      // Retorna produção com relacionamentos
      return tx.producao.findUnique({
        where: { id: producao.id },
        include: {
          receita: { select: { id: true, nome: true } },
          produto: { select: { id: true, nome: true } },
          movimentacoes: {
            include: {
              insumo: { select: { id: true, nome: true, unidade: true } },
            },
          },
        },
      });
    });
  }

  async findAll() {
    return this.prisma.producao.findMany({
      include: {
        receita: { select: { id: true, nome: true } },
        produto: { select: { id: true, nome: true } },
      },
      orderBy: { produzidoEm: 'desc' },
    });
  }

  async findOne(id: number) {
    const producao = await this.prisma.producao.findUnique({
      where: { id },
      include: {
        receita: {
          select: { id: true, nome: true, rendimento: true },
        },
        produto: { select: { id: true, nome: true } },
        movimentacoes: {
          include: {
            insumo: { select: { id: true, nome: true, unidade: true } },
          },
        },
      },
    });

    if (!producao) {
      throw new NotFoundException(`Produção #${id} não encontrada`);
    }

    return producao;
  }
}
