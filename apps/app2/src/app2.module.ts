import { App2Controller } from './app2.controller';
import { App2Service } from './app2.service';
import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class App2Module {
  static forRoot(config: any): DynamicModule {
    return {
      module: App2Module,
      controllers: [App2Controller],
      providers: [
        {
          provide: 'APP2_CONFIG',
          useValue: config,
        },
        App2Service
      ],
      exports: ['App2_CONFIG'],
    };
  }
}