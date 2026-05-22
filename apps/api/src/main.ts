import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefixo global para todas as rotas
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // CORS — permite requisições do frontend Angular
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://erp-juds-s1ee.vercel.app',
    ],
    credentials: true,
  });

  // Validação global — sanitiza e rejeita campos não esperados
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // Remove propriedades não decoradas
      forbidNonWhitelisted: true,   // Rejeita requisições com campos extras
      transform: true,              // Transforma payloads nos tipos do DTO
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
