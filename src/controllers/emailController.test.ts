/* eslint-disable @typescript-eslint/camelcase */
// import { EmailController } from './emailController';
// import { EmailService } from '../email/emailService';

describe('EmailController', () => {
  describe('postEmail', () => {
    it('succeeds and returns a 200 statusCode', async () => {
      // jest.mock('../email/emailService', () => {
      //   return {
      //     EmailService: jest.fn().mockImplementation(() => {
      //       return { sendEmail: () => Promise.resolve(true) };
      //     }),
      //   };
      // });
      //
      // const req = {
      //   body: {
      //     to: 'cdbco16@yahoo.com',
      //     to_name: 'Cameron Berlino',
      //     from: 'cameronberlino@gmail.com',
      //     from_name: 'Mailgun Sandbox',
      //     subject: 'Hello Cameron Berlino',
      //     body: '<h1>Congratulations Cameron Berlino</h><p>$10</p>',
      //   },
      // };
      //
      // const res = {
      //   status: jest.fn(),
      // };
      //
      // await new EmailController(EmailService).postEmail(req, res);
      //
      // expect(res.status).toBeCalledWith(200);
    });
  });
});
