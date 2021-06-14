# AmbianicCloudApiCollection.DefaultApi

All URIs are relative to *http://127.0.0.1:4010*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](DefaultApi.md#createSubscription) | **POST** /subscription | Subscribe a user to Ambianic&#39;s Premium Services
[**deleteSubscription**](DefaultApi.md#deleteSubscription) | **DELETE** /subscription | Delete an Ambianic&#39;s user subscription
[**getNotificationProduct**](DefaultApi.md#getNotificationProduct) | **GET** /product | Retrieve notification product
[**getSubscriptionData**](DefaultApi.md#getSubscriptionData) | **GET** /subscription | Get a user&#39;s subscription data
[**sendNotification**](DefaultApi.md#sendNotification) | **POST** /notification | Send an event detection notification



## createSubscription

> InlineResponse2001 createSubscription(accessControlAllowOrigin, email, cvc, _number, expYear, expMonth)

Subscribe a user to Ambianic&#39;s Premium Services

A POST request to create a new customer under Ambianic and also subscribe user to Ambianic Premium Service

### Example

```javascript
import AmbianicCloudApiCollection from 'ambianic_cloud_api_collection';

let apiInstance = new AmbianicCloudApiCollection.DefaultApi();
let accessControlAllowOrigin = *; // String | 
let email = "email_example"; // String | 
let cvc = "cvc_example"; // String | 
let _number = "_number_example"; // String | 
let expYear = "expYear_example"; // String | 
let expMonth = "expMonth_example"; // String | 
apiInstance.createSubscription(accessControlAllowOrigin, email, cvc, _number, expYear, expMonth, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessControlAllowOrigin** | **String**|  | 
 **email** | **String**|  | 
 **cvc** | **String**|  | 
 **_number** | **String**|  | 
 **expYear** | **String**|  | 
 **expMonth** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data, application/json
- **Accept**: application/json


## deleteSubscription

> InlineResponse2002 deleteSubscription(subscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType)

Delete an Ambianic&#39;s user subscription

Delete a user&#39;s subscription on Stripe, either active or expired.

### Example

```javascript
import AmbianicCloudApiCollection from 'ambianic_cloud_api_collection';

let apiInstance = new AmbianicCloudApiCollection.DefaultApi();
let subscriptionId = SUBSCRIBER-ID; // String | ID for the user's subscription to be deleted
let accessControlAllowOrigin = *; // String | 
let accessControlAllowHeaders = Content-Type; // String | 
let contentType = application/json; // String | 
apiInstance.deleteSubscription(subscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationProduct

> InlineResponse2004 getNotificationProduct(accessControlAllowOrigin, opts)

Retrieve notification product

An endpoint to retrieve details about the Ambianic notifications product.

### Example

```javascript
import AmbianicCloudApiCollection from 'ambianic_cloud_api_collection';

let apiInstance = new AmbianicCloudApiCollection.DefaultApi();
let accessControlAllowOrigin = *; // String | 
let opts = {
  'inlineObject1': new AmbianicCloudApiCollection.InlineObject1() // InlineObject1 | 
};
apiInstance.getNotificationProduct(accessControlAllowOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessControlAllowOrigin** | **String**|  | 
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSubscriptionData

> InlineResponse200 getSubscriptionData(userStripeId, userSubscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType)

Get a user&#39;s subscription data

Retrieve a subscribed customer&#39;s data from Stripe

### Example

```javascript
import AmbianicCloudApiCollection from 'ambianic_cloud_api_collection';

let apiInstance = new AmbianicCloudApiCollection.DefaultApi();
let userStripeId = STRIPE_CUSTOMER_ID; // String | Id for the customer created on Stripe
let userSubscriptionId = CREATED_SUBSCRIPTION_ID; // String | Id for the user's subscription with Ambianic
let accessControlAllowOrigin = *; // String | 
let accessControlAllowHeaders = Content-Type; // String | 
let contentType = application/json; // String | 
apiInstance.getSubscriptionData(userStripeId, userSubscriptionId, accessControlAllowOrigin, accessControlAllowHeaders, contentType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendNotification

> InlineResponse2003 sendNotification(userId, notification, accessControlAllowOrigin, opts)

Send an event detection notification

An endpoint to send notifications about detected objects to a premium ambianic subscriber from a running edge device, delivered from the Cloud API.

### Example

```javascript
import AmbianicCloudApiCollection from 'ambianic_cloud_api_collection';

let apiInstance = new AmbianicCloudApiCollection.DefaultApi();
let userId = AUTHO_USER_ID ; // String | ID of the user that owns the Edge Device triggering the notification
let notification = {dateTime: "monday"}; // String | Notification object containing detected event details from running ambianic edge device
let accessControlAllowOrigin = *; // String | 
let opts = {
  'inlineObject': new AmbianicCloudApiCollection.InlineObject() // InlineObject | 
};
apiInstance.sendNotification(userId, notification, accessControlAllowOrigin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of the user that owns the Edge Device triggering the notification | 
 **notification** | **String**| Notification object containing detected event details from running ambianic edge device | 
 **accessControlAllowOrigin** | **String**|  | 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

