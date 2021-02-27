require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY)

exports.handler = (event, context, callback) => {
  const { stripeId } = event.queryStringParameters
  stripe.subscriptions.del(stripeId).then(() => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: 'CUSTOMER HAS BEEN UNSUBSCRIBED' })
    })
  })
    .catch(error => {
      callback(null, {
        statusCode: 422,
        body: JSON.stringify({ message: 'ERROR GETTING CUSTOMERS', error })
      })
    })
}
