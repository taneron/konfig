# Splitit.Net.Api.InstallmentPlanApi

All URIs are relative to *https://web-api-v3.sandbox.splitit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**InstallmentPlanCancel**](InstallmentPlanApi.md#installmentplancancel) | **POST** /api/installmentplans/{installmentPlanNumber}/cancel | 
[**InstallmentPlanGet**](InstallmentPlanApi.md#installmentplanget) | **GET** /api/installmentplans/{installmentPlanNumber} | 
[**InstallmentPlanPost**](InstallmentPlanApi.md#installmentplanpost) | **POST** /api/installmentplans | 
[**InstallmentPlanRefund**](InstallmentPlanApi.md#installmentplanrefund) | **POST** /api/installmentplans/{installmentPlanNumber}/refund | 
[**InstallmentPlanSearch**](InstallmentPlanApi.md#installmentplansearch) | **GET** /api/installmentplans/search | 
[**InstallmentPlanUpdateOrder**](InstallmentPlanApi.md#installmentplanupdateorder) | **PUT** /api/installmentplans/{installmentPlanNumber}/updateorder | 
[**InstallmentPlanUpdateOrder2**](InstallmentPlanApi.md#installmentplanupdateorder2) | **PUT** /api/installmentplans/updateorder | 
[**InstallmentPlanVerifyAuthorization**](InstallmentPlanApi.md#installmentplanverifyauthorization) | **GET** /api/installmentplans/{installmentPlanNumber}/verifyauthorization | 



## InstallmentPlanCancel

> InstallmentPlanCancelResponse InstallmentPlanCancel (string installmentPlanNumber, string xSplititIdempotencyKey)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class InstallmentPlanCancelExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://web-api-v3.sandbox.splitit.com";
            var apiInstance = new InstallmentPlanApi(Configuration.Default);
            var installmentPlanNumber = "installmentPlanNumber_example";  // string | 
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";  // string | 

            try
            {
                InstallmentPlanCancelResponse result = apiInstance.InstallmentPlanCancel(installmentPlanNumber, xSplititIdempotencyKey);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstallmentPlanApi.InstallmentPlanCancel: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installmentPlanNumber** | **string**|  | 
 **xSplititIdempotencyKey** | **string**|  | 

### Return type

[**InstallmentPlanCancelResponse**](InstallmentPlanCancelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InstallmentPlanGet

> InstallmentPlanModel InstallmentPlanGet (string installmentPlanNumber, string xSplititIdempotencyKey)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class InstallmentPlanGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://web-api-v3.sandbox.splitit.com";
            var apiInstance = new InstallmentPlanApi(Configuration.Default);
            var installmentPlanNumber = "installmentPlanNumber_example";  // string | 
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";  // string | 

            try
            {
                InstallmentPlanModel result = apiInstance.InstallmentPlanGet(installmentPlanNumber, xSplititIdempotencyKey);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstallmentPlanApi.InstallmentPlanGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installmentPlanNumber** | **string**|  | 
 **xSplititIdempotencyKey** | **string**|  | 

### Return type

[**InstallmentPlanModel**](InstallmentPlanModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InstallmentPlanPost

> InstallmentPlanModel InstallmentPlanPost (string xSplititIdempotencyKey, InstallmentPlanCreateRequest installmentPlanCreateRequest, string xSplititTestMode = null)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class InstallmentPlanPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://web-api-v3.sandbox.splitit.com";
            var apiInstance = new InstallmentPlanApi(Configuration.Default);
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";  // string | 
            var installmentPlanCreateRequest = new InstallmentPlanCreateRequest(); // InstallmentPlanCreateRequest | 
            var xSplititTestMode = "None";  // string |  (optional) 

            try
            {
                InstallmentPlanModel result = apiInstance.InstallmentPlanPost(xSplititIdempotencyKey, installmentPlanCreateRequest, xSplititTestMode);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstallmentPlanApi.InstallmentPlanPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSplititIdempotencyKey** | **string**|  | 
 **installmentPlanCreateRequest** | [**InstallmentPlanCreateRequest**](InstallmentPlanCreateRequest.md)|  | 
 **xSplititTestMode** | **string**|  | [optional] 

### Return type

[**InstallmentPlanModel**](InstallmentPlanModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InstallmentPlanRefund

> InstallmentPlanRefundResponse InstallmentPlanRefund (string installmentPlanNumber, string xSplititIdempotencyKey, InstallmentPlanRefundRequest installmentPlanRefundRequest)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class InstallmentPlanRefundExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://web-api-v3.sandbox.splitit.com";
            var apiInstance = new InstallmentPlanApi(Configuration.Default);
            var installmentPlanNumber = "installmentPlanNumber_example";  // string | 
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";  // string | 
            var installmentPlanRefundRequest = new InstallmentPlanRefundRequest(); // InstallmentPlanRefundRequest | 

            try
            {
                InstallmentPlanRefundResponse result = apiInstance.InstallmentPlanRefund(installmentPlanNumber, xSplititIdempotencyKey, installmentPlanRefundRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstallmentPlanApi.InstallmentPlanRefund: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installmentPlanNumber** | **string**|  | 
 **xSplititIdempotencyKey** | **string**|  | 
 **installmentPlanRefundRequest** | [**InstallmentPlanRefundRequest**](InstallmentPlanRefundRequest.md)|  | 

### Return type

[**InstallmentPlanRefundResponse**](InstallmentPlanRefundResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InstallmentPlanSearch

> InstallmentPlanGetResponse InstallmentPlanSearch (string xSplititIdempotencyKey, string installmentPlanNumber = null, string refOrderNumber = null, Dictionary<string, string> extendedParams = null)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class InstallmentPlanSearchExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://web-api-v3.sandbox.splitit.com";
            var apiInstance = new InstallmentPlanApi(Configuration.Default);
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";  // string | 
            var installmentPlanNumber = "installmentPlanNumber_example";  // string |  (optional) 
            var refOrderNumber = "refOrderNumber_example";  // string |  (optional) 
            var extendedParams = new Dictionary<string, string>(); // Dictionary<string, string> |  (optional) 

            try
            {
                InstallmentPlanGetResponse result = apiInstance.InstallmentPlanSearch(xSplititIdempotencyKey, installmentPlanNumber, refOrderNumber, extendedParams);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstallmentPlanApi.InstallmentPlanSearch: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSplititIdempotencyKey** | **string**|  | 
 **installmentPlanNumber** | **string**|  | [optional] 
 **refOrderNumber** | **string**|  | [optional] 
 **extendedParams** | [**Dictionary&lt;string, string&gt;**](string.md)|  | [optional] 

### Return type

[**InstallmentPlanGetResponse**](InstallmentPlanGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InstallmentPlanUpdateOrder

> InstallmentPlanUpdateResponse InstallmentPlanUpdateOrder (string installmentPlanNumber, string xSplititIdempotencyKey, UpdateOrderRequest updateOrderRequest)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class InstallmentPlanUpdateOrderExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://web-api-v3.sandbox.splitit.com";
            var apiInstance = new InstallmentPlanApi(Configuration.Default);
            var installmentPlanNumber = "installmentPlanNumber_example";  // string | 
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";  // string | 
            var updateOrderRequest = new UpdateOrderRequest(); // UpdateOrderRequest | 

            try
            {
                InstallmentPlanUpdateResponse result = apiInstance.InstallmentPlanUpdateOrder(installmentPlanNumber, xSplititIdempotencyKey, updateOrderRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstallmentPlanApi.InstallmentPlanUpdateOrder: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installmentPlanNumber** | **string**|  | 
 **xSplititIdempotencyKey** | **string**|  | 
 **updateOrderRequest** | [**UpdateOrderRequest**](UpdateOrderRequest.md)|  | 

### Return type

[**InstallmentPlanUpdateResponse**](InstallmentPlanUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InstallmentPlanUpdateOrder2

> InstallmentPlanUpdateResponse InstallmentPlanUpdateOrder2 (string xSplititIdempotencyKey, InstallmentPlanUpdateRequestByIdentifier installmentPlanUpdateRequestByIdentifier)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class InstallmentPlanUpdateOrder2Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://web-api-v3.sandbox.splitit.com";
            var apiInstance = new InstallmentPlanApi(Configuration.Default);
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";  // string | 
            var installmentPlanUpdateRequestByIdentifier = new InstallmentPlanUpdateRequestByIdentifier(); // InstallmentPlanUpdateRequestByIdentifier | 

            try
            {
                InstallmentPlanUpdateResponse result = apiInstance.InstallmentPlanUpdateOrder2(xSplititIdempotencyKey, installmentPlanUpdateRequestByIdentifier);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstallmentPlanApi.InstallmentPlanUpdateOrder2: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSplititIdempotencyKey** | **string**|  | 
 **installmentPlanUpdateRequestByIdentifier** | [**InstallmentPlanUpdateRequestByIdentifier**](InstallmentPlanUpdateRequestByIdentifier.md)|  | 

### Return type

[**InstallmentPlanUpdateResponse**](InstallmentPlanUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InstallmentPlanVerifyAuthorization

> VerifyAuthorizationResponse InstallmentPlanVerifyAuthorization (string installmentPlanNumber, string xSplititIdempotencyKey)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class InstallmentPlanVerifyAuthorizationExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://web-api-v3.sandbox.splitit.com";
            var apiInstance = new InstallmentPlanApi(Configuration.Default);
            var installmentPlanNumber = "installmentPlanNumber_example";  // string | 
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";  // string | 

            try
            {
                VerifyAuthorizationResponse result = apiInstance.InstallmentPlanVerifyAuthorization(installmentPlanNumber, xSplititIdempotencyKey);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstallmentPlanApi.InstallmentPlanVerifyAuthorization: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installmentPlanNumber** | **string**|  | 
 **xSplititIdempotencyKey** | **string**|  | 

### Return type

[**VerifyAuthorizationResponse**](VerifyAuthorizationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

