import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateInsumoDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsEnum(['KG', 'G', 'L', 'ML', 'UN'], { message: 'Unidade inválida' })
  unidade?: 'KG' | 'G' | 'L' | 'ML' | 'UN';

  @IsOptional()
  @IsNumber()
  @Min(0)
  estoqueMin?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  custoUnitario?: number;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
