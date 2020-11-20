import { injectable, inject } from 'inversify';
import { EmailPayload, EmailProvider } from './providers/emailProvider';

@injectable()
export class EmailService {
  private emailProvider: EmailProvider;

  public constructor(@inject('EmailProvider') emailProvider: EmailProvider) {
    this.emailProvider = emailProvider;
  }

  public async sendEmail(emailPayload: EmailPayload): Promise<boolean> {
    return this.emailProvider.sendEmail(emailPayload);
  }
}
