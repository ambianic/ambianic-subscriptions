# Ambianic-subscriptions

## Repo for ambianic premium subscription management

<p> This repo hosts [Netlify functions](https://www.netlify.com/products/functions/) that handle Ambianic premium user subscriptions. This is code that cannot run in the browser PWA, because it needs access keys to subscription and payment gateway services (Stripe) shared between all app users. If the code runs in the PWA, users will be able to see and manipulate each other's premium subscription data </p>

The image below shows the architecture of these serverless functions in connection with the Ambianic [PWA](https://github.com/ambianic/ambianic-ui/) and [Edge Device](https://github.com/ambianic/ambianic-edge) .
![serverless-functions-architecture](./assets/cloud-api.png)

## Running Locally

The serverless functions within this project are managed using [netlify-dev](https://www.netlify.com/products/dev/). Start the functions emulator from the `netlify` directory using `yarn netlify-dev` to listen for requests to any of created functions on port `5050`.

Credentials within this project are managed using environment variables and [GitHub Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets). To run the functions here locally using the `netlify dev` command, create a `.env` file in the root directory with the following values;

```
# Access key from Stripe to access your Stripe resources
STRIPE_KEY=STRIPE_KEY

# The product ID which users are subscribed to.
EMAIL_PRODUCT_ID=STRIPE_KEY
```

## CI / CD Pipeline


The three currently available serverless function endpoints are all tested using [Postman Tests](https://www.postman.com/automated-testing/). The API documentation explaining the endpoints can be found in the GitHub pages for this repository [here](https://ambianic.github.io/ambianic-subscriptions.github.io/). An exported file of the postman collection in json format is available at `./tests/postman/ambianic-functions-collection.postman_collection.json`.

Continuous integration for this project is managed using [GitHub Actions](https://github.com/features/actions), driven using the steps in the `.github/workflows/ci.yaml` file. The following sensitive credentials used within the CI jobs are managed using [Github Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets);

- STRIPE_KEY
- GITHUB_TOKEN
- NPM_TOKEN
- REPOSITORY_ACCESS_TOKEN
