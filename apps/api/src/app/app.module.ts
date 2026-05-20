import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';

// Infraestrutura
import { PrismaModule } from '../prisma';

// Domínio
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { InsumosModule } from '../insumos/insumos.module';
import { ProdutosModule } from '../produtos/produtos.module';
import { ReceitasModule } from '../receitas/receitas.module';
import { ProducoesModule } from '../producoes/producoes.module';
import { MovimentacoesModule } from '../movimentacoes/movimentacoes.module';
import { DashboardModule } from '../dashboard/dashboard.module';

// App
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Carrega variáveis de ambiente do .env
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Prisma ORM (global)
    PrismaModule,

    // BullMQ — Fila de processamento assíncrono (Producer-Consumer)
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    }),

    // Módulos de domínio
    AuthModule,
    UsersModule,
    InsumosModule,
    ProdutosModule,
    ReceitasModule,
    ProducoesModule,
    MovimentacoesModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
