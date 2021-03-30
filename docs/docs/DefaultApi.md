# AmbianicServerlessFunctionsApiDefinition.DefaultApi

All URIs are relative to *http://localhost:5050*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscriptionPost**](DefaultApi.md#cancelSubscriptionPost) | **POST** /cancel-subscription | 
[**createStripeSubscriberPost**](DefaultApi.md#createStripeSubscriberPost) | **POST** /create-stripe-subscriber | 
[**netlifyFunctionsGetCustomersGet**](DefaultApi.md#netlifyFunctionsGetCustomersGet) | **GET** /.netlify/functions/getCustomers | 



## cancelSubscriptionPost

> String cancelSubscriptionPost()



Serverless function to cancel a user subscription. Requires &#x60;customer_id&#x60;.

### Example

```javascript
import AmbianicServerlessFunctionsApiDefinition from 'ambianic_serverless_functions_api_definition';

let apiInstance = new AmbianicServerlessFunctionsApiDefinition.DefaultApi();
apiInstance.cancelSubscriptionPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html; charset=utf-8


## createStripeSubscriberPost

> String createStripeSubscriberPost()



Serverless function for creating a customer on stripe and subscribing them to an item.

### Example

```javascript
import AmbianicServerlessFunctionsApiDefinition from 'ambianic_serverless_functions_api_definition';

let apiInstance = new AmbianicServerlessFunctionsApiDefinition.DefaultApi();
apiInstance.createStripeSubscriberPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html; charset=utf-8


## netlifyFunctionsGetCustomersGet

> netlifyFunctionsGetCustomersGet()



Serverless function to fetch all customers from a stripe service account.

### Example

```javascript
import AmbianicServerlessFunctionsApiDefinition from 'ambianic_serverless_functions_api_definition';

let apiInstance = new AmbianicServerlessFunctionsApiDefinition.DefaultApi();
apiInstance.netlifyFunctionsGetCustomersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

