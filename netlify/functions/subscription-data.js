require("dotenv").config();
const { ManagementClient } = require("auth0");
const stripe = require("stripe")(process.env.STRIPE_KEY);

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

exports.handler = async (event, context, callback) => {
  const { userId } = event.queryStringParameters;
  const operation = event.httpMethod;

  if (operation === "GET") {
    try {
      const { user_metadata } = await management.getUser({ id: userId });
      const {
        current_period_end,
        current_period_start,
        status,
      } = await stripe.subscriptions.retrieve(user_metadata.userSubscriptionId);

      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          user_metadata,
          sub_details: { current_period_end, current_period_start, status },
        }),
      });
    } catch (error) {
      console.log(error);
      callback(null, {
        headers,
        statusCode: 422,
        body: JSON.stringify({ error: error.message }),
      });
    }
  } else if (operation === "POST") {
    const { user_id, userStripeId, userSubscriptionId } = JSON.parse(
      `${event.body}`
    );

    try {
      const user = await management.updateUserMetadata(
        { id: user_id },
        {
          userStripeId,
          userSubscriptionId,
        }
      );

      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({ user }),
      });
    } catch (error) {
      callback(null, {
        headers,
        statusCode: 422,
        body: JSON.stringify({ error: error.message }),
      });
    }
  }

  // for preflight check
  callback(null, {
    headers,
    statusCode: 200,
    data: JSON.stringify({ status: "OK" }),
  });
};
