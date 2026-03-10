import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './roles.decorator'
import { RolesGuard } from './roles.guard'

@Controller()
@UseGuards(RolesGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('wangyu')
  @Roles(['wangyu'])
  wangyu(): string {
    return this.appService.wangyu();
  }

  @Get('yuwang')
  @Roles(['yuwang'])
  yuwang(): string {
    return this.appService.yuwang();
  }
}
