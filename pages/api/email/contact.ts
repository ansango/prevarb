/* eslint-disable import/no-anonymous-default-export */
import { contactTM } from "./templates/contactTM";
import type { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();
const nodemailer = require("nodemailer");

// get a directory in node

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const { firstName, lastName, email, message, phone, request, member } = req.body;

  const mailer = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "anibalsantosgo@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailOptions = {
    from: email,
    to: "anibalsantosgo@gmail.com",
    subject: `Consulta de ${firstName} ${lastName}`,
    text: "Arbore coop",
    html: contactTM({ firstName, lastName, email, message, phone, request, member }),
  };

  mailer.sendMail(mailOptions, (err: any, info: any) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Error sending email",
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Email sent",
      });
    }
  });
}
