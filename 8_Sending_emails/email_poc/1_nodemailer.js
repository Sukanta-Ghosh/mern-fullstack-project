const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../", ".env") });
const { SENDGRID_KEY, MAILGUN_SMTP_USER, MAILGUN_SMTP_PASSWORD } = process.env;

// enter the details of the service that you want to use -> tech details -> transport service
// deatils about sendgrid
const transportDetails = {
  host: "smtp.sendgrid.net", // SMTP server name
  port: 587,
  auth: {
    user: "apikey",
    pass: SENDGRID_KEY,
  },
};

// enter the details of the service that you want to use -> tech details -> transport service
// deatils about sendgrid
const transportDetailsMailgun = {
  host: "smtp.mailgun.org", // SMTP server name
  port: 587, //or 465
  auth: {
    user: MAILGUN_SMTP_USER,
    pass: MAILGUN_SMTP_PASSWORD,
  },
};

// gmail
// const gmailTransportDetails = {
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: "api_key",
//         pass: SENDGRID_KEY
//     }
// }
// details about the email
const emailDetails = {
  to: "isukanta10ghosh@gmail.com",
  from: "sukantaghoshx@gmail.com", // Change to your verified sender
  subject: "POC for sending email using sendgrid",
  text: "Text content of the email will be printed if there is no parser at client level",
  html: "<strong>POC message with nodemailer</strong>",
};

const transporter = nodemailer.createTransport(transportDetailsMailgun);

transporter
  .sendMail(emailDetails)
  .then(() => {
    console.log("email sent");
  })
  .catch((err) => {
    console.log(err);
  });
