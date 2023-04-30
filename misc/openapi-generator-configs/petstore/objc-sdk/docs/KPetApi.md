# KPetApi

All URIs are relative to *http://localhost:4010*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](KPetApi.md#addpet) | **POST** /pet | Add a new pet to the store
[**deletePet**](KPetApi.md#deletepet) | **DELETE** /pet/{petId} | Deletes a pet
[**findPetsByStatus**](KPetApi.md#findpetsbystatus) | **GET** /pet/findByStatus | Finds Pets by status
[**findPetsByTags**](KPetApi.md#findpetsbytags) | **GET** /pet/findByTags | Finds Pets by tags
[**getPetById**](KPetApi.md#getpetbyid) | **GET** /pet/{petId} | Find pet by ID
[**placeOrder**](KPetApi.md#placeorder) | **POST** /store/order | Place an order for a pet
[**updatePet**](KPetApi.md#updatepet) | **PUT** /pet | Update an existing pet
[**updatePetWithForm**](KPetApi.md#updatepetwithform) | **POST** /pet/{petId} | Updates a pet in the store with form data
[**uploadFile**](KPetApi.md#uploadfile) | **POST** /pet/{petId}/uploadImage | uploads an image


# **addPet**
```objc
-(NSURLSessionTask*) addPetWithPet: (KPet*) pet
        completionHandler: (void (^)(KPet* output, NSError* error)) handler;
```

Add a new pet to the store

### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: petstore_auth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];


KPet* pet = [[KPet alloc] init]; // Pet object that needs to be added to the store

KPetApi*apiInstance = [[KPetApi alloc] init];

// Add a new pet to the store
[apiInstance addPetWithPet:pet
          completionHandler: ^(KPet* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KPetApi->addPet: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**KPet***](KPet.md)| Pet object that needs to be added to the store | 

### Return type

[**KPet***](KPet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePet**
```objc
-(NSURLSessionTask*) deletePetWithPetId: (NSNumber*) petId
    apiKey: (NSString*) apiKey
        completionHandler: (void (^)(NSError* error)) handler;
```

Deletes a pet



### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: petstore_auth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];


NSNumber* petId = @56; // Pet id to delete
NSString* apiKey = @"apiKey_example"; //  (optional)

KPetApi*apiInstance = [[KPetApi alloc] init];

// Deletes a pet
[apiInstance deletePetWithPetId:petId
              apiKey:apiKey
          completionHandler: ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KPetApi->deletePet: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **NSNumber***| Pet id to delete | 
 **apiKey** | **NSString***|  | [optional] 

### Return type

void (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findPetsByStatus**
```objc
-(NSURLSessionTask*) findPetsByStatusWithStatus: (NSArray<NSString*>*) status
        completionHandler: (void (^)(NSArray<KPet>* output, NSError* error)) handler;
```

Finds Pets by status

Multiple status values can be provided with comma separated strings

### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: petstore_auth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];


NSArray<NSString*>* status = @[@"status_example"]; // Status values that need to be considered for filter

KPetApi*apiInstance = [[KPetApi alloc] init];

// Finds Pets by status
[apiInstance findPetsByStatusWithStatus:status
          completionHandler: ^(NSArray<KPet>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KPetApi->findPetsByStatus: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**NSArray&lt;NSString*&gt;***](NSString*.md)| Status values that need to be considered for filter | 

### Return type

[**NSArray<KPet>***](KPet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findPetsByTags**
```objc
-(NSURLSessionTask*) findPetsByTagsWithTags: (NSArray<NSString*>*) tags
        completionHandler: (void (^)(NSArray<KPet>* output, NSError* error)) handler;
```

Finds Pets by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: petstore_auth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];


NSArray<NSString*>* tags = @[@"tags_example"]; // Tags to filter by

KPetApi*apiInstance = [[KPetApi alloc] init];

// Finds Pets by tags
[apiInstance findPetsByTagsWithTags:tags
          completionHandler: ^(NSArray<KPet>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KPetApi->findPetsByTags: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | [**NSArray&lt;NSString*&gt;***](NSString*.md)| Tags to filter by | 

### Return type

[**NSArray<KPet>***](KPet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPetById**
```objc
-(NSURLSessionTask*) getPetByIdWithPetId: (NSNumber*) petId
        completionHandler: (void (^)(KPet* output, NSError* error)) handler;
```

Find pet by ID

Returns a single pet

### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: api_key)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"api_key"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"api_key"];


NSNumber* petId = @56; // ID of pet to return

KPetApi*apiInstance = [[KPetApi alloc] init];

// Find pet by ID
[apiInstance getPetByIdWithPetId:petId
          completionHandler: ^(KPet* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KPetApi->getPetById: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **NSNumber***| ID of pet to return | 

### Return type

[**KPet***](KPet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **placeOrder**
```objc
-(NSURLSessionTask*) placeOrderWithOrder: (KOrder*) order
        completionHandler: (void (^)(KOrder* output, NSError* error)) handler;
```

Place an order for a pet



### Example
```objc

KOrder* order = [[KOrder alloc] init]; // order placed for purchasing the pet

KPetApi*apiInstance = [[KPetApi alloc] init];

// Place an order for a pet
[apiInstance placeOrderWithOrder:order
          completionHandler: ^(KOrder* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KPetApi->placeOrder: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**KOrder***](KOrder.md)| order placed for purchasing the pet | 

### Return type

[**KOrder***](KOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePet**
```objc
-(NSURLSessionTask*) updatePetWithPet: (KPet*) pet
        completionHandler: (void (^)(KPet* output, NSError* error)) handler;
```

Update an existing pet



### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: petstore_auth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];


KPet* pet = [[KPet alloc] init]; // Pet object that needs to be added to the store

KPetApi*apiInstance = [[KPetApi alloc] init];

// Update an existing pet
[apiInstance updatePetWithPet:pet
          completionHandler: ^(KPet* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KPetApi->updatePet: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**KPet***](KPet.md)| Pet object that needs to be added to the store | 

### Return type

[**KPet***](KPet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePetWithForm**
```objc
-(NSURLSessionTask*) updatePetWithFormWithPetId: (NSNumber*) petId
    name: (NSString*) name
    status: (NSString*) status
        completionHandler: (void (^)(NSError* error)) handler;
```

Updates a pet in the store with form data



### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: petstore_auth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];


NSNumber* petId = @56; // ID of pet that needs to be updated
NSString* name = @"name_example"; // Updated name of the pet (optional)
NSString* status = @"status_example"; // Updated status of the pet (optional)

KPetApi*apiInstance = [[KPetApi alloc] init];

// Updates a pet in the store with form data
[apiInstance updatePetWithFormWithPetId:petId
              name:name
              status:status
          completionHandler: ^(NSError* error) {
                        if (error) {
                            NSLog(@"Error calling KPetApi->updatePetWithForm: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **NSNumber***| ID of pet that needs to be updated | 
 **name** | **NSString***| Updated name of the pet | [optional] 
 **status** | **NSString***| Updated status of the pet | [optional] 

### Return type

void (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
```objc
-(NSURLSessionTask*) uploadFileWithPetId: (NSNumber*) petId
    additionalMetadata: (NSString*) additionalMetadata
    file: (NSURL*) file
        completionHandler: (void (^)(KApiResponse* output, NSError* error)) handler;
```

uploads an image



### Example
```objc
KDefaultConfiguration *apiConfig = [KDefaultConfiguration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: petstore_auth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];


NSNumber* petId = @56; // ID of pet to update
NSString* additionalMetadata = @"additionalMetadata_example"; // Additional data to pass to server (optional)
NSURL* file = [NSURL fileURLWithPath:@"/path/to/file"]; // file to upload (optional)

KPetApi*apiInstance = [[KPetApi alloc] init];

// uploads an image
[apiInstance uploadFileWithPetId:petId
              additionalMetadata:additionalMetadata
              file:file
          completionHandler: ^(KApiResponse* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling KPetApi->uploadFile: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **NSNumber***| ID of pet to update | 
 **additionalMetadata** | **NSString***| Additional data to pass to server | [optional] 
 **file** | **NSURL*****NSURL***| file to upload | [optional] 

### Return type

[**KApiResponse***](KApiResponse.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

