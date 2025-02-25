import { NestFactory } from '@nestjs/core';
import { App1Module } from './app1.module';

async function bootstrap() {
  const app = await NestFactory.create(App1Module);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
