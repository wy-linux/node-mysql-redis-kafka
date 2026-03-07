import { Controller, Get, Param, NotFoundException, BadRequestException, UseFilters, ForbiddenException } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './exception.filter'

@Controller('filter')
// @UseFilters(new HttpExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('find/:id')
  @UseFilters(new HttpExceptionFilter()) 
  findOne(@Param('id') id: string) {
    if (!id || id.length !== 6) {
      // 抛出400错误
      throw new BadRequestException('Invalid product ID format');
    }
    const product = this.appService.findOne(id);
    if (!product) {
      // 抛出404错误
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  @Get('forbidden') 
  forbidden() {
    throw new ForbiddenException();
  }
}
