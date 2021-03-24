require("dotenv").config();
const nodemailer = require("nodemailer");

const username = process.env.SMTP_USERNAME;
const password = process.env.SMTP_PASSWORD;
let sender = process.env.SENDER;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = (event, context, callback) => {
  const { email } = event.queryStringParameters;

  var transport = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
      user: username,
      pass: password,
    },
  });

  if (!email) {
    res.status(400).send({ error: `Empty email address` });
  }

  transport.verify(function (error, success) {
    if (error) {
      return callback(null, {
        statusCode: 401,
        headers,
        error: `failed to connect with stmp. check credentials`,
      });
    }
  });

  return transport.sendMail(
    {
      from: sender,
      to: email,
      subject: "Notification from Ambianic Edge Device", // Subject line
      text: "Test email from Ambianic Edge Device", // plain text body

      html: "<h2>Hey there!, <br /> Here is an a test email from Ambianic Edge device</h2>", // html body

      // TODO: Send a more customized email with HTML file
      // html: { path: "dist/forgot-password.html" },
    },
    (error, info) => {
      if (error) {
        return callback(null, {
          statusCode: 422,
          headers,
          error,
        });
      }

      transport.close();

      return callback(null, {
        statusCode: 200,
        headers,
        body: data,
      });
    }
  );
};
