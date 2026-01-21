import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicModuleService {

  dynamicModule() {
    return `static forRoot(options): DynamicModule`;
  }

}
