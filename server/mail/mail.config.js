import Nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import { MailtrapTransport } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TOKEN;

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

const sender = {
  address: "mailtrap@demomailtrap.com",
  name: "MERN AUTH MAIL TESTER",
};
const recipients = ["keshavpandya04@gmail.com"];

transport
  .sendMail({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
