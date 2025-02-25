import { Module, DynamicModule } from '@nestjs/common';
import { App1Controller } from './app1.controller';
import { App1Service } from './app1.service';
import { ConfigModule } from 'apps/monorepo/src/config/config.module';

@Module({})
export class App1Module {
  static forRoot(config: any): DynamicModule {
    const providers = [
      App1Service,
    ];

    const controllers = [App1Controller];

    return {
      imports: [ConfigModule],
      module: App1Module,
      providers,
      controllers,
      exports: providers,
    };
  }
}