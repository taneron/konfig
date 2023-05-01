# SdkApi

All URIs are relative to *https://api.konfigthis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**formatPython**](SdkApi.md#formatPython) | **POST** /formatPython | Format Python Code
[**generate**](SdkApi.md#generate) | **POST** /generate | Generate SDKs


# **formatPython**

#### **POST** /formatPython

### Description
Python formatter using the black package

### Example


```typescript
import { Konfig } from "konfig-typescript-sdk";

const konfig = new Konfig({
  // Defining the base path is optional and defaults to https://api.konfigthis.com
  // basePath: "https://api.konfigthis.com",
});

const formatPythonResponse = await konfig.sdk.formatPython("example_string");

console.log(formatPythonResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |


### Return type

**string**

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **generate**

#### **POST** /generate

### Description
Generate SDKs and receive signed S3 download URLs for the generated packages

### Example


```typescript
import { Konfig } from "konfig-typescript-sdk";

const konfig = new Konfig({
  // Defining the base path is optional and defaults to https://api.konfigthis.com
  // basePath: "https://api.konfigthis.com",
  authorization: "API_KEY",
  session: "API_KEY",
});

const generateResponse = await konfig.sdk.generate({
  spec: "spec_example",
  konfig_yaml: "konfig_yaml_example",
  generators: {},
  take_first_tag: true,
  remove_default_array_values: true,
  convert_array_data_types_to_any: false,
});

console.log(generateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateRequestBody** | **GenerateRequestBody**|  |


### Return type

**GenerateResponseBody**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated SDKs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


