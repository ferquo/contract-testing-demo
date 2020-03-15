import { Controller, Get, Req, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { Response } from 'express';

@Controller('mail')
export class MailController {

  @Get('')
  async GetLandingRoute(
    @Res() response: Response) {
    response.status(HttpStatus.OK).send({
      message: 'Hello World'
    });
  }

  @Post('send')
  async SendMail(
    @Body() requestBody: any,
    @Res() response: Response
  ) {
    response.send({message: 'dikk'});
  }
}
