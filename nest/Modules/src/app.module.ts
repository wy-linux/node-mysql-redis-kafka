import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleModule } from './module/module.module';
import { GlobalModuleModule } from './global-module/global-module.module';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';

@Module({
  imports: [ModuleModule, GlobalModuleModule, DynamicModuleModule.forRoot({provide: 'wangyu', useValue: 9999})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
