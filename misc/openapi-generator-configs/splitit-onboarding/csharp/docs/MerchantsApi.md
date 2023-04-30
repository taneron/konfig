# Splitit.Net.Api.MerchantsApi

All URIs are relative to *https://onboarding-v2.sandbox.splitit.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateMerchant**](MerchantsApi.md#createmerchant) | **POST** /api/merchants/create |  |
| [**GetMerchantDetails**](MerchantsApi.md#getmerchantdetails) | **GET** /api/merchants/get-details |  |
| [**GetMerchants**](MerchantsApi.md#getmerchants) | **GET** /api/merchants/get |  |

<a name="createmerchant"></a>
# **CreateMerchant**
> CreateMerchantResponse CreateMerchant (CreateMerchantRequest createMerchantRequest)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class CreateMerchantExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://onboarding-v2.sandbox.splitit.com";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new MerchantsApi(config);
            var createMerchantRequest = new CreateMerchantRequest(); // CreateMerchantRequest | 

            try
            {
                CreateMerchantResponse result = apiInstance.CreateMerchant(createMerchantRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MerchantsApi.CreateMerchant: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateMerchantWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateMerchantResponse> response = apiInstance.CreateMerchantWithHttpInfo(createMerchantRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MerchantsApi.CreateMerchantWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createMerchantRequest** | [**CreateMerchantRequest**](CreateMerchantRequest.md) |  |  |

### Return type

[**CreateMerchantResponse**](CreateMerchantResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmerchantdetails"></a>
# **GetMerchantDetails**
> GetMerchantDetailsResponse GetMerchantDetails (string merchantTempId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class GetMerchantDetailsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://onboarding-v2.sandbox.splitit.com";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new MerchantsApi(config);
            var merchantTempId = "merchantTempId_example";  // string | 

            try
            {
                GetMerchantDetailsResponse result = apiInstance.GetMerchantDetails(merchantTempId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MerchantsApi.GetMerchantDetails: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetMerchantDetailsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<GetMerchantDetailsResponse> response = apiInstance.GetMerchantDetailsWithHttpInfo(merchantTempId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MerchantsApi.GetMerchantDetailsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **merchantTempId** | **string** |  |  |

### Return type

[**GetMerchantDetailsResponse**](GetMerchantDetailsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmerchants"></a>
# **GetMerchants**
> GetMerchantsResponse GetMerchants (int numberOfRowsInPage, int pageNumber, string name = null, string legalName = null, int? status = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class GetMerchantsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://onboarding-v2.sandbox.splitit.com";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new MerchantsApi(config);
            var numberOfRowsInPage = 56;  // int | 
            var pageNumber = 56;  // int | 
            var name = "name_example";  // string |  (optional) 
            var legalName = "legalName_example";  // string |  (optional) 
            var status = 56;  // int? |  (optional) 

            try
            {
                GetMerchantsResponse result = apiInstance.GetMerchants(numberOfRowsInPage, pageNumber, name, legalName, status);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MerchantsApi.GetMerchants: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetMerchantsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<GetMerchantsResponse> response = apiInstance.GetMerchantsWithHttpInfo(numberOfRowsInPage, pageNumber, name, legalName, status);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MerchantsApi.GetMerchantsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **numberOfRowsInPage** | **int** |  |  |
| **pageNumber** | **int** |  |  |
| **name** | **string** |  | [optional]  |
| **legalName** | **string** |  | [optional]  |
| **status** | **int?** |  | [optional]  |

### Return type

[**GetMerchantsResponse**](GetMerchantsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

