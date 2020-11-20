import { injectable } from 'inversify';
import axios from 'axios';
import { EmailPayload, EmailProvider } from './emailProvider';

const FormData = require('form-data');

@injectable()
export class Mailgun implements EmailProvider {
  public async sendEmail(emailPayload: EmailPayload): Promise<boolean> {
    const formData = new FormData();

    formData.append('from', `${emailPayload.fromName} <${emailPayload.from}>`);
    formData.append('to', `${emailPayload.toName} <${emailPayload.to}>`);
    formData.append('subject', emailPayload.subject);
    formData.append('text', emailPayload.body);

    const mailgunResponse = await axios(`${process.env.MAILGUN_API_URL}`, {
      method: 'post',
      auth: {
        username: process.env.MAILGUN_API_USER || '',
        password: process.env.MAILGUN_API_KEY || '',
      },
      headers: formData.getHeaders(),
      data: formData,
    });

    return mailgunResponse.status >= 200 && mailgunResponse.status <= 299;
  }
}
