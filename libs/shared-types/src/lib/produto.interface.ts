import { UnidadeMedida } from './insumo.interface';
import { Receita } from './receita.interface';

export interface Produto {
  id: number;
  nome: string;
  descricao?: string;
  precoVenda: number;
  estoqueAtual: number;
  estoqueMin: number;
  unidade: UnidadeMedida;
  ativo: boolean;
  receitas?: Receita[];
  criadoEm: string;
  atualizadoEm: string;
}
