# ambianic-subscriptions
Repo for ambianic premium subscription management

This repo hosts [Netlify functions](https://www.netlify.com/products/functions/) that handle Ambianic premium user subscriptions. This is code that cannot run in the browser PWA, because it needs access keys to subscription and payment gateway services (Stripe) shared between all app users. If the code runs in the PWA, users will be able to see and manipulate each other's premium subscription data

A high level sketch of the functions can be found [here](https://drive.google.com/file/d/181etJhBye0u1zvqzAnBY0VtCS0A3SlQ-/view?usp=sharing).
 
