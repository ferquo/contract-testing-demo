import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('events')
export class EventsController {

  @Get('')
  async GetEvents(@Res() response: Response) {
    response.status(HttpStatus.OK).send({
      message: 'Hello from events service'
    });
  }

}
