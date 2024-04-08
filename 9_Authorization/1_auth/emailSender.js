const nodemailer = require("nodemailer");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../", ".env") });
const { MAILGUN_SMTP_USER, MAILGUN_SMTP_PASSWORD } = process.env;

function replaceContent(content, creds) {
  let allkeysArr = Object.keys(creds);
  allkeysArr.forEach(function (key) {
    content = content.replace(`#{${key}}`, creds[key]);
  });
  return content;
}

// Helper function
async function EmailHelper(templateName, reciverEmail, creds) {
  try {
    const templatePath = path.join(__dirname, "email_templates", templateName);

    let content = await fs.promises.readFile(templatePath, "utf-8");

    // Email body
    const emailDetails = {
      to: reciverEmail,
      from: "sukantaghoshx@gmail.com", // Change to your verified sender
      subject: "Welcome to our platform",
      text: `welcome to our platform ${creds.name}`,
      html: replaceContent(content, creds),
    };

    // Transporter Details
    const transportDetails = {
      host: "smtp.mailgun.org",
      port: 587,
      auth: {
        user: MAILGUN_SMTP_USER,
        pass: MAILGUN_SMTP_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(transportDetails);
    await transporter.sendMail(emailDetails);
    console.log("email sent");
  } catch (err) {
    console.log(err);
  }
}

module.exports = EmailHelper;
