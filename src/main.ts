import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // NOTE: class-validatorを有効化するための設定
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // NOTE: corsの設定
  app.enableCors({
    credentials: true,
    origin: ['http://location:3000'],
  });
  app.use(cookieParser());
  await app.listen(3005);
}
bootstrap();
