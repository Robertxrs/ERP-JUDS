import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProducaoDto {
  @IsNumber()
  @IsNotEmpty({ message: 'receitaId é obrigatório' })
  receitaId: number;

  @IsNumber()
  @Min(0.001, { message: 'Quantidade produzida deve ser maior que zero' })
  quantidadeProduzida: number;

  @IsOptional()
  @IsString()
  observacao?: string;
}
