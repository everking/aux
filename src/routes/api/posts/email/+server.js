import { json } from '@sveltejs/kit'
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

export const prerender = false;
const emailUser = process.env.SMTP_EMAIL_USER;
const emailPassword = process.env.SMTP_EMAIL_PASSWORD;
const contactEmails = process.env.SMTP_CONTACT_EMAILS;
const fromEmailAddress = '"Auxilium Admins" <admins@auxilium.guide>';
cosnt smtpHost = "smtp.gmail.com";

const emailSettings = {
  host: smtpHost,
  port: 465,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPassword
  },
};

const transporter = nodemailer.createTransport(smtpTransport(emailSettings));

const sendEmail = async (emailSubject, emailBody) => {
  const result = {};
  try {
    const emailResult = await transporter.sendMail({
      from: fromEmailAddress,
      to: contactEmails,
      subject: emailSubject,
      text: emailBody,
    });
    result.message = "Email sent successfully";
    result.info = emailResult.response;
    console.error(`${result.message}: ${result.info}.`);
  } catch (error) {
    result.message = "Error while sending email";
    result.error = error;
    console.error(`${result.message}: ${error}.`);
  }
  console.log(`sendEmail result: ${JSON.stringify(result, null, 2)}`);
  return result;
}
// Send email using the transporter

export const POST = async ({ params, request }) => {
  const data = await request.json();
  console.log(`request.json: ${JSON.stringify(data, null, 2)}`);
  const result = await sendEmail(data.emailSubject, data.emailBody);
  console.log(`result: ${JSON.stringify(result, null, 2)}`);
  return json(result);
}