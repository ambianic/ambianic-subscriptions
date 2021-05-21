# AmbianicFunctionsCollection.DefaultApi

All URIs are relative to *https://33743be6-3197-4dd4-8471-50b3640320c9.mock.pstmn.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSubscription**](DefaultApi.md#deleteSubscription) | **DELETE** /subscription | Delete an Ambianic&#39;s user subscription
[**getSubscriptionData**](DefaultApi.md#getSubscriptionData) | **GET** /subscription | Get a user&#39;s subscription data
[**sendNotification**](DefaultApi.md#sendNotification) | **POST** /notification | Send an event detection notification
[**subscribeUser**](DefaultApi.md#subscribeUser) | **POST** /subscribe | Subscribe Ambianic user to premium notification



## deleteSubscription

> deleteSubscription(subscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType)

Delete an Ambianic&#39;s user subscription

Delete a user&#39;s subscription on Stripe, either active or expired.

### Example

```javascript
import AmbianicFunctionsCollection from 'ambianic_functions_collection';

let apiInstance = new AmbianicFunctionsCollection.DefaultApi();
let subscriptionId = SUBSCRIBER-ID; // String | ID for the user's subscription to be deleted
let accessControlAllowOrigin = *; // String | 
let accessControlAllowHeaders = Content-Type; // String | 
let contentType = application/json; // String | 
apiInstance.deleteSubscription(subscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType, (error, data, response) => {
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


## getSubscriptionData

> getSubscriptionData(userStripeId, userSubscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType)

Get a user&#39;s subscription data

Retrieve a subscribed customer&#39;s data from Stripe

### Example

```javascript
import AmbianicFunctionsCollection from 'ambianic_functions_collection';

let apiInstance = new AmbianicFunctionsCollection.DefaultApi();
let userStripeId = STRIPE_CUSTOMER_ID; // String | Id for the customer created on Stripe
let userSubscriptionId = CREATED_SUBSCRIPTION_ID; // String | Id for the user's subscription with Ambianic
let accessControlAllowOrigin = *; // String | 
let accessControlAllowHeaders = Content-Type; // String | 
let contentType = application/json; // String | 
apiInstance.getSubscriptionData(userStripeId, userSubscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType, (error, data, response) => {
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


## sendNotification

> sendNotification(userId, notification, accessControlAllowOrigin)

Send an event detection notification

An endpoint to send notifications about detected objects to a premium ambianic subscriber from a running edge device, delivered from the Cloud API.

### Example

```javascript
import AmbianicFunctionsCollection from 'ambianic_functions_collection';

let apiInstance = new AmbianicFunctionsCollection.DefaultApi();
let userId = AUTHO_USER_ID ; // String | 
let notification = {dateTime: "monday"}; // String | Notification object containing detected event details from running ambianic edge device
let accessControlAllowOrigin = *; // String | 
apiInstance.sendNotification(userId, notification, accessControlAllowOrigin, (error, data, response) => {
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
 **userId** | **String**|  | 
 **notification** | **String**| Notification object containing detected event details from running ambianic edge device | 
 **accessControlAllowOrigin** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## subscribeUser

> subscribeUser(_number, cvc, expMonth, expYear, email, accessControlAllowOrigin, accessControlAllowHeaders, contentType)

Subscribe Ambianic user to premium notification

Create a new stripe user and a subscription

### Example

```javascript
import AmbianicFunctionsCollection from 'ambianic_functions_collection';

let apiInstance = new AmbianicFunctionsCollection.DefaultApi();
let _number = CREDIT_CARD_NUMBER; // String | 16 digit Number on the credit card supplied
let cvc = CREDIT_CARD_CVC; // String | Cvc number behind credit card
let expMonth = CREDIT_CARD_EXPIRY_MONTH; // String | 2 digit expected credit card expiry month. 
let expYear = CREDIT_CARD_EXPIRY_YEAR; // String | 4 digit expected credit card expiry year. 
let email = SUBSCRIBER_EMAIL; // String | Subscriber's email address
let accessControlAllowOrigin = *; // String | 
let accessControlAllowHeaders = Content-Type; // String | 
let contentType = application/json; // String | 
apiInstance.subscribeUser(_number, cvc, expMonth, expYear, email, accessControlAllowOrigin, accessControlAllowHeaders, contentType, (error, data, response) => {
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
 **expMonth** | **String**| 2 digit expected credit card expiry month.  | 
 **expYear** | **String**| 4 digit expected credit card expiry year.  | 
 **email** | **String**| Subscriber&#39;s email address | 
 **accessControlAllowOrigin** | **String**|  | 
 **accessControlAllowHeaders** | **String**|  | 
 **contentType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: Not defined

