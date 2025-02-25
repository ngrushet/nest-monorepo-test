import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class App1Service {
  constructor(
    @Inject('APP1_CONFIG') private readonly config: any
  ) {
    console.log('App1Service config:', this.config);
  }

  someMethod() {
    return `App1 is running with config: ${JSON.stringify(this.config)}`;
  }
}