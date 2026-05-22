import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Receita, Produto } from '../models/produto.model';

export interface Producao {
  id: number;
  receitaId: number;
  produtoId: number;
  quantidadeProduzida: number;
  custoTotal: number;
  observacao?: string;
  produzidoEm: string;
  criadoEm: string;
  receita?: Receita;
  produto?: Produto;
}

export interface CreateProducaoDto {
  receitaId: number;
  quantidadeProduzida: number;
  observacao?: string;
}

@Injectable({ providedIn: 'root' })
export class ProducoesService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/producoes`;

  findAll(): Observable<Producao[]> {
    return this.http.get<Producao[]>(this.apiUrl);
  }

  findOne(id: number): Observable<Producao> {
    return this.http.get<Producao>(`${this.apiUrl}/${id}`);
  }

  create(data: CreateProducaoDto): Observable<Producao> {
    return this.http.post<Producao>(this.apiUrl, data);
  }
}
