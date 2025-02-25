import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class Library2Service {
  constructor(
    @Inject('LIBRARY2_CONFIG') private readonly config: any, // Внедряем конфиг
  ) {
    console.log('Library2Service config:', this.config);
  }

  someMethod() {
    return `Library2 is running with config: ${JSON.stringify(this.config)}`;
  }
}