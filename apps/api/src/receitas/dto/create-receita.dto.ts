import { Type } from 'class-transformer';
import {
  IsArray, IsNotEmpty, IsNumber, IsOptional,
  IsString, Min, ValidateNested, ArrayMinSize,
} from 'class-validator';

export class ReceitaItemDto {
  @IsNumber()
  @IsNotEmpty({ message: 'insumoId é obrigatório' })
  insumoId: number;

  @IsNumber()
  @Min(0.001, { message: 'Quantidade deve ser maior que zero' })
  quantidade: number;
}

export class CreateReceitaDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'produtoId é obrigatório' })
  produtoId: number;

  @IsOptional()
  @IsNumber()
  @Min(0.001)
  rendimento?: number;

  @IsArray()
  @ArrayMinSize(1, { message: 'Receita deve ter ao menos 1 ingrediente' })
  @ValidateNested({ each: true })
  @Type(() => ReceitaItemDto)
  itens: ReceitaItemDto[];
}
