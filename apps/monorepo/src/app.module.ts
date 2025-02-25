import { Module, DynamicModule } from '@nestjs/common';
import { App1Module } from 'apps/app1/src/app1.module';
import { App2Module } from 'apps/app2/src/app2.module';
import { Library1Module } from '@app/library1';
import { Library2Module } from '@app/library2';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

@Module({})
export class AppModule {
  static forRootWithConfig(config: any): DynamicModule {
    const imports = [];
    imports.push(ConfigModule); // Передаем конфиг для App1

    if (config.app1.enabled) {
      imports.push(App1Module.forRoot(config.app1)); // Передаем конфиг для App1
    }

    if (config.app2.enabled) {
      imports.push(App2Module.forRoot(config.app2)); // Передаем конфиг для App2
    }

    if (config.library1.enabled) {
      imports.push(Library1Module.forRoot(config.library1)); // Передаем конфиг для Library1
    }

    if (config.library2.enabled) {
      imports.push(Library2Module.forRoot(config.library2)); // Передаем конфиг для Library2
    }

    return {
      module: AppModule,
      imports,
      controllers: [AppController],
      providers: [AppService],
    };
  }
}