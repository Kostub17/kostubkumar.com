import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  constructor(private config: ConfigService) {}

  async sendEmail(name: string, email: string, message: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.get('EMAIL_USER'),
        pass: this.config.get('EMAIL_PASS'),
      },
    });

    await transporter.sendMail({
      from: email,
      to: this.config.get('EMAIL_USER'),
      subject: `Portfolio contact from ${name}`,
      text: message,
    });

    return { success: true };
  }
}