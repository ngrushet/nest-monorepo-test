import { App1Controller } from './app1.controller';
import { App1Service } from './app1.service';
import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class App1Module {
  static forRoot(config: any): DynamicModule {
    return {
      module: App1Module,
      controllers: [App1Controller],
      providers: [
        {
          provide: 'APP1_CONFIG',
          useValue: config,
        },
        App1Service
      ],
    };
  }
}