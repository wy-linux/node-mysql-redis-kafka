import { Injectable } from '@nestjs/common';
import { CreatePipeDto } from './dto/create-pipe.dto';
import { UpdatePipeDto } from './dto/update-pipe.dto';

@Injectable()
export class AppService {
  findOne(id: number) {
    return `This action returns a #${id} pipe`;
  }

  create(createPipeDto: CreatePipeDto) {
    return 'This action adds a new pipe';
  }

  update(id: number, updatePipeDto: UpdatePipeDto) {
    return `This action updates a #${id} pipe`;
  }
}
