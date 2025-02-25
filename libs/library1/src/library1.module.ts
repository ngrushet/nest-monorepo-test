import { DynamicModule, Module } from '@nestjs/common';
import { Library1Service } from './library1.service';

@Module({})
export class Library1Module {
  static forRoot(config: any): DynamicModule {
    return {
      module: Library1Module,
      providers: [
        {
          provide: 'LIBRARY1_CONFIG',
          useValue: config, // Передаем конфиг в модуль
        },
        Library1Service
      ],
    };
  }
}