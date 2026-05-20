import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateInsumoDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsEnum(['KG', 'G', 'L', 'ML', 'UN'], { message: 'Unidade inválida' })
  @IsNotEmpty({ message: 'Unidade é obrigatória' })
  unidade: 'KG' | 'G' | 'L' | 'ML' | 'UN';

  @IsOptional()
  @IsNumber()
  @Min(0)
  estoqueAtual?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  estoqueMin?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  custoUnitario?: number;
}
