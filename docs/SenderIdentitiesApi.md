# SenderIdentitiesApi

All URIs are relative to https://api.boldsign.com.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createSenderIdentities()**](SenderIdentitiesApi.md#createSenderIdentities) | **POST** /v1/senderIdentities/create | Creates sender identity. |
| [**deleteSenderIdentities()**](SenderIdentitiesApi.md#deleteSenderIdentities) | **DELETE** /v1/senderIdentities/delete | Deletes sender identity. |
| [**getSenderIdentityProperties()**](SenderIdentitiesApi.md#getSenderIdentityProperties) | **GET** /v1/senderIdentities/properties | Gets sender identity by ID or email. |
| [**listSenderIdentities()**](SenderIdentitiesApi.md#listSenderIdentities) | **GET** /v1/senderIdentities/list | Lists sender identity. |
| [**reRequestSenderIdentities()**](SenderIdentitiesApi.md#reRequestSenderIdentities) | **POST** /v1/senderIdentities/rerequest | Rerequests denied sender identity. |
| [**resendInvitationSenderIdentities()**](SenderIdentitiesApi.md#resendInvitationSenderIdentities) | **POST** /v1/senderIdentities/resendInvitation | Resends sender identity invitation. |
| [**updateSenderIdentities()**](SenderIdentitiesApi.md#updateSenderIdentities) | **POST** /v1/senderIdentities/update | Updates sender identity. |


## `createSenderIdentities()`

```typescript
createSenderIdentities(createSenderIdentityRequest: CreateSenderIdentityRequest): SenderIdentityCreated
```

Creates sender identity.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createSenderIdentityRequest** | [**CreateSenderIdentityRequest**](../docs/CreateSenderIdentityRequest.md)| The create sender identity request. | |

### Return type

[**SenderIdentityCreated**](../docs/SenderIdentityCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=full;IEEE754Compatible=false`, `application/json;odata.metadata=full;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=true`, `application/json;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.streaming=false;IEEE754Compatible=true`, `application/json;IEEE754Compatible=false`, `application/json;IEEE754Compatible=true`, `application/xml`, `text/plain`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `deleteSenderIdentities()`

```typescript
deleteSenderIdentities(email: string)
```

Deletes sender identity.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email** | **string**| The email address. | |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `getSenderIdentityProperties()`

```typescript
getSenderIdentityProperties(id: string, email: string): SenderIdentityViewModel
```

Gets sender identity by ID or email.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| The sender identity id. | [optional] |
| **email** | **string**| The sender identity email. | [optional] |

### Return type

[**SenderIdentityViewModel**](../docs/SenderIdentityViewModel.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `listSenderIdentities()`

```typescript
listSenderIdentities(page: number, pageSize: number, search: string, brandIds: Array<string>): SenderIdentityList
```

Lists sender identity.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **number**| Page index specified in get sender identity request. | [default to 1] |
| **pageSize** | **number**| Page size specified in get sender identity list request. | [optional] [default to 10] |
| **search** | **string**| Users can be listed by the search key present in the sender identity like sender identity name and email address | [optional] |
| **brandIds** | [**Array<string>**](../docs/string.md)| A list of brand IDs to filter associated with the sender identity. | [optional] |

### Return type

[**SenderIdentityList**](../docs/SenderIdentityList.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `reRequestSenderIdentities()`

```typescript
reRequestSenderIdentities(email: string)
```

Rerequests denied sender identity.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email** | **string**| The email address. | |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `resendInvitationSenderIdentities()`

```typescript
resendInvitationSenderIdentities(email: string)
```

Resends sender identity invitation.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email** | **string**| The email address. | |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `updateSenderIdentities()`

```typescript
updateSenderIdentities(email: string, editSenderIdentityRequest: EditSenderIdentityRequest)
```

Updates sender identity.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email** | **string**| The email address. | |
| **editSenderIdentityRequest** | [**EditSenderIdentityRequest**](../docs/EditSenderIdentityRequest.md)| The create sender identity request. | |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=full;IEEE754Compatible=false`, `application/json;odata.metadata=full;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=true`, `application/json;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.streaming=false;IEEE754Compatible=true`, `application/json;IEEE754Compatible=false`, `application/json;IEEE754Compatible=true`, `application/xml`, `text/plain`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)
