# KStoreApi

All URIs are relative to *http://localhost:4010*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrder**](KStoreApi.md#deleteorder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
[**getInventory**](KStoreApi.md#getinventory) | **GET** /store/inventory | Returns pet inventories by status
[**getOrderById**](KStoreApi.md#getorderbyid) | **GET** /store/order/{orderId} | Find purchase order by ID


# **deleteOrder**
```objc
-(NSURLSessionTask*) deleteOrderWithOrderId: (NSString*) orderId
        completionHandler: (void (^)(NSError* error)) handler;
```

Delete purchase order by ID

For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Example
```objc

NSString* orderId = @"orderId_example"; // ID of the order that needs to be deleted

KStoreApi*apiInstance = [[KStoreApi alloc] init];

// Delete purchase order by ID
[apiInstance deleteOrderWithOrderId:orderId
          completionHandler: ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KStoreApi->deleteOrder: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **NSString***| ID of the order that needs to be deleted | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInventory**
```objc
-(NSURLSessionTask*) getInventoryWithCompletionHandler: 
        (void (^)(NSDictionary<NSString*, NSNumber*>* output, NSError* error)) handler;
```

Returns pet inventories by status

Returns a map of status codes to quantities

### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: api_key)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"api_key"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"api_key"];



KStoreApi*apiInstance = [[KStoreApi alloc] init];

// Returns pet inventories by status
[apiInstance getInventoryWithCompletionHandler: 
          ^(NSDictionary<NSString*, NSNumber*>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KStoreApi->getInventory: %@", error);
                        }
                    }];
```

### Parameters
This endpoint does not need any parameter.

### Return type

**NSDictionary<NSString*, NSNumber*>***

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderById**
```objc
-(NSURLSessionTask*) getOrderByIdWithOrderId: (NSNumber*) orderId
        completionHandler: (void (^)(KOrder* output, NSError* error)) handler;
```

Find purchase order by ID

For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions

### Example
```objc

NSNumber* orderId = @56; // ID of pet that needs to be fetched

KStoreApi*apiInstance = [[KStoreApi alloc] init];

// Find purchase order by ID
[apiInstance getOrderByIdWithOrderId:orderId
          completionHandler: ^(KOrder* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KStoreApi->getOrderById: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **NSNumber***| ID of pet that needs to be fetched | 

### Return type

[**KOrder***](KOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

