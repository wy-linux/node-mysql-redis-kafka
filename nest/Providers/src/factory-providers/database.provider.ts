import { Injectable, RequestTimeoutException } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  constructor(private readonly config) {}

  connect() {
    return `connect to mysql://${this.config.user}:${this.config.password}@${this.config.host}:${this.config.port}`
  }
}