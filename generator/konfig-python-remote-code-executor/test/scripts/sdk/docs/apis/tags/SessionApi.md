<a name="__pageTop"></a>
# python_rce.apis.tags.session_api.SessionApi

All URIs are relative to *http://127.0.0.1:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**close**](#close) | **post** /sessions/close | Close Session
[**create**](#create) | **post** /sessions/create | Create Session
[**execute**](#execute) | **post** /sessions/execute | Execute Code
[**list**](#list) | **get** /sessions/list | List Sessions

# **close**

Close Session

### Example

```python
from pprint import pprint
from python_rce import PythonRce, ApiException

pythonrce = PythonRce(
    # Defining the host is optional and defaults to http://127.0.0.1:8000
    # See configuration.py for a list of all supported configuration parameters.
    host="http://127.0.0.1:8000",
)

try:
    # Close Session
    close_response = pythonrce.session.close(
        session_id="string_example",  # required
    )
    pprint(close_response.body)
    pprint(close_response.body["message"])
    pprint(close_response.headers)
    pprint(close_response.status)
    pprint(close_response.round_trip_time)
except ApiException as e:
    print("Exception when calling SessionApi.close: %s\n" % e)
    pprint(e.body)
    if e.status == 422:
        pprint(e.body["detail"])
    if e.status == 404:
        pprint(e.body["session_id"])
        pprint(e.body["error"])
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationJson] | required |
content_type | str | optional, default is 'application/json' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SessionCloseRequest**](../../models/SessionCloseRequest.md) |  | 


### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#close.ApiResponseFor200) | Successful Response
404 | [ApiResponseFor404](#close.ApiResponseFor404) | Not Found
422 | [ApiResponseFor422](#close.ApiResponseFor422) | Validation Error

#### close.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SessionCloseResponse**](../../models/SessionCloseResponse.md) |  | 


#### close.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SessionNotFoundError**](../../models/SessionNotFoundError.md) |  | 


#### close.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**HTTPValidationError**](../../models/HTTPValidationError.md) |  | 


### Authorization

No authorization required

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **create**

Create Session

### Example

```python
from pprint import pprint
from python_rce import PythonRce, ApiException

pythonrce = PythonRce(
    # Defining the host is optional and defaults to http://127.0.0.1:8000
    # See configuration.py for a list of all supported configuration parameters.
    host="http://127.0.0.1:8000",
)

try:
    # Create Session
    create_response = pythonrce.session.create()
    pprint(create_response.body)
    pprint(create_response.body["session_id"])
    pprint(create_response.headers)
    pprint(create_response.status)
    pprint(create_response.round_trip_time)
except ApiException as e:
    print("Exception when calling SessionApi.create: %s\n" % e)
    pprint(e.body)
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```
### Parameters
This endpoint does not need any parameter.

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#create.ApiResponseFor200) | Successful Response

#### create.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SessionCreateResponse**](../../models/SessionCreateResponse.md) |  | 


### Authorization

No authorization required

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **execute**

Execute Code

### Example

```python
from pprint import pprint
from python_rce import PythonRce, ApiException

pythonrce = PythonRce(
    # Defining the host is optional and defaults to http://127.0.0.1:8000
    # See configuration.py for a list of all supported configuration parameters.
    host="http://127.0.0.1:8000",
)

try:
    # Execute Code
    execute_response = pythonrce.session.execute(
        session_id="string_example",  # required
        code="string_example",  # required
    )
    pprint(execute_response.body)
    pprint(execute_response.body["result"])
    pprint(execute_response.body["output"])
    pprint(execute_response.body["error"])
    pprint(execute_response.headers)
    pprint(execute_response.status)
    pprint(execute_response.round_trip_time)
except ApiException as e:
    print("Exception when calling SessionApi.execute: %s\n" % e)
    pprint(e.body)
    if e.status == 422:
        pprint(e.body["detail"])
    if e.status == 404:
        pprint(e.body["session_id"])
        pprint(e.body["error"])
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationJson] | required |
content_type | str | optional, default is 'application/json' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SessionExecuteRequest**](../../models/SessionExecuteRequest.md) |  | 


### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#execute.ApiResponseFor200) | Successful Response
404 | [ApiResponseFor404](#execute.ApiResponseFor404) | Not Found
422 | [ApiResponseFor422](#execute.ApiResponseFor422) | Validation Error

#### execute.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ExecutionResult**](../../models/ExecutionResult.md) |  | 


#### execute.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SessionNotFoundError**](../../models/SessionNotFoundError.md) |  | 


#### execute.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**HTTPValidationError**](../../models/HTTPValidationError.md) |  | 


### Authorization

No authorization required

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **list**

List Sessions

### Example

```python
from pprint import pprint
from python_rce import PythonRce, ApiException

pythonrce = PythonRce(
    # Defining the host is optional and defaults to http://127.0.0.1:8000
    # See configuration.py for a list of all supported configuration parameters.
    host="http://127.0.0.1:8000",
)

try:
    # List Sessions
    list_response = pythonrce.session.list()
    pprint(list_response.body)
    pprint(list_response.body["sessions"])
    pprint(list_response.headers)
    pprint(list_response.status)
    pprint(list_response.round_trip_time)
except ApiException as e:
    print("Exception when calling SessionApi.list: %s\n" % e)
    pprint(e.body)
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```
### Parameters
This endpoint does not need any parameter.

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#list.ApiResponseFor200) | Successful Response

#### list.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SessionListResponse**](../../models/SessionListResponse.md) |  | 


### Authorization

No authorization required

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

