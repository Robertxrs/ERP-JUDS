import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ProdutosService } from '../../core/services/produtos.service';
import { Produto } from '../../core/models/produto.model';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule, RouterModule],
  templateUrl: './produtos-list.html',
  styleUrl: './produtos-list.scss',
})
export class ProdutosList implements OnInit {
  private produtosService = inject(ProdutosService);

  displayedColumns: string[] = ['nome', 'estoqueAtual', 'unidade', 'precoVenda', 'acoes'];
  dataSource = new MatTableDataSource<Produto>([]);

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos() {
    this.produtosService.findAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  deleteProduto(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtosService.remove(id).subscribe(() => {
        this.loadProdutos();
      });
    }
  }
}
