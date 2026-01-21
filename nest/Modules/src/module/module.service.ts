import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleService {
  module() {
    return `exports: [ModuleService]`;
  }

}
