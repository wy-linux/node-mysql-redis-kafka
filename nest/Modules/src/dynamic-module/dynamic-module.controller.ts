import { Controller, Get } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';

@Controller('getDynamicModule')
export class DynamicModuleController {
  constructor(private readonly dynamicModuleService: DynamicModuleService) {}

  @Get()
  dynamicModule() {
    return this.dynamicModuleService.dynamicModule();
  }

}
