import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovimentacoesService } from '../../core/services/movimentacoes.service';
import { Insumo } from '../../core/models/insumo.model';

@Component({
  selector: 'app-insumo-entrada-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  template: `
    <h2 mat-dialog-title>Entrada de Estoque: {{ data.nome }}</h2>
    <mat-dialog-content>
      <p style="margin-top: 0; color: #666;">Registre a chegada de uma nova compra deste insumo. A quantidade será somada ao estoque atual.</p>
      
      <form [formGroup]="form" class="form-container">
        <mat-form-field appearance="outline">
          <mat-label>Quantidade Comprada ({{ data.unidade }})</mat-label>
          <input matInput type="number" formControlName="quantidade" placeholder="Ex: 10">
          <mat-error *ngIf="form.get('quantidade')?.hasError('required')">Quantidade é obrigatória</mat-error>
          <mat-error *ngIf="form.get('quantidade')?.hasError('min')">Deve ser maior que zero</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Custo Unitário da Compra (Opcional)</mat-label>
          <input matInput type="number" formControlName="custoUnitario" placeholder="R$ 0,00">
          <mat-hint>Deixe em branco para manter o custo atual de R$ {{ data.custoUnitario }}</mat-hint>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Observação (Opcional)</mat-label>
          <input matInput formControlName="observacao" placeholder="Ex: Nota Fiscal 1234">
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" [disabled]="form.invalid" (click)="save()">Confirmar Entrada</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 16px;
      min-width: 300px;
    }
  `]
})
export class InsumoEntradaForm implements OnInit {
  form: FormGroup;
  private fb = inject(FormBuilder);
  private movimentacoesService = inject(MovimentacoesService);
  public dialogRef = inject(MatDialogRef<InsumoEntradaForm>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Insumo) {
    this.form = this.fb.group({
      quantidade: [null, [Validators.required, Validators.min(0.01)]],
      custoUnitario: [null, [Validators.min(0)]],
      observacao: ['']
    });
  }

  ngOnInit(): void {}

  save(): void {
    if (this.form.invalid) return;

    const val = this.form.value;

    this.movimentacoesService.create({
      insumoId: this.data.id,
      tipo: 'ENTRADA',
      quantidade: val.quantidade,
      custoUnitario: val.custoUnitario !== null && val.custoUnitario !== '' ? val.custoUnitario : undefined,
      observacao: val.observacao
    }).subscribe({
      next: () => this.dialogRef.close(true),
      error: (err) => console.error(err)
    });
  }
}
