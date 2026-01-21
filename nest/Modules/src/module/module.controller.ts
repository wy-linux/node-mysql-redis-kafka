import { Controller, Get } from '@nestjs/common';
import { ModuleService } from './module.service';
import { GlobalModuleService } from '../global-module/global-module.service'

@Controller('getModule')
export class ModuleController {
  constructor(
    private readonly moduleService: ModuleService,
    private readonly globalModuleService: GlobalModuleService,
  ) {}

  @Get()
  module() {
    return this.moduleService.module();
  }
  
  @Get('globalModule')
  GlobalModule() {
    return this.globalModuleService.getGlobalModuleValue();
  }

}
