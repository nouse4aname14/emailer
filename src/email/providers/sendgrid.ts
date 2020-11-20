import { injectable } from 'inversify';
import axios from 'axios';
import { EmailPayload, EmailProvider } from './emailProvider';

@injectable()
export class Sendgrid implements EmailProvider {
  public async sendEmail(emailPayload: EmailPayload): Promise<boolean> {
    const sendgridResponse = await axios(`${process.env.SENDGRID_API_URL}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      data: {
        personalizations: [
          {
            to: [{ email: emailPayload.to }],
          },
        ],
        from: { email: emailPayload.from },
        subject: emailPayload.subject,
        content: [{ type: 'text/plain', value: emailPayload.body }],
      },
    });

    return sendgridResponse.status >= 200 && sendgridResponse.status <= 299;
  }
}
