import 'reflect-metadata';
import * as dotenv from 'dotenv';
/* eslint-disable import/first */
dotenv.config();

import * as express from 'express';
import { json } from 'body-parser';
import { container } from './inversify.config';
import { EmailController } from './controllers/emailController';

const app: express.Application = express();
const emailController: EmailController = container.resolve(EmailController);

app.use(json());

app.post('/email', emailController.postEmail);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
