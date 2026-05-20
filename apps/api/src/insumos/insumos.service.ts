import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';

@Injectable()
export class InsumosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateInsumoDto) {
    return this.prisma.insumo.create({ data: dto });
  }

  async findAll() {
    return this.prisma.insumo.findMany({
      where: { ativo: true },
      orderBy: { nome: 'asc' },
    });
  }

  async findOne(id: number) {
    const insumo = await this.prisma.insumo.findUnique({
      where: { id },
      include: {
        receitaItens: {
          include: { receita: { select: { id: true, nome: true } } },
        },
      },
    });

    if (!insumo) {
      throw new NotFoundException(`Insumo #${id} não encontrado`);
    }

    return insumo;
  }

  async update(id: number, dto: UpdateInsumoDto) {
    await this.findOne(id);
    return this.prisma.insumo.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.insumo.update({
      where: { id },
      data: { ativo: false },
    });
  }

  /**
   * Retorna insumos cujo estoque está abaixo do mínimo definido.
   */
  async findBaixoEstoque() {
    return this.prisma.$queryRaw`
      SELECT * FROM insumos
      WHERE ativo = true AND estoque_atual < estoque_min
      ORDER BY estoque_atual ASC
    `;
  }
}
