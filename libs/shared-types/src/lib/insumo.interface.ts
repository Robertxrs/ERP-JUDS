export type UnidadeMedida = 'KG' | 'G' | 'L' | 'ML' | 'UN';

export interface Insumo {
  id: number;
  nome: string;
  descricao?: string;
  unidade: UnidadeMedida;
  estoqueAtual: number;
  estoqueMin: number;
  custoUnitario: number;
  ativo: boolean;
  criadoEm: string;
  atualizadoEm: string;
}

export interface InsumoResumo {
  id: number;
  nome: string;
  unidade: UnidadeMedida;
  estoqueAtual: number;
  estoqueMin: number;
}
