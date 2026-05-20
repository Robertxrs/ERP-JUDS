import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface DashboardData {
  contadores: {
    totalInsumos: number;
    totalProdutos: number;
    insumosAtivos: number;
    produtosAtivos: number;
    insumosAbaixoDoMinimo: number;
    producoesHoje: number;
    movimentacoesHoje: number;
  };
  ultimasProducoes: Array<{
    id: number;
    produto: { nome: string };
    quantidadeProduzida: number;
    produzidoEm: string;
  }>;
  ultimasMovimentacoes: Array<{
    id: number;
    tipo: string;
    insumo: { nome: string };
    quantidade: number;
    criadoEm: string;
  }>;
  topInsumos: Array<{ nome: string; estoqueAtual: number; estoqueMin: number }>;
  consumoSemanal: Array<{ dia: string; quantidade: number }>;
}

const dashboardMock: DashboardData = {
  contadores: {
    totalInsumos: 28,
    totalProdutos: 12,
    insumosAtivos: 25,
    produtosAtivos: 11,
    insumosAbaixoDoMinimo: 3,
    producoesHoje: 7,
    movimentacoesHoje: 14,
  },
  ultimasProducoes: [
    { id: 1, produto: { nome: 'Pão de Forma' }, quantidadeProduzida: 40, produzidoEm: new Date().toISOString() },
    { id: 2, produto: { nome: 'Bolo de Fuba' }, quantidadeProduzida: 20, produzidoEm: new Date(Date.now() - 3600 * 1000).toISOString() },
    { id: 3, produto: { nome: 'Torta de Frango' }, quantidadeProduzida: 15, produzidoEm: new Date(Date.now() - 7200 * 1000).toISOString() },
  ],
  ultimasMovimentacoes: [
    { id: 1, tipo: 'ENTRADA', insumo: { nome: 'Farinha de Trigo' }, quantidade: 100, criadoEm: new Date(Date.now() - 1800 * 1000).toISOString() },
    { id: 2, tipo: 'SAIDA', insumo: { nome: 'Açúcar' }, quantidade: 12, criadoEm: new Date(Date.now() - 5400 * 1000).toISOString() },
    { id: 3, tipo: 'PRODUCAO', insumo: { nome: 'Ovos' }, quantidade: 30, criadoEm: new Date(Date.now() - 10800 * 1000).toISOString() },
  ],
  topInsumos: [
    { nome: 'Farinha de Trigo', estoqueAtual: 120, estoqueMin: 80 },
    { nome: 'Ovos', estoqueAtual: 90, estoqueMin: 60 },
    { nome: 'Açúcar', estoqueAtual: 70, estoqueMin: 50 },
    { nome: 'Leite', estoqueAtual: 50, estoqueMin: 40 },
    { nome: 'Manteiga', estoqueAtual: 30, estoqueMin: 25 },
  ],
  consumoSemanal: [
    { dia: 'Seg', quantidade: 120 },
    { dia: 'Ter', quantidade: 140 },
    { dia: 'Qua', quantidade: 110 },
    { dia: 'Qui', quantidade: 130 },
    { dia: 'Sex', quantidade: 150 },
    { dia: 'Sáb', quantidade: 98 },
    { dia: 'Dom', quantidade: 85 },
  ],
};

@Injectable({ providedIn: 'root' })
export class DashboardService {
  getResumo(): Observable<DashboardData> {
    return of(dashboardMock).pipe(delay(300));
  }
}
