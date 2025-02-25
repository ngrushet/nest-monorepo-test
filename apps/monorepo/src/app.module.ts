import { Module, DynamicModule } from '@nestjs/common';
import { App1Module } from 'apps/app1/src/app1.module';
import { App2Module } from 'apps/app2/src/app2.module';
import { Library1Module } from '@app/library1';
import { Library2Module } from '@app/library2';

@Module({})
export class AppModule {
  static forRoot(config: any): DynamicModule {
    const imports = [];

    if (config.app1.enabled) {
      imports.push(App1Module);
    }

    if (config.app2.enabled) {
      imports.push(App2Module);
    }

    if (config.library1.enabled) {
      imports.push(Library1Module);
    }

    if (config.library2.enabled) {
      imports.push(Library2Module);
    }

    return {
      module: AppModule,
      imports,
    };
  }
}