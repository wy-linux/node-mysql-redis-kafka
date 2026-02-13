import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('wangyu')
  wangyu(): string {
    return this.appService.wangyu();
  }

  @Get('yuwang')
  yuwang(): string {
    return this.appService.yuwang();
  }

}
