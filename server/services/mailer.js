const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config();

const sendMail = async ({
  to,
  subject,
  html,
  attachments,
}) => {
  try {
    const from = "Babble.io";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.APPLICATION_EMAIL,
        pass: process.env.MAIL_KEY
      }
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${from} <${process.env.APPLICATION_EMAIL}>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      html: html, // html body
    });

  } catch (error) {

    console.log(error);

  }
};

exports.sendEmail = async (args) => {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
    return sendMail(args);
  }
};
