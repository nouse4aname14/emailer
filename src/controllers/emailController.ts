import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import isEmail from 'validator/lib/isEmail';
import { EmailService } from '../email/emailService';

@injectable()
export class EmailController {
  private emailService: EmailService;

  public constructor(@inject(EmailService) emailService: EmailService) {
    this.emailService = emailService;
  }

  public postEmail = async (req: Request, res: Response): Promise<Response> => {
    try {
      const requiredPostEmailFields: string[] = [
        'to',
        'to_name',
        'from',
        'from_name',
        'subject',
        'body',
      ];

      if (
        !requiredPostEmailFields.every(field => Object.keys(req.body).includes(field)) ||
        !isEmail(req.body.to) ||
        !isEmail(req.body.from)
      ) {
        return res.status(400).send({});
      }

      const sendEmailResult: boolean = await this.emailService.sendEmail({
        to: req.body.to,
        toName: req.body.to_name,
        from: req.body.from,
        fromName: req.body.from_name,
        subject: req.body.subject,
        body: req.body.body.replace(/(<([^>]+)>)/gi, ''),
      });

      return res.status(sendEmailResult ? 200 : 400).send({});
    } catch (e) {
      return res.status(500).send({});
    }
  };
}
