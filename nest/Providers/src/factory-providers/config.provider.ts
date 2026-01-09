import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  getEnvConfig() {
    return {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 6379,
        user: process.env.USER || 'wangyu',
        password: process.env.PASSWORD || 'MySQL666!',
    };
  }
}