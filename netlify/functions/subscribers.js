require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY)

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
}

exports.handler = (event, context, callback) => {
  stripe.customers
    .list()
    .then(customers => {
      return callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({ customers })
      })
    })
    .catch(error => callback(null, {
      statusCode: 422,
      headers,
      body: JSON.stringify({ message: 'ERROR GETTING CUSTOMERS', error })
    }))
}
