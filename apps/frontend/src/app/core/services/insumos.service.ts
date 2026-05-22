import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Insumo, CreateInsumoDto, UpdateInsumoDto } from '../models/insumo.model';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/insumos`;

  findAll(): Observable<Insumo[]> {
    return this.http.get<Insumo[]>(this.apiUrl);
  }

  findBaixoEstoque(): Observable<Insumo[]> {
    return this.http.get<Insumo[]>(`${this.apiUrl}/baixo-estoque`);
  }

  findOne(id: number): Observable<Insumo> {
    return this.http.get<Insumo>(`${this.apiUrl}/${id}`);
  }

  create(data: CreateInsumoDto): Observable<Insumo> {
    return this.http.post<Insumo>(this.apiUrl, data);
  }

  update(id: number, data: UpdateInsumoDto): Observable<Insumo> {
    return this.http.patch<Insumo>(`${this.apiUrl}/${id}`, data);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
