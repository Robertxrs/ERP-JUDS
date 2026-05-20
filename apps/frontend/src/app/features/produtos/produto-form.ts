import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ProdutosService, ReceitasService } from '../../core/services/produtos.service';
import { InsumosService } from '../../core/services/insumos.service';
import { Insumo } from '../../core/models/insumo.model';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, 
    MatSelectModule, MatIconModule, MatCardModule
  ],
  template: `
    <div class="page-container">
      <div class="header">
        <h2>{{ editing ? 'Editar Produto com Receita' : 'Novo Produto com Receita' }}</h2>
        <button mat-button routerLink="/produtos">Voltar</button>
      </div>

      <form [formGroup]="form" (ngSubmit)="save()">
        <mat-card class="section-card">
          <mat-card-header>
            <mat-card-title>Dados do Produto</mat-card-title>
          </mat-card-header>
          <mat-card-content class="form-grid">
            <mat-form-field appearance="outline">
              <mat-label>Nome do Produto</mat-label>
              <input matInput formControlName="nome" placeholder="Ex: Bolo de Cenoura">
            </mat-form-field>
            
            <mat-form-field appearance="outline">
              <mat-label>Unidade de Venda</mat-label>
              <mat-select formControlName="unidade">
                <mat-option value="UN">Unidade (un)</mat-option>
                <mat-option value="KG">Quilograma (kg)</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Preço de Venda (R$)</mat-label>
              <input matInput type="number" formControlName="precoVenda">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Estoque Mínimo</mat-label>
              <input matInput type="number" formControlName="estoqueMin">
            </mat-form-field>
          </mat-card-content>
        </mat-card>

        <mat-card class="section-card">
          <mat-card-header>
            <mat-card-title>Receita Padrão</mat-card-title>
            <mat-card-subtitle>Configure os ingredientes necessários para produzir este item</mat-card-subtitle>
          </mat-card-header>
          
          <mat-card-content>
            <div class="rendimento-container">
              <mat-form-field appearance="outline">
                <mat-label>Rendimento da Receita</mat-label>
                <input matInput type="number" formControlName="rendimentoReceita" placeholder="Ex: 1">
                <mat-hint>Quantas unidades esta receita produz?</mat-hint>
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="search-field">
              <mat-label>Pesquisar ingrediente</mat-label>
              <input matInput type="text" [value]="insumoFilter" (input)="insumoFilter = $any($event.target).value" placeholder="Digite o nome do insumo">
            </mat-form-field>

            <div formArrayName="itensReceita" class="itens-list">
              <div *ngFor="let item of itensReceita.controls; let i=index" [formGroupName]="i" class="item-row">
                <mat-form-field appearance="outline" class="insumo-select">
                  <mat-label>Insumo</mat-label>
                  <mat-select formControlName="insumoId">
                    <mat-option *ngFor="let insumo of filteredInsumos" [value]="insumo.id">
                      {{ insumo.nome }} ({{ insumo.unidade }})
                    </mat-option>
                  </mat-select>
                </mat-form-field>

                <mat-form-field appearance="outline" class="qtd-input">
                  <mat-label>Quantidade Necessária</mat-label>
                  <input matInput type="number" formControlName="quantidade">
                </mat-form-field>

                <button mat-icon-button color="warn" type="button" (click)="removeItem(i)">
                  <mat-icon>delete</mat-icon>
                </button>
              </div>
            </div>

            <button mat-stroked-button color="primary" type="button" (click)="addItem()">
              <mat-icon>add</mat-icon>
              Adicionar Ingrediente
            </button>
          </mat-card-content>
        </mat-card>

        <div class="actions">
          <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">
            {{ editing ? 'Salvar Alterações' : 'Salvar Produto e Receita' }}
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .page-container { padding: 24px; max-width: 900px; margin: 0 auto; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .header h2 { margin: 0; font-size: 24px; color: #333; }
    .section-card { margin-bottom: 24px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; }
    .rendimento-container { margin-top: 16px; margin-bottom: 16px; }
    .item-row { display: flex; gap: 16px; align-items: center; margin-bottom: 8px; }
    .insumo-select { flex: 2; }
    .qtd-input { flex: 1; }
    .actions { display: flex; justify-content: flex-end; margin-top: 24px; margin-bottom: 48px; }
    .search-field { width: 100%; margin-bottom: 16px; }
  `]
})
export class ProdutoForm implements OnInit {
  private fb = inject(FormBuilder);
  private produtosService = inject(ProdutosService);
  private receitasService = inject(ReceitasService);
  private insumosService = inject(InsumosService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form: FormGroup;
  insumosList: Insumo[] = [];
  insumoFilter = '';
  produtoId: number | null = null;
  receitaId: number | null = null;
  editing = false;

  constructor() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      unidade: ['UN', Validators.required],
      precoVenda: [null, [Validators.min(0)]],
      estoqueMin: [null, [Validators.min(0)]],
      rendimentoReceita: [1, [Validators.required, Validators.min(0.01)]],
      itensReceita: this.fb.array([])
    });
  }

  ngOnInit() {
    this.insumosService.findAll().subscribe(data => {
      this.insumosList = data;
      if (!this.editing) {
        this.addItem();
      }
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editing = true;
      this.loadProduto(Number(idParam));
    }
  }

  get itensReceita() {
    return this.form.get('itensReceita') as FormArray;
  }

  get filteredInsumos() {
    const filter = this.insumoFilter.trim().toLowerCase();
    if (!filter) {
      return this.insumosList;
    }
    return this.insumosList.filter(insumo =>
      insumo.nome.toLowerCase().includes(filter) ||
      insumo.unidade.toLowerCase().includes(filter)
    );
  }

  addItem() {
    this.itensReceita.push(this.fb.group({
      insumoId: [null, Validators.required],
      quantidade: [0, [Validators.required, Validators.min(0.001)]]
    }));
  }

  removeItem(index: number) {
    this.itensReceita.removeAt(index);
  }

  private loadProduto(id: number) {
    this.produtosService.findOne(id).subscribe((produto) => {
      this.produtoId = produto.id;
      this.form.patchValue({
        nome: produto.nome,
        unidade: produto.unidade,
        precoVenda: produto.precoVenda ?? null,
        estoqueMin: produto.estoqueMin ?? null,
      });

      if (produto.receitas && produto.receitas.length > 0) {
        this.loadReceita(produto.receitas[0].id);
      } else {
        this.addItem();
      }
    });
  }

  private loadReceita(receitaId: number) {
    this.receitasService.findOne(receitaId).subscribe((receita) => {
      this.receitaId = receita.id;
      this.form.patchValue({ rendimentoReceita: receita.rendimento });
      this.itensReceita.clear();

      if (receita.itens && receita.itens.length > 0) {
        receita.itens.forEach((item) => {
          this.itensReceita.push(this.fb.group({
            insumoId: [item.insumoId, Validators.required],
            quantidade: [item.quantidade, [Validators.required, Validators.min(0.001)]]
          }));
        });
      } else {
        this.addItem();
      }
    });
  }

  save() {
    if (this.form.invalid) return;
    const val = this.form.value;

    const produtoPayload = {
      nome: val.nome,
      unidade: val.unidade,
      precoVenda: val.precoVenda,
      estoqueMin: val.estoqueMin,
    };

    const receitaPayload = {
      nome: `Receita Padrão - ${val.nome}`,
      rendimento: val.rendimentoReceita,
      itens: val.itensReceita,
    };

    if (this.editing && this.produtoId) {
      this.produtosService.update(this.produtoId, produtoPayload).subscribe({
        next: () => {
          if (this.receitaId) {
            this.receitasService.update(this.receitaId, receitaPayload).subscribe(() => {
              this.router.navigate(['/produtos']);
            });
          } else if (val.itensReceita.length > 0) {
            this.receitasService.create({
              ...receitaPayload,
              produtoId: this.produtoId!,
            }).subscribe(() => {
              this.router.navigate(['/produtos']);
            });
          } else {
            this.router.navigate(['/produtos']);
          }
        },
        error: (err) => console.error(err)
      });
      return;
    }

    this.produtosService.create(produtoPayload).subscribe({
      next: (produto) => {
        if (val.itensReceita.length > 0) {
          this.receitasService.create({
            ...receitaPayload,
            produtoId: produto.id,
          }).subscribe(() => {
            this.router.navigate(['/produtos']);
          });
        } else {
          this.router.navigate(['/produtos']);
        }
      },
      error: (err) => console.error(err)
    });
  }
}
