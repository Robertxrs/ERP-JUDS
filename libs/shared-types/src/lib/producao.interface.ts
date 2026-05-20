import { Produto } from './produto.interface';
import { Receita } from './receita.interface';

export interface Producao {
  id: number;
  quantidadeProduzida: number;
  custoTotal: number;
  observacao?: string;
  produzidoEm: string;
  criadoEm: string;
  receitaId: number;
  produtoId: number;
  receita?: Produto | Receita;
  produto?: Produto;
}
