import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly SALT_ROUNDS = 10;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Registra um novo usuário no sistema.
   * A senha é hashada com bcrypt antes de ser salva.
   */
  async register(dto: RegisterDto) {
    // Verifica se o email já está em uso
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('E-mail já está em uso');
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(dto.senha, this.SALT_ROUNDS);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        nome: dto.nome,
        senha: hashedPassword,
        role: dto.role ?? 'OPERADOR',
      },
    });

    this.logger.log(`Usuário registrado: ${user.email} (${user.role})`);

    // Retorna token JWT imediatamente após o registro
    return this.generateToken(user);
  }

  /**
   * Autentica o usuário e retorna um JWT.
   */
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !user.ativo) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const isPasswordValid = await bcrypt.compare(dto.senha, user.senha);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    this.logger.log(`Login bem-sucedido: ${user.email}`);
    return this.generateToken(user);
  }

  /**
   * Retorna os dados do perfil do usuário autenticado.
   */
  async getProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        nome: true,
        role: true,
        ativo: true,
        criadoEm: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    return user;
  }

  /**
   * Gera o JWT com payload contendo id, email e role.
   */
  private generateToken(user: { id: number; email: string; role: string }) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}
