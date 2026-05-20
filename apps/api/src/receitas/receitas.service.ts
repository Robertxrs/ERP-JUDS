import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Injectable()
export class ReceitasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateReceitaDto) {
    const { itens, ...receitaData } = dto;

    return this.prisma.receita.create({
      data: {
        ...receitaData,
        itens: {
          create: itens.map((item) => ({
            insumoId: item.insumoId,
            quantidade: item.quantidade,
          })),
        },
      },
      include: {
        itens: { include: { insumo: { select: { id: true, nome: true, unidade: true, estoqueAtual: true } } } },
        produto: { select: { id: true, nome: true } },
      },
    });
  }

  async findAll() {
    return this.prisma.receita.findMany({
      include: {
        produto: { select: { id: true, nome: true } },
        _count: { select: { itens: true } },
      },
      orderBy: { criadoEm: 'desc' },
    });
  }

  async findOne(id: number) {
    const receita = await this.prisma.receita.findUnique({
      where: { id },
      include: {
        produto: { select: { id: true, nome: true } },
        itens: {
          include: {
            insumo: { select: { id: true, nome: true, unidade: true, custoUnitario: true, estoqueAtual: true } },
          },
        },
      },
    });

    if (!receita) {
      throw new NotFoundException(`Receita #${id} não encontrada`);
    }

    return receita;
  }

  async update(id: number, dto: UpdateReceitaDto) {
    await this.findOne(id);

    const { itens, ...receitaData } = dto;

    // Se itens foram enviados, faz replace completo (deleta antigos, cria novos)
    if (itens) {
      return this.prisma.$transaction(async (tx) => {
        await tx.receitaItem.deleteMany({ where: { receitaId: id } });

        return tx.receita.update({
          where: { id },
          data: {
            ...receitaData,
            itens: {
              create: itens.map((item) => ({
                insumoId: item.insumoId,
                quantidade: item.quantidade,
              })),
            },
          },
          include: {
            itens: { include: { insumo: { select: { id: true, nome: true, unidade: true, estoqueAtual: true } } } },
            produto: { select: { id: true, nome: true } },
          },
        });
      });
    }

    return this.prisma.receita.update({
      where: { id },
      data: receitaData,
      include: {
        itens: { include: { insumo: { select: { id: true, nome: true, unidade: true, estoqueAtual: true } } } },
        produto: { select: { id: true, nome: true } },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.receita.update({
      where: { id },
      data: { ativo: false },
    });
  }
}
