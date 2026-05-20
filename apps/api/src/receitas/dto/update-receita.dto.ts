import { Type } from 'class-transformer';
import {
  IsArray, IsBoolean, IsNumber, IsOptional,
  IsString, Min, ValidateNested,
} from 'class-validator';
import { ReceitaItemDto } from './create-receita.dto';

export class UpdateReceitaDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsNumber()
  @Min(0.001)
  rendimento?: number;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceitaItemDto)
  itens?: ReceitaItemDto[];
}
