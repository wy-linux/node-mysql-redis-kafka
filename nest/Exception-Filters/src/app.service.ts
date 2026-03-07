import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findOne(id: string) {
    if(id === '123456') return null 
    return `Exception-Filters: ${id}`;
  }
}
