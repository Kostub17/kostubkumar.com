import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  sendMessage(body: { name: string; email: string; message: string }) {
    // Here you would implement email sending logic
    console.log('Contact message:', body);
    return { message: 'Message sent successfully' };
  }
}