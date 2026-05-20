import { Insumo as SharedInsumo, UnidadeMedida } from '@mini-erp/shared-types';

export type Insumo = SharedInsumo;

export interface CreateInsumoDto {
  nome: string;
  descricao?: string;
  unidade: UnidadeMedida;
  estoqueAtual?: number;
  estoqueMin?: number;
  custoUnitario?: number;
}

export interface UpdateInsumoDto extends Partial<CreateInsumoDto> {
  ativo?: boolean;
}
