# CustomFieldApi

All URIs are relative to https://api.boldsign.com.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createCustomField()**](CustomFieldApi.md#createCustomField) | **POST** /v1/customField/create | Create the custom field. |
| [**customFieldsList()**](CustomFieldApi.md#customFieldsList) | **GET** /v1/customField/list | List the custom fields respective to the brand id. |
| [**deleteCustomField()**](CustomFieldApi.md#deleteCustomField) | **DELETE** /v1/customField/delete | Delete the custom field. |
| [**editCustomField()**](CustomFieldApi.md#editCustomField) | **POST** /v1/customField/edit | Edit the custom field. |
| [**embedCustomField()**](CustomFieldApi.md#embedCustomField) | **POST** /v1/customField/createEmbeddedCustomFieldUrl | Generates a URL for creating or modifying custom fields within your application\&#39;s embedded Designer. |


## `createCustomField()`

```typescript
createCustomField(brandCustomFieldDetails: BrandCustomFieldDetails): CustomFieldMessage
```

Create the custom field.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brandCustomFieldDetails** | [**BrandCustomFieldDetails**](../docs/BrandCustomFieldDetails.md)| The custom field details. | |

### Return type

[**CustomFieldMessage**](../docs/CustomFieldMessage.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `text/plain`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `customFieldsList()`

```typescript
customFieldsList(brandId: string): CustomFieldCollection
```

List the custom fields respective to the brand id.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brandId** | **string**| The brand id. | |

### Return type

[**CustomFieldCollection**](../docs/CustomFieldCollection.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `deleteCustomField()`

```typescript
deleteCustomField(customFieldId: string): DeleteCustomFieldReply
```

Delete the custom field.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **customFieldId** | **string**| The custom field id. | |

### Return type

[**DeleteCustomFieldReply**](../docs/DeleteCustomFieldReply.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `text/plain`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `editCustomField()`

```typescript
editCustomField(customFieldId: string, brandCustomFieldDetails: BrandCustomFieldDetails): CustomFieldMessage
```

Edit the custom field.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **customFieldId** | **string**| The custom field id. | |
| **brandCustomFieldDetails** | [**BrandCustomFieldDetails**](../docs/BrandCustomFieldDetails.md)| The custom field details. | |

### Return type

[**CustomFieldMessage**](../docs/CustomFieldMessage.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `text/plain`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `embedCustomField()`

```typescript
embedCustomField(brandId: string, linkValidTill: Date): EmbeddedCustomFieldCreated
```

Generates a URL for creating or modifying custom fields within your application\'s embedded Designer.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brandId** | **string**| The Brand ID for custom fields must be configured | |
| **linkValidTill** | **Date**| This property is used to set the validity of the generated URL. Its maximum validity is 30 days | [optional] |

### Return type

[**EmbeddedCustomFieldCreated**](../docs/EmbeddedCustomFieldCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)
