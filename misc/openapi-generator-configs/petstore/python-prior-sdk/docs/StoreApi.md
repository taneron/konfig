# demo_client.StoreApi

All URIs are relative to *http://localhost:4010*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_order**](StoreApi.md#delete_order) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
[**get_inventory**](StoreApi.md#get_inventory) | **GET** /store/inventory | Returns pet inventories by status
[**get_order_by_id**](StoreApi.md#get_order_by_id) | **GET** /store/order/{orderId} | Find purchase order by ID


# **delete_order**
> delete_order(order_id)

Delete purchase order by ID

For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Example


```python
import time
import demo_client
from demo_client.api import store_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost:4010
# See configuration.py for a list of all supported configuration parameters.
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)


# Enter a context with an instance of the API client
with demo_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = store_api.StoreApi(api_client)
    order_id = "orderId_example" # str | ID of the order that needs to be deleted

    # example passing only required values which don't have defaults set
    try:
        # Delete purchase order by ID
        api_instance.delete_order(order_id)
    except demo_client.ApiException as e:
        print("Exception when calling StoreApi->delete_order: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| ID of the order that needs to be deleted |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Invalid ID supplied |  -  |
**404** | Order not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_inventory**
> {str: (int,)} get_inventory()

Returns pet inventories by status

Returns a map of status codes to quantities

### Example

* Api Key Authentication (api_key):

```python
import time
import demo_client
from demo_client.api import store_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost:4010
# See configuration.py for a list of all supported configuration parameters.
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with demo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = store_api.StoreApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Returns pet inventories by status
        api_response = api_instance.get_inventory()
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling StoreApi->get_inventory: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

**{str: (int,)}**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_order_by_id**
> Order get_order_by_id(order_id)

Find purchase order by ID

For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions

### Example


```python
import time
import demo_client
from demo_client.api import store_api
from demo_client.model.order import Order
from pprint import pprint
# Defining the host is optional and defaults to http://localhost:4010
# See configuration.py for a list of all supported configuration parameters.
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)


# Enter a context with an instance of the API client
with demo_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = store_api.StoreApi(api_client)
    order_id = 1 # int | ID of pet that needs to be fetched

    # example passing only required values which don't have defaults set
    try:
        # Find purchase order by ID
        api_response = api_instance.get_order_by_id(order_id)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling StoreApi->get_order_by_id: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **int**| ID of pet that needs to be fetched |

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Order not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

