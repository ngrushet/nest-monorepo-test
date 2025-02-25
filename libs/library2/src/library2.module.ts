import { DynamicModule, Module } from '@nestjs/common';
import { Library2Service } from './library2.service';

@Module({})
export class Library2Module {
  static forRoot(config: any): DynamicModule {
    return {
      module: Library2Module,
      providers: [
        {
          provide: 'LIBRARY1_CONFIG',
          useValue: config, // Передаем конфиг в модуль
        },
        Library2Service
      ],
    };
  }
}