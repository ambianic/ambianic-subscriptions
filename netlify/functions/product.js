require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

exports.handler = async (event, context, callback) => {

  if (event.httpMethod === "OPTIONS") {
    // for preflight check
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({ status: "OK" }),
    });
  } else if (event.httpMethod === "GET") {

    try {
      const product = await stripe.products.retrieve(process.env.EMAIL_PRODUCT_ID);

      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({ product }),
      });
    } catch (error) {
      callback(null, {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error }),
      });
    }
  }
};
