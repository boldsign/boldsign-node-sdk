# BrandingApi

All URIs are relative to https://api.boldsign.com.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**brandList()**](BrandingApi.md#brandList) | **GET** /v1/brand/list | List all the brands. |
| [**createBrand()**](BrandingApi.md#createBrand) | **POST** /v1/brand/create | Create the brand. |
| [**deleteBrand()**](BrandingApi.md#deleteBrand) | **DELETE** /v1/brand/delete | Delete the brand. |
| [**editBrand()**](BrandingApi.md#editBrand) | **POST** /v1/brand/edit | Edit the brand. |
| [**getBrand()**](BrandingApi.md#getBrand) | **GET** /v1/brand/get | Get the specific brand details. |
| [**resetDefaultBrand()**](BrandingApi.md#resetDefaultBrand) | **POST** /v1/brand/resetdefault | Reset default brand. |


## `brandList()`

```typescript
brandList(): BrandingRecords
```

List all the brands.


### Parameters

|This endpoint does not need any parameter. |

### Return type

[**BrandingRecords**](../docs/BrandingRecords.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `createBrand()`

```typescript
createBrand(brandName: string, brandLogo: RequestFile, backgroundColor: string, buttonColor: string, buttonTextColor: string, emailDisplayName: string, disclaimerDescription: string, disclaimerTitle: string, redirectUrl: string, isDefault: boolean, canHideTagLine: boolean, combineAuditTrail: boolean, combineAttachments: boolean, excludeAuditTrailFromEmail: boolean, emailSignedDocument: string, documentTimeZone: string, showBuiltInFormFields: boolean, allowCustomFieldCreation: boolean, showSharedCustomFields: boolean, hideDecline: boolean, hideSave: boolean, documentExpirySettingsExpiryDateType: string, documentExpirySettingsExpiryValue: number, documentExpirySettingsEnableDefaultExpiryAlert: boolean, documentExpirySettingsEnableAutoReminder: boolean, documentExpirySettingsReminderDays: number, documentExpirySettingsReminderCount: number, customDomainSettingsDomainName: string, customDomainSettingsFromName: string, signatureFrameSettingsEnableSignatureFrame: boolean, signatureFrameSettingsShowRecipientName: boolean, signatureFrameSettingsShowRecipientEmail: boolean, signatureFrameSettingsShowTimeStamp: boolean): BrandCreated
```

Create the brand.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brandName** | **string**|  | |
| **brandLogo** | **RequestFile****RequestFile**|  | |
| **backgroundColor** | **string**|  | [optional] |
| **buttonColor** | **string**|  | [optional] |
| **buttonTextColor** | **string**|  | [optional] |
| **emailDisplayName** | **string**|  | [optional] |
| **disclaimerDescription** | **string**|  | [optional] |
| **disclaimerTitle** | **string**|  | [optional] |
| **redirectUrl** | **string**|  | [optional] |
| **isDefault** | **boolean**|  | [optional] [default to false] |
| **canHideTagLine** | **boolean**|  | [optional] [default to false] |
| **combineAuditTrail** | **boolean**|  | [optional] [default to false] |
| **combineAttachments** | **boolean**|  | [optional] [default to false] |
| **excludeAuditTrailFromEmail** | **boolean**|  | [optional] [default to false] |
| **emailSignedDocument** | **string**|  | [optional] [default to &#39;Attachment&#39;] |
| **documentTimeZone** | **string**|  | [optional] |
| **showBuiltInFormFields** | **boolean**|  | [optional] [default to true] |
| **allowCustomFieldCreation** | **boolean**|  | [optional] [default to false] |
| **showSharedCustomFields** | **boolean**|  | [optional] [default to false] |
| **hideDecline** | **boolean**|  | [optional] |
| **hideSave** | **boolean**|  | [optional] |
| **documentExpirySettingsExpiryDateType** | **string**|  | [optional] |
| **documentExpirySettingsExpiryValue** | **number**|  | [optional] |
| **documentExpirySettingsEnableDefaultExpiryAlert** | **boolean**|  | [optional] |
| **documentExpirySettingsEnableAutoReminder** | **boolean**|  | [optional] |
| **documentExpirySettingsReminderDays** | **number**|  | [optional] |
| **documentExpirySettingsReminderCount** | **number**|  | [optional] |
| **customDomainSettingsDomainName** | **string**|  | [optional] |
| **customDomainSettingsFromName** | **string**|  | [optional] |
| **signatureFrameSettingsEnableSignatureFrame** | **boolean**|  | [optional] [default to false] |
| **signatureFrameSettingsShowRecipientName** | **boolean**|  | [optional] [default to false] |
| **signatureFrameSettingsShowRecipientEmail** | **boolean**|  | [optional] [default to false] |
| **signatureFrameSettingsShowTimeStamp** | **boolean**|  | [optional] [default to false] |

### Return type

[**BrandCreated**](../docs/BrandCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=full;IEEE754Compatible=false`, `application/json;odata.metadata=full;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=true`, `application/json;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.streaming=false;IEEE754Compatible=true`, `application/json;IEEE754Compatible=false`, `application/json;IEEE754Compatible=true`, `application/xml`, `text/plain`, `application/octet-stream`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `deleteBrand()`

```typescript
deleteBrand(brandId: string): BrandingMessage
```

Delete the brand.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brandId** | **string**| brand Id. | |

### Return type

[**BrandingMessage**](../docs/BrandingMessage.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=full;IEEE754Compatible=false`, `application/json;odata.metadata=full;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=true`, `application/json;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.streaming=false;IEEE754Compatible=true`, `application/json;IEEE754Compatible=false`, `application/json;IEEE754Compatible=true`, `application/xml`, `text/plain`, `application/octet-stream`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `editBrand()`

```typescript
editBrand(brandId: string, brandName: string, brandLogo: RequestFile, backgroundColor: string, buttonColor: string, buttonTextColor: string, emailDisplayName: string, disclaimerDescription: string, disclaimerTitle: string, redirectUrl: string, isDefault: boolean, canHideTagLine: boolean, combineAuditTrail: boolean, combineAttachments: boolean, excludeAuditTrailFromEmail: boolean, emailSignedDocument: string, documentTimeZone: string, showBuiltInFormFields: boolean, allowCustomFieldCreation: boolean, showSharedCustomFields: boolean, hideDecline: boolean, hideSave: boolean, documentExpirySettingsExpiryDateType: string, documentExpirySettingsExpiryValue: number, documentExpirySettingsEnableDefaultExpiryAlert: boolean, documentExpirySettingsEnableAutoReminder: boolean, documentExpirySettingsReminderDays: number, documentExpirySettingsReminderCount: number, customDomainSettingsDomainName: string, customDomainSettingsFromName: string, signatureFrameSettingsEnableSignatureFrame: boolean, signatureFrameSettingsShowRecipientName: boolean, signatureFrameSettingsShowRecipientEmail: boolean, signatureFrameSettingsShowTimeStamp: boolean): BrandCreated
```

Edit the brand.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brandId** | **string**| The brand id. | |
| **brandName** | **string**|  | [optional] |
| **brandLogo** | **RequestFile****RequestFile**|  | [optional] |
| **backgroundColor** | **string**|  | [optional] |
| **buttonColor** | **string**|  | [optional] |
| **buttonTextColor** | **string**|  | [optional] |
| **emailDisplayName** | **string**|  | [optional] |
| **disclaimerDescription** | **string**|  | [optional] |
| **disclaimerTitle** | **string**|  | [optional] |
| **redirectUrl** | **string**|  | [optional] |
| **isDefault** | **boolean**|  | [optional] [default to false] |
| **canHideTagLine** | **boolean**|  | [optional] [default to false] |
| **combineAuditTrail** | **boolean**|  | [optional] [default to false] |
| **combineAttachments** | **boolean**|  | [optional] [default to false] |
| **excludeAuditTrailFromEmail** | **boolean**|  | [optional] [default to false] |
| **emailSignedDocument** | **string**|  | [optional] [default to &#39;Attachment&#39;] |
| **documentTimeZone** | **string**|  | [optional] |
| **showBuiltInFormFields** | **boolean**|  | [optional] [default to true] |
| **allowCustomFieldCreation** | **boolean**|  | [optional] [default to false] |
| **showSharedCustomFields** | **boolean**|  | [optional] [default to false] |
| **hideDecline** | **boolean**|  | [optional] |
| **hideSave** | **boolean**|  | [optional] |
| **documentExpirySettingsExpiryDateType** | **string**|  | [optional] |
| **documentExpirySettingsExpiryValue** | **number**|  | [optional] |
| **documentExpirySettingsEnableDefaultExpiryAlert** | **boolean**|  | [optional] |
| **documentExpirySettingsEnableAutoReminder** | **boolean**|  | [optional] |
| **documentExpirySettingsReminderDays** | **number**|  | [optional] |
| **documentExpirySettingsReminderCount** | **number**|  | [optional] |
| **customDomainSettingsDomainName** | **string**|  | [optional] |
| **customDomainSettingsFromName** | **string**|  | [optional] |
| **signatureFrameSettingsEnableSignatureFrame** | **boolean**|  | [optional] [default to false] |
| **signatureFrameSettingsShowRecipientName** | **boolean**|  | [optional] [default to false] |
| **signatureFrameSettingsShowRecipientEmail** | **boolean**|  | [optional] [default to false] |
| **signatureFrameSettingsShowTimeStamp** | **boolean**|  | [optional] [default to false] |

### Return type

[**BrandCreated**](../docs/BrandCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=full;IEEE754Compatible=false`, `application/json;odata.metadata=full;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=true`, `application/json;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.streaming=false;IEEE754Compatible=true`, `application/json;IEEE754Compatible=false`, `application/json;IEEE754Compatible=true`, `application/xml`, `text/plain`, `application/octet-stream`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `getBrand()`

```typescript
getBrand(brandId: string): ViewBrandDetails
```

Get the specific brand details.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brandId** | **string**| The brand id. | |

### Return type

[**ViewBrandDetails**](../docs/ViewBrandDetails.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `resetDefaultBrand()`

```typescript
resetDefaultBrand(brandId: string): BrandingMessage
```

Reset default brand.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brandId** | **string**| brand Id. | |

### Return type

[**BrandingMessage**](../docs/BrandingMessage.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=minimal;IEEE754Compatible=false`, `application/json;odata.metadata=minimal;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=full;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=full;IEEE754Compatible=false`, `application/json;odata.metadata=full;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.metadata=none;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=true`, `application/json;odata.metadata=none;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=false`, `application/json;odata.metadata=none;IEEE754Compatible=true`, `application/json;odata.streaming=true;IEEE754Compatible=false`, `application/json;odata.streaming=true;IEEE754Compatible=true`, `application/json;odata.streaming=false;IEEE754Compatible=false`, `application/json;odata.streaming=false;IEEE754Compatible=true`, `application/json;IEEE754Compatible=false`, `application/json;IEEE754Compatible=true`, `application/xml`, `text/plain`, `application/octet-stream`, `text/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)
