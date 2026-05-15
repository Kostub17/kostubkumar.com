import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  constructor(private config: ConfigService) {}

  async sendEmail(name: string, email: string, message: string) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: this.config.get('EMAIL_USER'),
        pass: this.config.get('EMAIL_PASS'),
      },
    });

    await transporter.sendMail({
      from: this.config.get('EMAIL_USER'),
      to: this.config.get('EMAIL_USER'),
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return { success: true };
  }
}