import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly config: any;

  constructor(configPath: string) {
    this.config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }

  getConfig() {
    return this.config;
  }
}