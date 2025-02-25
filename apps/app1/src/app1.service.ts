import { Injectable, Inject, Optional } from '@nestjs/common';
import { App2Service } from 'apps/app2/src/app2.service';
import { ConfigService } from 'apps/monorepo/src/config/config.service';

@Injectable()
export class App1Service {
  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService, // Внедряем ConfigService
    @Optional() // Указываем, что зависимость необязательная
    @Inject(App2Service)
    private readonly app2Service: App2Service | null, // Может быть null, если App2 выключен
  ) {}

  doSomething(): string {
    const app2Config = this.configService.get()['app2'];
    console.log(app2Config);
    console.log(this.app2Service);
    if (app2Config?.enabled && this.app2Service) {
      return `App1 is calling App2: ${this.app2Service.getHello()}`;
    } else {
      return 'App1 is working alone because App2 is disabled.';
    }
  }
}