import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';

/**
 * MovimentacoesService — Padrão LEDGER (Append-Only)
 *
 * Regras fundamentais:
 * 1. Movimentações são IMUTÁVEIS — nunca se atualiza ou deleta um registro.
 * 2. Para corrigir erros, cria-se uma movimentação de AJUSTE.
 * 3. O estoqueAtual do insumo é sempre atualizado atomicamente.
 * 4. Movimentações tipo PRODUCAO são criadas apenas pelo ProducoesService.
 */
@Injectable()
export class MovimentacoesService {
  private readonly logger = new Logger(MovimentacoesService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Cria uma movimentação manual (ENTRADA ou AJUSTE) e atualiza o estoque.
   * Toda a operação é executada em uma transação atômica.
   */
  async create(dto: CreateMovimentacaoDto) {
    // Valida que o insumo existe
    const insumo = await this.prisma.insumo.findUnique({
      where: { id: dto.insumoId },
    });

    if (!insumo) {
      throw new NotFoundException(`Insumo #${dto.insumoId} não encontrado`);
    }

    return this.prisma.$transaction(async (tx) => {
      // 1. Cria a movimentação (append-only)
      const movimentacao = await tx.movimentacao.create({
        data: {
          insumoId: dto.insumoId,
          tipo: dto.tipo,
          quantidade: dto.quantidade,
          custoUnitario: dto.custoUnitario,
          observacao: dto.observacao,
        },
        include: {
          insumo: { select: { id: true, nome: true } },
        },
      });

      // 2. Atualiza o estoque do insumo
      let deltaEstoque: number;

      if (dto.tipo === 'ENTRADA') {
        deltaEstoque = dto.quantidade;
      } else {
        // AJUSTE: pode ser positivo (incremento) ou pode representar uma correção
        // Aqui tratamos AJUSTE como valor absoluto a somar (para subtrair, use valor negativo na lógica de negócio)
        deltaEstoque = dto.quantidade;
      }

      await tx.insumo.update({
        where: { id: dto.insumoId },
        data: {
          estoqueAtual: { increment: deltaEstoque },
          // Se for uma entrada com custo, atualiza o custo unitário do insumo
          ...(dto.tipo === 'ENTRADA' && dto.custoUnitario
            ? { custoUnitario: dto.custoUnitario }
            : {}),
        },
      });

      this.logger.log(
        `Movimentação ${dto.tipo}: ${dto.quantidade} de ${insumo.nome} (Insumo #${dto.insumoId})`,
      );

      return movimentacao;
    });
  }

  /**
   * Lista movimentações com filtros opcionais.
   */
  async findAll(filters?: {
    insumoId?: number;
    tipo?: string;
    dataInicio?: Date;
    dataFim?: Date;
  }) {
    const where: any = {};

    if (filters?.insumoId) {
      where.insumoId = filters.insumoId;
    }

    if (filters?.tipo) {
      where.tipo = filters.tipo;
    }

    if (filters?.dataInicio || filters?.dataFim) {
      where.criadoEm = {};
      if (filters.dataInicio) where.criadoEm.gte = filters.dataInicio;
      if (filters.dataFim) where.criadoEm.lte = filters.dataFim;
    }

    return this.prisma.movimentacao.findMany({
      where,
      include: {
        insumo: { select: { id: true, nome: true, unidade: true } },
        producao: { select: { id: true, quantidadeProduzida: true } },
      },
      orderBy: { criadoEm: 'desc' },
      take: 100,
    });
  }

  /**
   * Busca uma movimentação por ID (somente leitura).
   */
  async findOne(id: number) {
    const movimentacao = await this.prisma.movimentacao.findUnique({
      where: { id },
      include: {
        insumo: { select: { id: true, nome: true, unidade: true } },
        producao: true,
      },
    });

    if (!movimentacao) {
      throw new NotFoundException(`Movimentação #${id} não encontrada`);
    }

    return movimentacao;
  }

  // ❌ NÃO há update() nem remove() — Padrão LEDGER é append-only!
}
