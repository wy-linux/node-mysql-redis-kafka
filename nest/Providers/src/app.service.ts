import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppService() {
    return 'AppService: AppService'
  }

  getUseClass() {
    return 'useClass: AppService'
  }

}
