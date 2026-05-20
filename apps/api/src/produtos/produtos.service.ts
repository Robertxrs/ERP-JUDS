import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProdutoDto) {
    return this.prisma.produto.create({ data: dto });
  }

  async findAll() {
    return this.prisma.produto.findMany({
      where: { ativo: true },
      orderBy: { nome: 'asc' },
    });
  }

  async findOne(id: number) {
    const produto = await this.prisma.produto.findUnique({
      where: { id },
      include: {
        receitas: {
          where: { ativo: true },
          select: { id: true, nome: true, rendimento: true },
        },
      },
    });

    if (!produto) {
      throw new NotFoundException(`Produto #${id} não encontrado`);
    }

    return produto;
  }

  async update(id: number, dto: UpdateProdutoDto) {
    await this.findOne(id);
    return this.prisma.produto.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.produto.update({
      where: { id },
      data: { ativo: false },
    });
  }
}
