require("dotenv").config();
const { ManagementClient } = require("auth0");
const moment = require("moment");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const nodemailer = require("nodemailer");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

const management = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.MGT_CLIENT_ID,
  clientSecret: process.env.MGT_CLIENT_SECRET,
  scope: "read:users update:users",
});

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: { user: process.env.SMTP_USERNAME, pass: process.env.SMTP_PASSWORD },
});

const sender = process.env.SMTP_SENDER;

exports.handler = async (event, context, callback) => {
    const { userId, notification } = JSON.parse(`${event.body}`);

    try {
      const { user_metadata, email, nickname } = await management.getUser({ id: userId });

      const { userSubscriptionId } = user_metadata;
      const {status } = await stripe.subscriptions.retrieve(userSubscriptionId);

      if (status === 'active') {
        try {
          await transport.sendMail({
            from: sender,
            to: email,
            subject: notification.title,
            text: "An object has been detected from your Ambianic Device",
            html:
                `
            <div>
            <h3> Hello ${nickname}</h3> <br />
            <p> ${notification.message} today at <b> ${moment(new Date()).format("hh:mm A")}</b></p>
            </div>
            `,
          });

          callback(null, {
            statusCode: 200,
            headers,
            body: JSON.stringify({
              message: `Notification sent to ${email}`,
            }),
          });
        } catch (error) {
          console.log(error);
          callback(null, {
            statusCode: 422,
            headers,
            body: JSON.stringify({ error }),
          });
        }
      } else {
        callback(null, {
          statusCode: 403,
          headers,
          body: JSON.stringify({
            message: "Premium subscription inactive. Cannot send notification email. Please (re)activate premium subscription service.",
          }),
        });
      }
    } catch (error) {
      callback(null, {
        headers,
        statusCode: 422,
        body: JSON.stringify({ error: error.message }),
      });
    }
};
