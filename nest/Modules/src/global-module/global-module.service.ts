import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalModuleService {
  private globalModuleValue = `@Global()  exports: [GlobalModuleService]`
  
  getGlobalModuleValue() {
    return this.globalModuleValue;
  }
  updateGlobalModuleValue(value) {
    this.globalModuleValue = value
  }
}
