import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Retorna um resumo geral do sistema para o painel.
   */
  async getResumo() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const [
      totalInsumos,
      totalProdutos,
      insumosAtivos,
      produtosAtivos,
      insumosAbaixoMin,
      producoesHoje,
      movimentacoesHoje,
      ultimasProducoes,
      ultimasMovimentacoes,
    ] = await Promise.all([
      // Contadores gerais
      this.prisma.insumo.count(),
      this.prisma.produto.count(),
      this.prisma.insumo.count({ where: { ativo: true } }),
      this.prisma.produto.count({ where: { ativo: true } }),

      // Insumos com estoque abaixo do mínimo (alerta)
      this.prisma.$queryRaw<{ count: bigint }[]>`
        SELECT COUNT(*)::bigint as count FROM insumos
        WHERE ativo = true AND estoque_atual < estoque_min
      `,

      // Produções de hoje
      this.prisma.producao.count({
        where: { produzidoEm: { gte: hoje } },
      }),

      // Movimentações de hoje
      this.prisma.movimentacao.count({
        where: { criadoEm: { gte: hoje } },
      }),

      // Últimas 5 produções
      this.prisma.producao.findMany({
        include: {
          receita: { select: { nome: true } },
          produto: { select: { nome: true } },
        },
        orderBy: { produzidoEm: 'desc' },
        take: 5,
      }),

      // Últimas 10 movimentações
      this.prisma.movimentacao.findMany({
        include: {
          insumo: { select: { nome: true, unidade: true } },
        },
        orderBy: { criadoEm: 'desc' },
        take: 10,
      }),
    ]);

    return {
      contadores: {
        totalInsumos,
        totalProdutos,
        insumosAtivos,
        produtosAtivos,
        insumosAbaixoDoMinimo: Number(insumosAbaixoMin[0]?.count ?? 0),
        producoesHoje,
        movimentacoesHoje,
      },
      ultimasProducoes,
      ultimasMovimentacoes,
    };
  }
}
