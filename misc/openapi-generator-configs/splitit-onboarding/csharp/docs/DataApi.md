# Splitit.Net.Api.DataApi

All URIs are relative to *https://onboarding-v2.sandbox.splitit.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetCountries**](DataApi.md#getcountries) | **GET** /api/data/get-countries |  |
| [**GetCurrencies**](DataApi.md#getcurrencies) | **GET** /api/data/get-currencies |  |
| [**GetProcessors**](DataApi.md#getprocessors) | **GET** /api/data/get-processors |  |
| [**GetVerticals**](DataApi.md#getverticals) | **GET** /api/data/get-verticals |  |
| [**StatusLegend**](DataApi.md#statuslegend) | **GET** /api/data/status-legend |  |

<a name="getcountries"></a>
# **GetCountries**
> CountriesResponse GetCountries ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class GetCountriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://onboarding-v2.sandbox.splitit.com";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new DataApi(config);

            try
            {
                CountriesResponse result = apiInstance.GetCountries();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DataApi.GetCountries: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCountriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CountriesResponse> response = apiInstance.GetCountriesWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DataApi.GetCountriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**CountriesResponse**](CountriesResponse.md)

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

<a name="getcurrencies"></a>
# **GetCurrencies**
> CurrenciesResponse GetCurrencies ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class GetCurrenciesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://onboarding-v2.sandbox.splitit.com";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new DataApi(config);

            try
            {
                CurrenciesResponse result = apiInstance.GetCurrencies();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DataApi.GetCurrencies: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCurrenciesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CurrenciesResponse> response = apiInstance.GetCurrenciesWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DataApi.GetCurrenciesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**CurrenciesResponse**](CurrenciesResponse.md)

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

<a name="getprocessors"></a>
# **GetProcessors**
> ProcessorsResponse GetProcessors ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class GetProcessorsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://onboarding-v2.sandbox.splitit.com";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new DataApi(config);

            try
            {
                ProcessorsResponse result = apiInstance.GetProcessors();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DataApi.GetProcessors: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetProcessorsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ProcessorsResponse> response = apiInstance.GetProcessorsWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DataApi.GetProcessorsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ProcessorsResponse**](ProcessorsResponse.md)

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

<a name="getverticals"></a>
# **GetVerticals**
> MerchantVerticalsResponse GetVerticals ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class GetVerticalsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://onboarding-v2.sandbox.splitit.com";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new DataApi(config);

            try
            {
                MerchantVerticalsResponse result = apiInstance.GetVerticals();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DataApi.GetVerticals: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetVerticalsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<MerchantVerticalsResponse> response = apiInstance.GetVerticalsWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DataApi.GetVerticalsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**MerchantVerticalsResponse**](MerchantVerticalsResponse.md)

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

<a name="statuslegend"></a>
# **StatusLegend**
> List&lt;EnumDTO&gt; StatusLegend ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Splitit.Net.Api;
using Splitit.Net.Client;
using Splitit.Net.Model;

namespace Example
{
    public class StatusLegendExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://onboarding-v2.sandbox.splitit.com";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new DataApi(config);

            try
            {
                List<EnumDTO> result = apiInstance.StatusLegend();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DataApi.StatusLegend: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the StatusLegendWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<List<EnumDTO>> response = apiInstance.StatusLegendWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DataApi.StatusLegendWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;EnumDTO&gt;**](EnumDTO.md)

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

