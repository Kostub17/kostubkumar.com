import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class ContactService {
  constructor(private config: ConfigService) {}

  async sendEmail(name: string, email: string, message: string) {
    const resend = new Resend(this.config.get('RESEND_API_KEY'));

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: this.config.get('EMAIL_USER') as string,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return { success: true };
  }
}