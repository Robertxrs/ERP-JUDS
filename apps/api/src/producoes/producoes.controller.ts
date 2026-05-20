import {
  Controller, Get, Post,
  Body, Param, ParseIntPipe, UseGuards,
} from '@nestjs/common';
import { ProducoesService } from './producoes.service';
import { CreateProducaoDto } from './dto/create-producao.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// @UseGuards(JwtAuthGuard)
@Controller('producoes')
export class ProducoesController {
  constructor(private readonly producoesService: ProducoesService) {}

  @Post()
  create(@Body() dto: CreateProducaoDto) {
    return this.producoesService.create(dto);
  }

  @Get()
  findAll() {
    return this.producoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.producoesService.findOne(id);
  }
}
