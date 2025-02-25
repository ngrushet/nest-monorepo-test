import { Injectable } from '@nestjs/common';

let _instance: any | null = null;

@Injectable()
export class ConfigService {
    private instance: any;

    public constructor() {
        this.instance = ConfigService.instance();
    }

    public get(): any {
        return this.instance;
    }

    public static initialized(): boolean {
        return !!_instance;
    }

    public static instance() {
        if (!ConfigService.initialized()) {
            throw new Error('Configuration is not initialized');
        }
        return _instance!;
    }

    public static set(instance: any): void {
        if (ConfigService.initialized()) {
            throw new Error('Configuration is already initialized');
        }
        if (!instance) {
            throw new Error('Bad configuration instance passed');
        }
        _instance = instance;
    }
}
