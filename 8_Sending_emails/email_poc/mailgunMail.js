const formData = require("form-data");
const Mailgun = require("mailgun.js");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../", ".env") });
const { MAILGUN_API_KEY } = process.env;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY,
});

mg.messages
  .create("sandboxd4c9e308e10044ecbd49c5bee6a5212c.mailgun.org", {
    from: "sukantaghoshx@gmail.com",
    to: ["isukanta10ghosh@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
    html: "<h1>Click me!!!!</h1>",
  })
  .then((msg) => console.log(msg)) // logs response data
  .catch((err) => console.log(err)); // logs any error
