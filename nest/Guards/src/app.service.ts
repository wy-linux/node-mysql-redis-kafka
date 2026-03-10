import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  wangyu(): string {
    return 'wangyu guard';
  }

  yuwang(): string {
    return 'yuwang guard';
  }
}
