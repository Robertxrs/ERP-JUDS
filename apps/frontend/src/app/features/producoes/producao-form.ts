import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ProducoesService } from '../../core/services/producoes.service';
import { ProdutosService } from '../../core/services/produtos.service';
import { ReceitasService } from '../../core/services/produtos.service';
import { Produto, Receita } from '../../core/models/produto.model';

@Component({
  selector: 'app-producao-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, 
    MatSelectModule, MatIconModule, MatCardModule
  ],
  template: `
    <div class="page-container">
      <div class="header">
        <h2>Iniciar Produção</h2>
        <button mat-button routerLink="/producoes">Voltar</button>
      </div>

      <div class="content-grid">
        <form [formGroup]="form" (ngSubmit)="produzir()" class="form-section">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Detalhes da Produção</mat-card-title>
            </mat-card-header>
            <mat-card-content class="form-content">
              <mat-form-field appearance="outline">
                <mat-label>Produto</mat-label>
                <mat-select formControlName="produtoId" (selectionChange)="onProdutoChange($event.value)">
                  <mat-option *ngFor="let p of produtos" [value]="p.id">
                    {{ p.nome }} (Estoque atual: {{ p.estoqueAtual }})
                  </mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline" *ngIf="receitas.length > 0">
                <mat-label>Receita</mat-label>
                <mat-select formControlName="receitaId" (selectionChange)="onReceitaChange($event.value)">
                  <mat-option *ngFor="let r of receitas" [value]="r.id">
                    {{ r.nome }} (Rende: {{ r.rendimento }})
                  </mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Quantidade a Produzir</mat-label>
                <input matInput type="number" formControlName="quantidadeProduzida">
                <mat-hint *ngIf="selectedReceita">
                  Multiplicador: {{ (form.value.quantidadeProduzida / selectedReceita.rendimento) | number:'1.2-2' }}x
                </mat-hint>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Observação (Opcional)</mat-label>
                <textarea matInput formControlName="observacao" rows="2"></textarea>
              </mat-form-field>
            </mat-card-content>
            <mat-card-actions align="end" class="card-actions">
              <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid || hasInsufficientStock">
                Confirmar Produção
              </button>
            </mat-card-actions>
          </mat-card>
        </form>

        <div class="simulation-section" *ngIf="selectedReceita && form.value.quantidadeProduzida > 0">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Consumo Estimado de Estoque</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <ul class="consumo-list">
                <li *ngFor="let item of consumoSimulado" class="consumo-item" [class.insuficiente]="!item.suficiente">
                  <div class="consumo-info">
                    <strong>{{ item.nome }}</strong>
                    <span>{{ item.quantidadeNecessaria | number:'1.2-3' }} {{ item.unidade }}</span>
                  </div>
                  <div class="estoque-info">
                    <small>Disponível: {{ item.estoqueAtual | number:'1.2-3' }}</small>
                    <mat-icon *ngIf="!item.suficiente" color="warn" class="warn-icon">error</mat-icon>
                    <mat-icon *ngIf="item.suficiente" class="ok-icon">check_circle</mat-icon>
                  </div>
                </li>
              </ul>
              
              <div *ngIf="hasInsufficientStock" class="error-msg">
                <mat-icon>warning</mat-icon>
                <span>Estoque insuficiente para realizar esta produção.</span>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 24px; max-width: 1000px; margin: 0 auto; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .header h2 { margin: 0; font-size: 24px; color: #333; }
    .content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
    .form-content { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
    .card-actions { padding: 16px; }
    .consumo-list { list-style: none; padding: 0; margin: 0; }
    .consumo-item { display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #eee; }
    .consumo-info { display: flex; flex-direction: column; }
    .estoque-info { display: flex; align-items: center; gap: 8px; color: #666; }
    .insuficiente { background-color: #ffebee; border-radius: 4px; }
    .warn-icon { font-size: 18px; width: 18px; height: 18px; }
    .ok-icon { font-size: 18px; width: 18px; height: 18px; color: #4caf50; }
    .error-msg { display: flex; align-items: center; gap: 8px; color: #f44336; margin-top: 16px; padding: 12px; background: #ffebee; border-radius: 4px; font-weight: 500; }
    
    @media (max-width: 768px) {
      .content-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProducaoForm implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private produtosService = inject(ProdutosService);
  private receitasService = inject(ReceitasService);
  private producoesService = inject(ProducoesService);
  private cdRef = inject(ChangeDetectorRef);

  form: FormGroup;
  produtos: Produto[] = [];
  receitas: Receita[] = [];
  selectedReceita: Receita | null = null;
  consumoSimulado: any[] = [];

  get hasInsufficientStock() {
    return this.consumoSimulado.some(c => !c.suficiente);
  }

  constructor() {
    this.form = this.fb.group({
      produtoId: [null, Validators.required],
      receitaId: [{ value: null, disabled: true }, Validators.required],
      quantidadeProduzida: [0, [Validators.required, Validators.min(1)]],
      observacao: ['']
    });

    this.form.get('quantidadeProduzida')?.valueChanges.subscribe(() => {
      this.simularConsumo();
    });
  }

  ngOnInit() {
    this.produtosService.findAll().subscribe(data => this.produtos = data);
  }

  onProdutoChange(produtoId: number) {
    this.produtosService.findOne(produtoId).subscribe(prod => {
      if (prod.receitas && prod.receitas.length > 0) {
        this.receitas = prod.receitas;
        this.form.get('receitaId')?.enable();
        if (this.receitas.length === 1) {
          this.form.get('receitaId')?.setValue(this.receitas[0].id);
          this.onReceitaChange(this.receitas[0].id);
        }
      } else {
        this.receitas = [];
        this.form.get('receitaId')?.disable();
        this.selectedReceita = null;
      }
    });
  }

  onReceitaChange(receitaId: number) {
    this.receitasService.findOne(receitaId).subscribe(rec => {
      Promise.resolve().then(() => {
        this.selectedReceita = rec;
        this.simularConsumo();
        this.cdRef.detectChanges();
      });
    });
  }

  simularConsumo() {
    if (!this.selectedReceita) return;

    const qtd = Number(this.form.get('quantidadeProduzida')?.value) || 0;
    if (qtd <= 0) {
      this.consumoSimulado = [];
      return;
    }

    const rendimento = this.selectedReceita.rendimento || 1;
    const multiplicador = qtd / rendimento;

    this.consumoSimulado = this.selectedReceita.itens.map(item => {
      const necessaria = item.quantidade * multiplicador;
      const estoqueAtual = item.insumo?.estoqueAtual ?? 0;
      return {
        nome: item.insumo?.nome,
        unidade: item.insumo?.unidade,
        quantidadeNecessaria: necessaria,
        estoqueAtual,
        suficiente: estoqueAtual >= necessaria
      };
    });
  }

  produzir() {
    if (this.form.invalid || this.hasInsufficientStock) return;

    const receitaId = this.form.get('receitaId')?.value;
    if (!receitaId) {
      alert('Selecione uma receita válida para produção.');
      return;
    }

    const quantidadeProduzida = Number(this.form.get('quantidadeProduzida')?.value) || 0;
    const observacao = this.form.get('observacao')?.value;

    const payload = {
      receitaId,
      quantidadeProduzida,
      observacao,
    };

    this.producoesService.create(payload).subscribe({
      next: () => {
        alert('Produção registrada com sucesso! O estoque foi atualizado.');
        this.router.navigate(['/producoes']);
      },
      error: (err) => {
        alert('Erro ao registrar produção: ' + (err.error?.message || 'Verifique o estoque.'));
      }
    });
  }
}
