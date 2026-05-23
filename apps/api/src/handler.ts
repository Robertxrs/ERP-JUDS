import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import express from 'express';
import serverless from 'serverless-http';
import { ValidationPipe } from '@nestjs/common';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://erp-juds-s1ee.vercel.app',
    ],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();
}

let server: any;

async function getServer() {
  if (!server) {
    await bootstrap();
    server = serverless(expressApp);
  }
  return server;
}

export default async function handler(req: any, res: any) {
  const server = await getServer();
  return server(req, res);
}
