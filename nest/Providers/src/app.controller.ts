import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './factory-providers/database.provider'

@Controller('providers')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('useClass') private readonly useClass: AppService,
    @Inject('useValue') private readonly useValue: string[],
    @Inject('useFactory') private readonly useFactory: DatabaseService 
  ) {}

  @Get('appService')
  getAppService() {
    return this.appService.getAppService();
  }

  @Get('useClass')
  getUseClass() {
    return this.useClass.getUseClass();
  }

  @Get('useValue')
  getUseValue() {
    return this.useValue
  }

  @Get('useFactory')
  getUseFactory() {
    return this.useFactory.connect()
  }
}
