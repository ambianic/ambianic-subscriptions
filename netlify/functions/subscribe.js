require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

// TODO: Refactor to use async await.
exports.handler = ({ body, httpMethod }, context, callback) => {
  if (httpMethod === "OPTIONS") {
    // for first preflight request
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: "OK",
      }),
    });
  }

  const { number, cvc, exp_month, exp_year, email } = JSON.parse(`${body}`);

  stripe.sources.create(
    {
      type: "ach_credit_transfer",
      currency: "usd",
      owner: {
        email,
      },
    },
    (err, source) => {
      if (err) {
        console.log(err);
      }
      // Create a payment method for user using the Card Details
      stripe.paymentMethods
        .create({
          type: "card",
          card: {
            number,
            cvc,
            exp_year,
            exp_month,
          },
        })
        .then(({ id: paymentID }) => {
          // Creates Customer ==>
          stripe.customers
            .create({
              email,
              description: "Ambianic customer using premium service",
              payment_method: paymentID,
              source: source.id,
            })
            .then(({ id: customerID }) => {
              stripe.paymentMethods
                .attach(paymentID, { customer: customerID })
                .then(() => {
                  stripe.subscriptions
                    .create({
                      customer: customerID,
                      items: [
                        {
                          price: process.env.EMAIL_PRODUCT_ID,
                        },
                      ],
                    })
                    .then((data) =>
                      callback(null, {
                        statusCode: 200,
                        headers,
                        body: JSON.stringify({
                          message: "NOTIFICATION SUBSCRIPTION CREATED",
                          userStripeId: customerID,
                          userSubscriptionId: data.id,
                        }),
                      })
                    )
                    .catch((e) => {
                      console.log(`Err creating subscription : ${e}`);
                    });
                })
                .catch((e) => {
                  console.log(`Creating customer ${e}`);
                });
            });
        })
        .catch((error) =>
          callback(null, {
            statusCode: 422,
            headers,
            body: JSON.stringify({ message: "ERROR CREATING USER", error }),
          })
        );
    }
  );
};
