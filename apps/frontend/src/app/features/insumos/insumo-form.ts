import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InsumosService } from '../../core/services/insumos.service';
import { Insumo } from '../../core/models/insumo.model';

@Component({
  selector: 'app-insumo-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  template: `
    <h2 mat-dialog-title>{{ isEdit ? 'Editar Insumo' : 'Novo Insumo' }}</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="form-container">
        <mat-form-field appearance="outline">
          <mat-label>Nome do Insumo</mat-label>
          <input matInput formControlName="nome" placeholder="Ex: Farinha de Trigo">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Unidade de Medida</mat-label>
          <mat-select formControlName="unidade">
            <mat-option value="KG">Quilograma (kg)</mat-option>
            <mat-option value="G">Grama (g)</mat-option>
            <mat-option value="L">Litro (l)</mat-option>
            <mat-option value="ML">Mililitro (ml)</mat-option>
            <mat-option value="UN">Unidade (un)</mat-option>
          </mat-select>
        </mat-form-field>

        <div class="row">
          <mat-form-field appearance="outline">
            <mat-label>Estoque Atual</mat-label>
            <input matInput type="number" formControlName="estoqueAtual">
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Estoque Mínimo</mat-label>
            <input matInput type="number" formControlName="estoqueMin">
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline">
          <mat-label>Custo Unitário (R$)</mat-label>
          <input matInput type="number" formControlName="custoUnitario">
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" [disabled]="form.invalid" (click)="save()">Salvar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 16px;
    }
    .row {
      display: flex;
      gap: 16px;
    }
    .row mat-form-field {
      flex: 1;
    }
  `]
})
export class InsumoForm implements OnInit {
  form: FormGroup;
  isEdit = false;
  private insumosService = inject(InsumosService);

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InsumoForm>,
    @Inject(MAT_DIALOG_DATA) public data: Insumo | null
  ) {
    this.isEdit = !!data;
    this.form = this.fb.group({
      nome: [data?.nome || '', Validators.required],
      unidade: [data?.unidade || 'KG', Validators.required],
      estoqueAtual: [{ value: data?.estoqueAtual || 0, disabled: this.isEdit }, [Validators.required, Validators.min(0)]],
      estoqueMin: [data?.estoqueMin || 0, [Validators.required, Validators.min(0)]],
      custoUnitario: [data?.custoUnitario || 0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  save(): void {
    if (this.form.invalid) return;

    const dto = this.form.value;

    if (this.isEdit && this.data) {
      this.insumosService.update(this.data.id, dto).subscribe({
        next: () => this.dialogRef.close(true),
        error: (err) => console.error(err)
      });
    } else {
      this.insumosService.create(dto).subscribe({
        next: () => this.dialogRef.close(true),
        error: (err) => console.error(err)
      });
    }
  }
}
