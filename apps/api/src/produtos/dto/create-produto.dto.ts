import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  precoVenda?: number;

  @IsOptional()
  @IsEnum(['KG', 'G', 'L', 'ML', 'UN'], { message: 'Unidade inválida' })
  unidade?: 'KG' | 'G' | 'L' | 'ML' | 'UN';

  @IsOptional()
  @IsNumber()
  @Min(0)
  estoqueMin?: number;
}
