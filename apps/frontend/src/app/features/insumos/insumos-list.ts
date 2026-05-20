import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InsumosService } from '../../core/services/insumos.service';
import { Insumo } from '../../core/models/insumo.model';
import { InsumoForm } from './insumo-form';
import { InsumoEntradaForm } from './insumo-entrada-form';

@Component({
  selector: 'app-insumos-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatDialogModule, MatTooltipModule, MatFormFieldModule, MatInputModule],
  templateUrl: './insumos-list.html',
  styleUrl: './insumos-list.scss',
})
export class InsumosList implements OnInit, AfterViewInit {
  private insumosService = inject(InsumosService);
  private dialog = inject(MatDialog);

  displayedColumns: string[] = ['nome', 'unidade', 'estoqueAtual', 'estoqueMin', 'acoes'];
  dataSource = new MatTableDataSource<Insumo>([]);
  filterValue = '';

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnInit(): void {
    this.loadInsumos();
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  loadInsumos() {
    this.insumosService.findAll().subscribe(data => {
      this.dataSource.data = data;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  applyFilter(value: string) {
    this.filterValue = value.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isBaixoEstoque(insumo: Insumo): boolean {
    return insumo.estoqueAtual <= insumo.estoqueMin;
  }

  openDialog(insumo?: Insumo): void {
    const dialogRef = this.dialog.open(InsumoForm, {
      width: '500px',
      data: insumo ? { ...insumo } : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadInsumos();
      }
    });
  }

  openEntradaDialog(insumo: Insumo): void {
    const dialogRef = this.dialog.open(InsumoEntradaForm, {
      width: '400px',
      data: insumo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadInsumos();
      }
    });
  }

  deleteInsumo(id: number): void {
    if (confirm('Tem certeza que deseja excluir este insumo?')) {
      this.insumosService.remove(id).subscribe(() => {
        this.loadInsumos();
      });
    }
  }
}
