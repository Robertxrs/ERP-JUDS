import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CreateMovimentacaoDto {
  insumoId: number;
  tipo: 'ENTRADA' | 'AJUSTE';
  quantidade: number;
  custoUnitario?: number;
  observacao?: string;
}

@Injectable({ providedIn: 'root' })
export class MovimentacoesService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/movimentacoes`;

  create(dto: CreateMovimentacaoDto): Observable<any> {
    return this.http.post<any>(this.apiUrl, dto);
  }
}
