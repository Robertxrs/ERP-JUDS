import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, CreateProdutoDto, UpdateProdutoDto, Receita, CreateReceitaDto, UpdateReceitaDto } from '../models/produto.model';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private http = inject(HttpClient);
  private apiUrl = '/api/produtos';

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  findOne(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  create(data: CreateProdutoDto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, data);
  }

  update(id: number, data: UpdateProdutoDto): Observable<Produto> {
    return this.http.patch<Produto>(`${this.apiUrl}/${id}`, data);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

@Injectable({ providedIn: 'root' })
export class ReceitasService {
  private http = inject(HttpClient);
  private apiUrl = '/api/receitas';

  findAll(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.apiUrl);
  }

  findOne(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.apiUrl}/${id}`);
  }

  create(data: CreateReceitaDto): Observable<Receita> {
    return this.http.post<Receita>(this.apiUrl, data);
  }

  update(id: number, data: UpdateReceitaDto): Observable<Receita> {
    return this.http.patch<Receita>(`${this.apiUrl}/${id}`, data);
  }
}
