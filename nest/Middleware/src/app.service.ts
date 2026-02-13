import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  wangyu(): string {
    return 'wangyu middleware';
  }

  yuwang(): string {
    return 'yuwang middleware';
  }
}
