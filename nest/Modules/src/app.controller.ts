import { Controller, Get, Put, Body, Inject } from '@nestjs/common';
// import { AppService } from './app.service';
import { ModuleService } from './module/module.service'
import { GlobalModuleService } from './global-module/global-module.service'

@Controller()
export class AppController {
  constructor(
    private readonly moduleService: ModuleService,
    private readonly globalModuleService: GlobalModuleService,
    @Inject('wangyu') private readonly dynamicModuleValue: {value: number},
  ) {}

  @Get('module')
  module(): string {
    return this.moduleService.module();
  }
  
  @Get('globalModule')
  GlobalModule() {
    return this.globalModuleService.getGlobalModuleValue();
  }

  @Put('updateGlobalModule')
  upadteGlobalModule(@Body() body) {
    this.globalModuleService.updateGlobalModuleValue(JSON.stringify(body))
    return this.globalModuleService.getGlobalModuleValue();
  }

  @Get('dynamicModuleValue')
  getDynamicModuleValue() {
    return this.dynamicModuleValue
  }
}
