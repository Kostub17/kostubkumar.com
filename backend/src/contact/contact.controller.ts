import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async contact(@Body() body: { name: string; email: string; message: string }) {
    return this.contactService.sendEmail(body.name, body.email, body.message);
  }
}