# AmbianicServerlessFunctionsApiDefinition.DefaultApi

All URIs are relative to *https://ambianic-functions.netlify.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**netlifyFunctionsCustomersGet**](DefaultApi.md#netlifyFunctionsCustomersGet) | **GET** /.netlify/functions/customers | 
[**subscriberPost**](DefaultApi.md#subscriberPost) | **POST** /subscriber | 
[**subscriptionDelete**](DefaultApi.md#subscriptionDelete) | **DELETE** /subscription | 



## netlifyFunctionsCustomersGet

> netlifyFunctionsCustomersGet()



Serverless function to fetch all customers from a stripe service account.

### Example

```javascript
import AmbianicServerlessFunctionsApiDefinition from 'ambianic_serverless_functions_api_definition';

let apiInstance = new AmbianicServerlessFunctionsApiDefinition.DefaultApi();
apiInstance.netlifyFunctionsCustomersGet((error, data, response) => {
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


## subscriberPost

> String subscriberPost()



Serverless function for creating a customer on stripe and subscribing them to an item.

### Example

```javascript
import AmbianicServerlessFunctionsApiDefinition from 'ambianic_serverless_functions_api_definition';

let apiInstance = new AmbianicServerlessFunctionsApiDefinition.DefaultApi();
apiInstance.subscriberPost((error, data, response) => {
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


## subscriptionDelete

> String subscriptionDelete()



Serverless function to cancel a user subscription. Requires &#x60;customer_id&#x60;.

### Example

```javascript
import AmbianicServerlessFunctionsApiDefinition from 'ambianic_serverless_functions_api_definition';

let apiInstance = new AmbianicServerlessFunctionsApiDefinition.DefaultApi();
apiInstance.subscriptionDelete((error, data, response) => {
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

