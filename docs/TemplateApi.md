# TemplateApi

All URIs are relative to https://api.boldsign.com.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addTag()**](TemplateApi.md#addTag) | **PATCH** /v1/template/addTags | Add the Tags in Templates. |
| [**createEmbeddedRequestUrlTemplate()**](TemplateApi.md#createEmbeddedRequestUrlTemplate) | **POST** /v1/template/createEmbeddedRequestUrl | Generates a send URL using a template which embeds document sending process into your application. |
| [**createEmbeddedTemplateUrl()**](TemplateApi.md#createEmbeddedTemplateUrl) | **POST** /v1/template/createEmbeddedTemplateUrl | Generates a create URL to embeds template create process into your application. |
| [**createTemplate()**](TemplateApi.md#createTemplate) | **POST** /v1/template/create | Creates a new template. |
| [**deleteTag()**](TemplateApi.md#deleteTag) | **DELETE** /v1/template/deleteTags | Delete the Tags in Templates. |
| [**deleteTemplate()**](TemplateApi.md#deleteTemplate) | **DELETE** /v1/template/delete | Deletes a template. |
| [**download()**](TemplateApi.md#download) | **GET** /v1/template/download | Download the template. |
| [**editTemplate()**](TemplateApi.md#editTemplate) | **PUT** /v1/template/edit | Edit and updates an existing template. |
| [**getEmbeddedTemplateEditUrl()**](TemplateApi.md#getEmbeddedTemplateEditUrl) | **POST** /v1/template/getEmbeddedTemplateEditUrl | Generates a edit URL to embeds template edit process into your application. |
| [**getProperties()**](TemplateApi.md#getProperties) | **GET** /v1/template/properties | Get summary of the template. |
| [**listTemplates()**](TemplateApi.md#listTemplates) | **GET** /v1/template/list | List all the templates. |
| [**mergeAndSend()**](TemplateApi.md#mergeAndSend) | **POST** /v1/template/mergeAndSend | Send the document by merging multiple templates. |
| [**sendUsingTemplate()**](TemplateApi.md#sendUsingTemplate) | **POST** /v1/template/send | Send a document for signature using a Template. |


## `addTag()`

```typescript
addTag(templateTag: TemplateTag)
```

Add the Tags in Templates.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateTag** | [**TemplateTag**](../docs/TemplateTag.md)| ContainsTemplateId and Label Names for AddingTags. | [optional] |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `text/plain`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `createEmbeddedRequestUrlTemplate()`

```typescript
createEmbeddedRequestUrlTemplate(templateId: string, embeddedSendTemplateFormRequest: EmbeddedSendTemplateFormRequest): EmbeddedSendCreated
```

Generates a send URL using a template which embeds document sending process into your application.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateId** | **string**| The template id. | |
| **embeddedSendTemplateFormRequest** | [**EmbeddedSendTemplateFormRequest**](../docs/EmbeddedSendTemplateFormRequest.md)| Embedded send template json request. | [optional] |

### Return type

[**EmbeddedSendCreated**](../docs/EmbeddedSendCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`, `application/x-www-form-urlencoded`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `createEmbeddedTemplateUrl()`

```typescript
createEmbeddedTemplateUrl(embeddedCreateTemplateRequest: EmbeddedCreateTemplateRequest): EmbeddedTemplateCreated
```

Generates a create URL to embeds template create process into your application.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **embeddedCreateTemplateRequest** | [**EmbeddedCreateTemplateRequest**](../docs/EmbeddedCreateTemplateRequest.md)| The create embedded template request body. | [optional] |

### Return type

[**EmbeddedTemplateCreated**](../docs/EmbeddedTemplateCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`, `application/x-www-form-urlencoded`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `createTemplate()`

```typescript
createTemplate(createTemplateRequest: CreateTemplateRequest): TemplateCreated
```

Creates a new template.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createTemplateRequest** | [**CreateTemplateRequest**](../docs/CreateTemplateRequest.md)| The create template request body. | [optional] |

### Return type

[**TemplateCreated**](../docs/TemplateCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`, `application/x-www-form-urlencoded`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `deleteTag()`

```typescript
deleteTag(templateTag: TemplateTag)
```

Delete the Tags in Templates.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateTag** | [**TemplateTag**](../docs/TemplateTag.md)| Contains TemplateId and LabelNames for Adding Tags. | [optional] |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `text/plain`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `deleteTemplate()`

```typescript
deleteTemplate(templateId: string, onBehalfOf: string)
```

Deletes a template.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateId** | **string**| The template id. | |
| **onBehalfOf** | **string**| The on behalfof email address. | [optional] |

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

## `download()`

```typescript
download(templateId: string, onBehalfOf: string): Buffer
```

Download the template.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateId** | **string**| Template Id. | |
| **onBehalfOf** | **string**| The on behalfof email address. | [optional] |

### Return type

**Buffer**

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `editTemplate()`

```typescript
editTemplate(templateId: string, editTemplateRequest: EditTemplateRequest)
```

Edit and updates an existing template.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateId** | **string**| The template id. | |
| **editTemplateRequest** | [**EditTemplateRequest**](../docs/EditTemplateRequest.md)| The edit template request body. | |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `getEmbeddedTemplateEditUrl()`

```typescript
getEmbeddedTemplateEditUrl(templateId: string, embeddedTemplateEditRequest: EmbeddedTemplateEditRequest): EmbeddedTemplateEdited
```

Generates a edit URL to embeds template edit process into your application.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateId** | **string**| The template id. | |
| **embeddedTemplateEditRequest** | [**EmbeddedTemplateEditRequest**](../docs/EmbeddedTemplateEditRequest.md)| The embedded edit template request body. | [optional] |

### Return type

[**EmbeddedTemplateEdited**](../docs/EmbeddedTemplateEdited.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`, `application/x-www-form-urlencoded`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `getProperties()`

```typescript
getProperties(templateId: string): TemplateProperties
```

Get summary of the template.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateId** | **string**| Template Id. | |

### Return type

[**TemplateProperties**](../docs/TemplateProperties.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `listTemplates()`

```typescript
listTemplates(page: number, templateType: 'mytemplates' | 'sharedtemplate' | 'all', pageSize: number, searchKey: string, onBehalfOf: Array<string>, createdBy: Array<string>, templateLabels: Array<string>, startDate: Date, endDate: Date, brandIds: Array<string>): TemplateRecords
```

List all the templates.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **number**|  | [default to 1] |
| **templateType** | **'mytemplates' | 'sharedtemplate' | 'all'**|  | [optional] |
| **pageSize** | **number**|  | [optional] [default to 10] |
| **searchKey** | **string**|  | [optional] |
| **onBehalfOf** | [**Array<string>**](../docs/string.md)| The sender identity\&#39;s email used to filter the templates returned in the API. The API will return templates that were sent on behalf of the specified email address. | [optional] |
| **createdBy** | [**Array<string>**](../docs/string.md)| The templates can be listed by the creator of the template. | [optional] |
| **templateLabels** | [**Array<string>**](../docs/string.md)| Labels of the template. | [optional] |
| **startDate** | **Date**| Start date of the template | [optional] |
| **endDate** | **Date**| End date of the template | [optional] |
| **brandIds** | [**Array<string>**](../docs/string.md)| BrandId(s) of the template. | [optional] |

### Return type

[**TemplateRecords**](../docs/TemplateRecords.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `mergeAndSend()`

```typescript
mergeAndSend(mergeAndSendForSignForm: MergeAndSendForSignForm)
```

Send the document by merging multiple templates.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **mergeAndSendForSignForm** | [**MergeAndSendForSignForm**](../docs/MergeAndSendForSignForm.md)| The merge and send details as JSON. | [optional] |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`, `application/x-www-form-urlencoded`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `sendUsingTemplate()`

```typescript
sendUsingTemplate(templateId: string, sendForSignFromTemplateForm: SendForSignFromTemplateForm): DocumentCreated
```

Send a document for signature using a Template.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateId** | **string**| The template id. | |
| **sendForSignFromTemplateForm** | [**SendForSignFromTemplateForm**](../docs/SendForSignFromTemplateForm.md)| The send template details as JSON. | [optional] |

### Return type

[**DocumentCreated**](../docs/DocumentCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`, `application/x-www-form-urlencoded`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)
