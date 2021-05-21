# AmbianicFunctionsCollection.MiscApi

All URIs are relative to *https://f6e4b5c4-c6b6-4f0a-b3c5-fede7a786a98.mock.pstmn.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**premiumNotification**](MiscApi.md#premiumNotification) | **POST** /premium-notification | premium-notification
[**subscribe**](MiscApi.md#subscribe) | **POST** /subscribe | subscribe
[**subscription**](MiscApi.md#subscription) | **DELETE** /subscription | subscription
[**subscriptionData**](MiscApi.md#subscriptionData) | **GET** /stripe-data | subscription-data



## premiumNotification

> premiumNotification(userId, notification, accessControlAllowOrigin)

premium-notification

An endpoint to send notifications about detected objects to a premium ambianic subscriber from a running edge device, delivered from the Cloud API.

### Example

```javascript
import AmbianicFunctionsCollection from 'ambianic_functions_collection';

let apiInstance = new AmbianicFunctionsCollection.MiscApi();
let userId = AUTHO_USER_ID ; // String | Authenticated user ID gotten from auth0
let notification = NOTIFICATION_DATA; // String | Notification object containing detected event details from running ambianic edge device
let accessControlAllowOrigin = *; // String | 
apiInstance.premiumNotification(userId, notification, accessControlAllowOrigin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Authenticated user ID gotten from auth0 | 
 **notification** | **String**| Notification object containing detected event details from running ambianic edge device | 
 **accessControlAllowOrigin** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## subscribe

> subscribe(_number, cvc, expMonth, expYear, email, accessControlAllowOrigin, accessControlAllowHeaders, contentType)

subscribe

Create a new stripe user and a subscription

### Example

```javascript
import AmbianicFunctionsCollection from 'ambianic_functions_collection';

let apiInstance = new AmbianicFunctionsCollection.MiscApi();
let _number = CREDIT_CARD_NUMBER; // String | 16 digit Number on the credit card supplied
let cvc = CREDIT_CARD_CVC; // String | Cvc number behind credit card
let expMonth = CREDIT_CARD_EXPIRY_MONTH; // String | 2 digit expected credit card expiry month.
let expYear = CREDIT_CARD_EXPIRY_YEAR; // String | 4 digit expected credit card expiry year.
let email = SUBSCRIBER_EMAIL; // String | Subscriber's email address
let accessControlAllowOrigin = *; // String | 
let accessControlAllowHeaders = Content-Type; // String | 
let contentType = application/json; // String | 
apiInstance.subscribe(_number, cvc, expMonth, expYear, email, accessControlAllowOrigin, accessControlAllowHeaders, contentType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| 16 digit Number on the credit card supplied | 
 **cvc** | **String**| Cvc number behind credit card | 
 **expMonth** | **String**| 2 digit expected credit card expiry month. | 
 **expYear** | **String**| 4 digit expected credit card expiry year. | 
 **email** | **String**| Subscriber&#39;s email address | 
 **accessControlAllowOrigin** | **String**|  | 
 **accessControlAllowHeaders** | **String**|  | 
 **contentType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## subscription

> subscription(subscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType)

subscription

Delete a user&#39;s subscription on Stripe, either active or expired.

### Example

```javascript
import AmbianicFunctionsCollection from 'ambianic_functions_collection';

let apiInstance = new AmbianicFunctionsCollection.MiscApi();
let subscriptionId = SUBSCRIBER-ID; // String | ID for the user's subscription to be deleted
let accessControlAllowOrigin = *; // String | 
let accessControlAllowHeaders = Content-Type; // String | 
let contentType = application/json; // String | 
apiInstance.subscription(subscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| ID for the user&#39;s subscription to be deleted | 
 **accessControlAllowOrigin** | **String**|  | 
 **accessControlAllowHeaders** | **String**|  | 
 **contentType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## subscriptionData

> subscriptionData(userStripeId, userSubscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType)

subscription-data

Retrieve a subscribed customer&#39;s data from Stripe

### Example

```javascript
import AmbianicFunctionsCollection from 'ambianic_functions_collection';

let apiInstance = new AmbianicFunctionsCollection.MiscApi();
let userStripeId = STRIPE_CUSTOMER_ID; // String | Id for the customer created on Stripe
let userSubscriptionId = CREATED_SUBSCRIPTION_ID; // String | Id for the user's subscription with Ambianic
let accessControlAllowOrigin = *; // String | 
let accessControlAllowHeaders = Content-Type; // String | 
let contentType = application/json; // String | 
apiInstance.subscriptionData(userStripeId, userSubscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userStripeId** | **String**| Id for the customer created on Stripe | 
 **userSubscriptionId** | **String**| Id for the user&#39;s subscription with Ambianic | 
 **accessControlAllowOrigin** | **String**|  | 
 **accessControlAllowHeaders** | **String**|  | 
 **contentType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

