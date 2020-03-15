import { Injectable } from '@nestjs/common';
import { MailRequestDto } from '../models/dto/mail-request-dto';
import { MailResponseDto } from '../models/dto/mail-response-dto';

@Injectable()
export class MailService {

  async SendEMail(mailResuestDto: MailRequestDto): Promise<MailResponseDto> {
    let response = new MailResponseDto();
    return response;
  }

}
