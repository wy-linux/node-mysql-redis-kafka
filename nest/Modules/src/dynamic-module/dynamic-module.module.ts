import { Module, DynamicModule } from '@nestjs/common';
import { DynamicModuleController } from './dynamic-module.controller';
import { DynamicModuleService } from './dynamic-module.service';

@Module({
  controllers: [DynamicModuleController],
  providers: [DynamicModuleService]
})
export class DynamicModuleModule {
    static forRoot(options): DynamicModule {
    const provider = createProvider(options);
    return {
      module: DynamicModuleModule,
      providers: [provider],
      exports: [provider],
    };
  }
}

function createProvider(options) {
  return {
      provide: options.provide,
      useValue: {value: options.useValue}
  }
}
