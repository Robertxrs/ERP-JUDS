import { Component, inject, computed, toSignal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { DashboardService, DashboardData } from '../core/services/dashboard.service';

const defaultDashboard: DashboardData = {
  contadores: {
    totalInsumos: 0,
    totalProdutos: 0,
    insumosAtivos: 0,
    produtosAtivos: 0,
    insumosAbaixoDoMinimo: 0,
    producoesHoje: 0,
    movimentacoesHoje: 0,
  },
  ultimasProducoes: [],
  ultimasMovimentacoes: [],
  topInsumos: [],
  consumoSemanal: [],
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTableModule, RouterModule, DatePipe, NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private dashboardService = inject(DashboardService);

  data = toSignal(this.dashboardService.getResumo(), { initialValue: defaultDashboard });

  producoesColumns: string[] = ['data', 'produto', 'quantidade'];
  movimentacoesColumns: string[] = ['data', 'tipo', 'insumo', 'quantidade'];

  chartType: ChartType = 'bar';

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Top 5 Insumos: Estoque atual x Mínimo' },
    },
  };

  chartData = computed(() => ({
    labels: this.data().topInsumos.map(item => item.nome),
    datasets: [
      {
        label: 'Estoque Atual',
        data: this.data().topInsumos.map(item => item.estoqueAtual),
        backgroundColor: '#42a5f5',
      },
      {
        label: 'Estoque Mínimo',
        data: this.data().topInsumos.map(item => item.estoqueMin),
        backgroundColor: '#ffca28',
      },
    ],
  }));

  consumoChartType: ChartType = 'line';

  consumoChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Consumo Semanal' },
    },
    scales: {
      x: { display: true, title: { display: true, text: 'Dia' } },
      y: { display: true, title: { display: true, text: 'Quantidade' }, beginAtZero: true },
    },
  };

  consumoChartData = computed(() => ({
    labels: this.data().consumoSemanal.map(item => item.dia),
    datasets: [
      {
        label: 'Consumo',
        data: this.data().consumoSemanal.map(item => item.quantidade),
        fill: false,
        borderColor: '#66bb6a',
        tension: 0.3,
      },
    ],
  }));
}
