import 'reflect-metadata';
import { Container } from 'inversify';
import { Mailgun } from './email/providers/mailgun';
import { Sendgrid } from './email/providers/sendgrid';

const emailProviders: { [key: string]: any } = {
  Mailgun,
  Sendgrid,
};

const container = new Container({ autoBindInjectable: true });

container.bind('EmailProvider').to(emailProviders[process.env.EMAIL_PROVIDER || '']);

export { container };
