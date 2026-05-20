import { Produto as SharedProduto, Receita as SharedReceita, ReceitaItem as SharedReceitaItem, UnidadeMedida } from '@mini-erp/shared-types';

export type Produto = SharedProduto;
export type Receita = SharedReceita;
export type ReceitaItem = SharedReceitaItem;

export interface CreateProdutoDto {
  nome: string;
  descricao?: string;
  precoVenda?: number;
  estoqueAtual?: number;
  estoqueMin?: number;
  unidade?: UnidadeMedida;
}

export interface UpdateProdutoDto {
  nome?: string;
  descricao?: string;
  precoVenda?: number;
  estoqueMin?: number;
  unidade?: UnidadeMedida;
  ativo?: boolean;
}

export interface CreateReceitaDto {
  nome: string;
  descricao?: string;
  rendimento: number;
  produtoId: number;
  itens: { insumoId: number; quantidade: number }[];
}

export interface UpdateReceitaDto {
  nome?: string;
  descricao?: string;
  rendimento?: number;
  produtoId?: number;
  itens?: { insumoId: number; quantidade: number }[];
}
