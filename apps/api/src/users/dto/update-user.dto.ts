import { IsEmail, IsEnum, IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsEmail({}, { message: 'E-mail inválido' })
  email?: string;

  @IsOptional()
  @IsEnum(['ADMIN', 'OPERADOR'], { message: 'Role deve ser ADMIN ou OPERADOR' })
  role?: 'ADMIN' | 'OPERADOR';

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
