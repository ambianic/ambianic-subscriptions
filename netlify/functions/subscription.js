require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const headers = {
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

exports.handler = async (
  { queryStringParameters, body, httpMethod },
  context,
  callback
) => {
  const { stripeId, userSubscriptionId } = queryStringParameters;

  const operation = httpMethod;
  if (operation === "OPTIONS") {
    // for preflight check
    callback(null, {
        statusCode: 200,
        headers,
      body: JSON.stringify({ status: "OK" }),
    });
  } else if (operation === "POST") {
      const { number, cvc, exp_month, exp_year, email } = JSON.parse(`${body}`);
      try {
          const source = await stripe.sources.create(
              {
                  type: "ach_credit_transfer",
                  currency: "usd",
                  owner: {
                      email,
                  },
              }
          );

              // Create a payment method for user using the Card Details
             const { id : paymentID }  =  await stripe.paymentMethods
                  .create({
                      type: "card",
                      card: {
                          number,
                          cvc,
                          exp_year,
                          exp_month,
                      },
                  })

             const  { id: customerID } =  await stripe.customers
                  .create({
                      email,
                      description: "Ambianic customer using premium service",
                      payment_method: paymentID,
                      source: source.id,
                  })

             await stripe.paymentMethods
                  .attach(paymentID, { customer: customerID })

             const subscriptionData = await stripe.subscriptions
                  .create({
                      customer: customerID,
                      items: [
                          {
                              price: process.env.EMAIL_PRODUCT_PRICE_ID,
                          },
                      ],
                  })

              callback(null, {
                  statusCode: 200,
                  headers,
                  body: JSON.stringify({
                      message: "NOTIFICATION SUBSCRIPTION CREATED",
                      userStripeId: customerID,
                      userSubscriptionId: subscriptionData.id,
                  }),
              })

      } catch (error) {
          callback(null, {
              statusCode: 500,
              headers,
              body: JSON.stringify({
                  message: "Error creating subscription",
                  error
              }),
          })

      }


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
