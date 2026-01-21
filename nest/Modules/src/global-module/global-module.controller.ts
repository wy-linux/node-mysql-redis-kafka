import { Controller, Get } from '@nestjs/common';
import { GlobalModuleService } from './global-module.service';

@Controller('getGlobalModule')
export class GlobalModuleController {
  constructor(private readonly globalModuleService: GlobalModuleService) {}

  @Get()
  getGlobalModuleValue() {
    return this.globalModuleService.getGlobalModuleValue();
  }

}
