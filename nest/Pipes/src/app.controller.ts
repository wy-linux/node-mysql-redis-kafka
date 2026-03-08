import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe, UsePipes } from '@nestjs/common';
import { ValidationPipe } from './pipe/pipe.pipe'
import { AppService } from './app.service';
import { CreatePipeDto } from './dto/create-pipe.dto';
import { UpdatePipeDto } from './dto/update-pipe.dto';

// ValidationPipe	    数据验证，常配合 class-validator 校验 DTO
// ParseIntPipe	      数据转换，将字符串转换为整数
// ParseFloatPipe	    数据转换，将字符串转换为浮点数
// ParseBoolPipe	    数据转换，将字符串转换为布尔值
// ParseArrayPipe	    数据转换，将字符串转换为数组
// ParseUUIDPipe	    数据转换，验证并确保参数是有效的 UUID
// ParseEnumPipe	    数据转换，将值转换为特定枚举的成员
// DefaultValuePipe	  数据转换，当参数值为 undefined 或 null 时提供默认值
// ParseFilePipe	    数据验证，用于验证上传的文件

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id, id)
    return this.appService.findOne(id);
  }

  @Post()
  create(@Body(new ValidationPipe()) createPipeDto: CreatePipeDto) {
    return this.appService.create(createPipeDto);
  }

  @Patch(':id')
  // @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updatePipeDto: UpdatePipeDto) {
    return this.appService.update(+id, updatePipeDto);
  }

}
