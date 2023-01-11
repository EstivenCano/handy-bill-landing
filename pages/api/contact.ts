import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { match } from 'ts-pattern';

require('dotenv').config();

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.email,
    pass: process.env.node_password,
  },
  secure: true,
});

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const mailData = {
    from: req.body.name,
    to: process.env.email,
    subject: `Message From ${req.body.name} - using Handy Bill`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  match(req.method)
    .with('POST', async () => {
      try {
        await transporter.sendMail(mailData);
        return res
          .status(200)
          .send({ success: true, message: 'form.response.200' });
      } catch (err: any) {
        console.error(err);
        return res
          .status(400)
          .send({ success: false, message: 'form.response.400' });
      }
    })
    .otherwise(() => {
      return res
        .status(405)
        .send({ success: false, message: 'form.response.405' });
    });
}
