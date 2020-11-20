export interface EmailPayload {
  to: string;
  toName: string;
  from: string;
  fromName: string;
  subject: string;
  body: string;
}

export interface EmailProvider {
  sendEmail(emailPayload: EmailPayload): Promise<boolean>;
}
