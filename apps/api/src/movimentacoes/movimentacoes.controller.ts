import {
  Controller, Get, Post,
  Body, Param, Query, ParseIntPipe, UseGuards,
} from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// @UseGuards(JwtAuthGuard)
@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}

  /**
   * Cria uma movimentação manual (ENTRADA ou AJUSTE).
   * Movimentações PRODUCAO/SAIDA são geradas automaticamente pelo ProducoesModule.
   */
  @Post()
  create(@Body() dto: CreateMovimentacaoDto) {
    return this.movimentacoesService.create(dto);
  }

  @Get()
  findAll(
    @Query('insumoId') insumoId?: number,
    @Query('tipo') tipo?: string,
    @Query('dataInicio') dataInicio?: string,
    @Query('dataFim') dataFim?: string,
  ) {
    return this.movimentacoesService.findAll({
      insumoId: insumoId ? Number(insumoId) : undefined,
      tipo,
      dataInicio: dataInicio ? new Date(dataInicio) : undefined,
      dataFim: dataFim ? new Date(dataFim) : undefined,
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.movimentacoesService.findOne(id);
  }

  // ❌ Sem PATCH/DELETE — Ledger é append-only!
}
