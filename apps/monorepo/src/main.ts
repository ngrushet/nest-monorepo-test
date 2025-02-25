import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const configPath = './config/test.json';
  const configService = new ConfigService(configPath);
  const app = await NestFactory.create(AppModule.forRoot(configService.getConfig()));
  await app.listen(3000);
}

bootstrap();