import { Module, Global } from '@nestjs/common';
import { GlobalModuleService } from './global-module.service';
import { GlobalModuleController } from './global-module.controller';

@Global()
@Module({
  controllers: [GlobalModuleController],
  providers: [GlobalModuleService],
  exports: [GlobalModuleService]
})
export class GlobalModuleModule {}
