import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class Library1Service {
  constructor(
    @Inject('LIBRARY1_CONFIG') private readonly config: any, // Внедряем конфиг
  ) {
    console.log('Library1Service config:', this.config);
  }

  someMethod() {
    return `Library1 is running with config: ${JSON.stringify(this.config)}`;
  }
}