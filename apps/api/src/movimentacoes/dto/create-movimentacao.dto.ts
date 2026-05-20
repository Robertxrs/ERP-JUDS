import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateMovimentacaoDto {
  @IsNumber()
  @IsNotEmpty({ message: 'insumoId é obrigatório' })
  insumoId: number;

  @IsEnum(['ENTRADA', 'AJUSTE'], {
    message: 'Tipo deve ser ENTRADA ou AJUSTE (PRODUCAO e SAIDA são criados automaticamente)',
  })
  @IsNotEmpty({ message: 'Tipo é obrigatório' })
  tipo: 'ENTRADA' | 'AJUSTE';

  @IsNumber()
  @Min(0.001, { message: 'Quantidade deve ser maior que zero' })
  quantidade: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  custoUnitario?: number;

  @IsOptional()
  @IsString()
  observacao?: string;
}
