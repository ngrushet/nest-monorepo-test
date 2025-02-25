import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { loadConfig } from 'config/configuration';

async function bootstrap() {
  const config = loadConfig()
  ConfigService.set(config);

  const app = await NestFactory.create(AppModule.forRootWithConfig(config));

  await app.listen(3000);
}

bootstrap();