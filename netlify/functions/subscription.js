require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

const headers = {
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

exports.handler = async (
  { queryStringParameters, httpMethod },
  context,
  callback
) => {
  const { stripeId, userSubscriptionId } = queryStringParameters;

  const operation = httpMethod;
  if (operation === "OPTIONS") {
    // for preflight check
    callback(null, {
      headers,
      statusCode: 200,
      body: JSON.stringify({ status: "OK" }),
    });
  } else if (operation === "GET") {
    try {
      const customer = await stripe.subscriptions.retrieve(stripeId);

      callback(null, {
        headers,
        statusCode: 200,
        body: JSON.stringify({ customer }),
      });
    } catch (error) {
      callback(null, {
        headers,
        statusCode: 422,
        body: JSON.stringify({ error: error.response.data }),
      });
    }
  } else if (operation === "DELETE") {

    try {
      const deleted = await stripe.subscriptions.del(userSubscriptionId);
      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: "SUBSCRIPTION HAS BEEN CANCELLED",
          details: deleted,
        }),
      });
    } catch (e) {
      console.log(e);
      callback(null, {
        statusCode: 422,
        body: JSON.stringify({ message: "ERROR CANCELLING SUBSCRIPTION", error : e.raw.message}),
        headers,
      });
    }
  } 
};
