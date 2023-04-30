# demo_client.PetApi

All URIs are relative to *http://localhost:4010*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_pet**](PetApi.md#add_pet) | **POST** /pet | Add a new pet to the store
[**delete_pet**](PetApi.md#delete_pet) | **DELETE** /pet/{petId} | Deletes a pet
[**find_pets_by_status**](PetApi.md#find_pets_by_status) | **GET** /pet/findByStatus | Finds Pets by status
[**find_pets_by_tags**](PetApi.md#find_pets_by_tags) | **GET** /pet/findByTags | Finds Pets by tags
[**get_pet_by_id**](PetApi.md#get_pet_by_id) | **GET** /pet/{petId} | Find pet by ID
[**place_order**](PetApi.md#place_order) | **POST** /store/order | Place an order for a pet
[**update_pet**](PetApi.md#update_pet) | **PUT** /pet | Update an existing pet
[**update_pet_with_form**](PetApi.md#update_pet_with_form) | **POST** /pet/{petId} | Updates a pet in the store with form data
[**upload_file**](PetApi.md#upload_file) | **POST** /pet/{petId}/uploadImage | uploads an image


# **add_pet**
> Pet add_pet(pet)

Add a new pet to the store

### Example

* OAuth Authentication (petstore_auth):

```python
import time
import demo_client
from demo_client.api import pet_api
from demo_client.model.pet import Pet
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

# Configure OAuth2 access token for authorization: petstore_auth
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with demo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pet_api.PetApi(api_client)
    pet = Pet(
        id=1,
        category=Category(
            id=1,
            name="CbUUGjjNSwg0_bs9ZayIMrKdgNvb6gvxmPb9GcsM61ate1RA89q3w1l4eH4XxEz.5awLMdeXylwK0lMGUSM4jsrh4dstlnQUN5vVdMLPA",
        ),
        name="doggie",
        photo_urls=[
            "photo_urls_example",
        ],
        tags=[
            Tag(
                id=1,
                name="name_example",
            ),
        ],
        status="available",
    ) # Pet | Pet object that needs to be added to the store

    # example passing only required values which don't have defaults set
    try:
        # Add a new pet to the store
        api_response = api_instance.add_pet(pet)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->add_pet: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**Pet**](Pet.md)| Pet object that needs to be added to the store |

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_pet**
> delete_pet(pet_id)

Deletes a pet



### Example

* OAuth Authentication (petstore_auth):

```python
import time
import demo_client
from demo_client.api import pet_api
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

# Configure OAuth2 access token for authorization: petstore_auth
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with demo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pet_api.PetApi(api_client)
    pet_id = 1 # int | Pet id to delete
    api_key = "api_key_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Deletes a pet
        api_instance.delete_pet(pet_id)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->delete_pet: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Deletes a pet
        api_instance.delete_pet(pet_id, api_key=api_key)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->delete_pet: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet_id** | **int**| Pet id to delete |
 **api_key** | **str**|  | [optional]

### Return type

void (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Invalid pet value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_pets_by_status**
> [Pet] find_pets_by_status(status)

Finds Pets by status

Multiple status values can be provided with comma separated strings

### Example

* OAuth Authentication (petstore_auth):

```python
import time
import demo_client
from demo_client.api import pet_api
from demo_client.model.pet import Pet
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

# Configure OAuth2 access token for authorization: petstore_auth
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with demo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pet_api.PetApi(api_client)
    status = [
        "available",
    ] # [str] | Status values that need to be considered for filter

    # example passing only required values which don't have defaults set
    try:
        # Finds Pets by status
        api_response = api_instance.find_pets_by_status(status)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->find_pets_by_status: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **[str]**| Status values that need to be considered for filter |

### Return type

[**[Pet]**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid status value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_pets_by_tags**
> [Pet] find_pets_by_tags(tags)

Finds Pets by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example

* OAuth Authentication (petstore_auth):

```python
import time
import demo_client
from demo_client.api import pet_api
from demo_client.model.pet import Pet
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

# Configure OAuth2 access token for authorization: petstore_auth
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with demo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pet_api.PetApi(api_client)
    tags = [
        "tags_example",
    ] # [str] | Tags to filter by

    # example passing only required values which don't have defaults set
    try:
        # Finds Pets by tags
        api_response = api_instance.find_pets_by_tags(tags)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->find_pets_by_tags: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | **[str]**| Tags to filter by |

### Return type

[**[Pet]**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid tag value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pet_by_id**
> Pet get_pet_by_id(pet_id)

Find pet by ID

Returns a single pet

### Example

* Api Key Authentication (api_key):

```python
import time
import demo_client
from demo_client.api import pet_api
from demo_client.model.pet import Pet
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
    api_instance = pet_api.PetApi(api_client)
    pet_id = 1 # int | ID of pet to return

    # example passing only required values which don't have defaults set
    try:
        # Find pet by ID
        api_response = api_instance.get_pet_by_id(pet_id)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->get_pet_by_id: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet_id** | **int**| ID of pet to return |

### Return type

[**Pet**](Pet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Pet not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **place_order**
> Order place_order(order)

Place an order for a pet



### Example


```python
import time
import demo_client
from demo_client.api import pet_api
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
    api_instance = pet_api.PetApi(api_client)
    order = Order(
        id=1,
        pet_id=1,
        quantity=10,
        ship_date=dateutil_parser('1970-01-01T00:00:00.00Z'),
        status="placed",
        complete=False,
    ) # Order | order placed for purchasing the pet

    # example passing only required values which don't have defaults set
    try:
        # Place an order for a pet
        api_response = api_instance.place_order(order)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->place_order: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)| order placed for purchasing the pet |

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid Order |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_pet**
> Pet update_pet(pet)

Update an existing pet



### Example

* OAuth Authentication (petstore_auth):

```python
import time
import demo_client
from demo_client.api import pet_api
from demo_client.model.pet import Pet
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

# Configure OAuth2 access token for authorization: petstore_auth
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with demo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pet_api.PetApi(api_client)
    pet = Pet(
        id=1,
        category=Category(
            id=1,
            name="CbUUGjjNSwg0_bs9ZayIMrKdgNvb6gvxmPb9GcsM61ate1RA89q3w1l4eH4XxEz.5awLMdeXylwK0lMGUSM4jsrh4dstlnQUN5vVdMLPA",
        ),
        name="doggie",
        photo_urls=[
            "photo_urls_example",
        ],
        tags=[
            Tag(
                id=1,
                name="name_example",
            ),
        ],
        status="available",
    ) # Pet | Pet object that needs to be added to the store

    # example passing only required values which don't have defaults set
    try:
        # Update an existing pet
        api_response = api_instance.update_pet(pet)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->update_pet: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**Pet**](Pet.md)| Pet object that needs to be added to the store |

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Pet not found |  -  |
**405** | Validation exception |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_pet_with_form**
> update_pet_with_form(pet_id)

Updates a pet in the store with form data



### Example

* OAuth Authentication (petstore_auth):

```python
import time
import demo_client
from demo_client.api import pet_api
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

# Configure OAuth2 access token for authorization: petstore_auth
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with demo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pet_api.PetApi(api_client)
    pet_id = 1 # int | ID of pet that needs to be updated
    name = "name_example" # str | Updated name of the pet (optional)
    status = "status_example" # str | Updated status of the pet (optional)

    # example passing only required values which don't have defaults set
    try:
        # Updates a pet in the store with form data
        api_instance.update_pet_with_form(pet_id)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->update_pet_with_form: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Updates a pet in the store with form data
        api_instance.update_pet_with_form(pet_id, name=name, status=status)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->update_pet_with_form: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet_id** | **int**| ID of pet that needs to be updated |
 **name** | **str**| Updated name of the pet | [optional]
 **status** | **str**| Updated status of the pet | [optional]

### Return type

void (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_file**
> ApiResponse upload_file(pet_id)

uploads an image



### Example

* OAuth Authentication (petstore_auth):

```python
import time
import demo_client
from demo_client.api import pet_api
from demo_client.model.api_response import ApiResponse
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

# Configure OAuth2 access token for authorization: petstore_auth
configuration = demo_client.Configuration(
    host = "http://localhost:4010"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with demo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pet_api.PetApi(api_client)
    pet_id = 1 # int | ID of pet to update
    additional_metadata = "additional_metadata_example" # str | Additional data to pass to server (optional)
    file = open('/path/to/file', 'rb') # file_type | file to upload (optional)

    # example passing only required values which don't have defaults set
    try:
        # uploads an image
        api_response = api_instance.upload_file(pet_id)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->upload_file: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # uploads an image
        api_response = api_instance.upload_file(pet_id, additional_metadata=additional_metadata, file=file)
        pprint(api_response)
    except demo_client.ApiException as e:
        print("Exception when calling PetApi->upload_file: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet_id** | **int**| ID of pet to update |
 **additional_metadata** | **str**| Additional data to pass to server | [optional]
 **file** | **file_type**| file to upload | [optional]

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

