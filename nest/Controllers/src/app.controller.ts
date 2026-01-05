import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Request, Res, Query, Ip, Header, Headers, HttpCode } from '@nestjs/common';
import type { Request as IRequest, Response } from 'express';

@Controller('controllers')
export class AppController {

  @Get('request')
  // @Version('2')
  request(@Request() req: IRequest){
    return {
      url: req.url
    }
  }

  @Get('query')
  // @Version('2')
  query(@Query() query) {
    return {
      query
    }
  }

  @Get('params/:id') 
  params(@Param() params) {
    return {
      params
    }
  }

  @Get('ip')
  ip(@Ip() ip: string) {
    return {
      ip
    }
  }

  @Post('body')
  body(@Body() body) {
    return {
      body
    }
  }

  @Post('bodyName')
  bodyName(@Body('name') name) {
    return {
      bodyName: name
    }
  }

  @Post('headers')
  @Header('Custom-Header', '@Headers()') 
  headers(@Headers() headers) {
    return {
      headers
    }
  }

  @Post('httpCode/:id') 
  @HttpCode(502)
  httpCode(@Param('id') id, @Headers() headers) {
    return {
      httpCode: 404,
      id,
      headers
    }
  }

  @Post('response')
  @HttpCode(500)
  response(@Res() res: Response) {
    console.log(res)
    res.send({
      statusCode: res.statusCode
    })
  }

  @Patch('patch/:id')
  update(@Param('id') id: string) {
    return `Patch Request ${id}`
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return `Delete Request ${id}`
  }
}
