import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProducoesService, Producao } from '../../core/services/producoes.service';

@Component({
  selector: 'app-producoes-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, RouterModule, DatePipe],
  templateUrl: './producoes-list.html',
  styleUrl: './producoes-list.scss',
})
export class ProducoesList implements OnInit {
  private producoesService = inject(ProducoesService);

  displayedColumns: string[] = ['id', 'produto', 'receita', 'quantidade', 'custoTotal', 'data'];
  dataSource: Producao[] = [];

  ngOnInit(): void {
    this.loadProducoes();
  }

  loadProducoes() {
    this.producoesService.findAll().subscribe(data => {
      this.dataSource = data;
    });
  }
}
