require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

exports.handler = async ({ httpMethod, queryStringParameters }, context, callback) => {
  const { productId } = queryStringParameters

  if (!productId) {
    callback(null, {
      statusCode: 422,
      headers,
      body: JSON.stringify({ message: "Provide productId param to retrieve product details" }),
    });
  }

  if (httpMethod === "OPTIONS") {
    // for preflight check
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({ status: "OK" }),
    });
  } else if (httpMethod === "GET") {

    try {
      const product = await stripe.products.retrieve(productId);

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
