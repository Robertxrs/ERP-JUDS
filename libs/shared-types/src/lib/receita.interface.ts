import { Insumo, UnidadeMedida } from './insumo.interface';

export interface ReceitaItem {
  id?: number;
  insumoId: number;
  quantidade: number;
  insumo?: Partial<Insumo>;
}

export interface Receita {
  id: number;
  nome: string;
  descricao?: string;
  rendimento: number;
  ativo: boolean;
  produtoId: number;
  itens: ReceitaItem[];
  criadoEm: string;
  atualizadoEm: string;
}
