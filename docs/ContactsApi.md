# ContactsApi

All URIs are relative to https://api.boldsign.com.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**contactUserList()**](ContactsApi.md#contactUserList) | **GET** /v1/contacts/list | List Contact document. |
| [**createContact()**](ContactsApi.md#createContact) | **POST** /v1/contacts/create | Create the new Contact. |
| [**deleteContacts()**](ContactsApi.md#deleteContacts) | **DELETE** /v1/contacts/delete | Deletes a contact. |
| [**getContact()**](ContactsApi.md#getContact) | **GET** /v1/contacts/get | Get summary of the contact. |
| [**updateContact()**](ContactsApi.md#updateContact) | **PUT** /v1/contacts/update | Update the contact. |


## `contactUserList()`

```typescript
contactUserList(page: number, pageSize: number, searchKey: string, contactType: 'MyContacts' | 'AllContacts'): ContactsList
```

List Contact document.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **number**| Page index specified in get user contact list request. Default value is 1. | [default to 1] |
| **pageSize** | **number**| Page size specified in get user contact list request. Default value is 10. | [optional] [default to 10] |
| **searchKey** | **string**| Contacts can be listed by the search  based on the Name or Email | [optional] |
| **contactType** | **'MyContacts' | 'AllContacts'**| Contact type whether the contact is My Contacts or All Contacts. Default value is AllContacts. | [optional] |

### Return type

[**ContactsList**](../docs/ContactsList.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `createContact()`

```typescript
createContact(contactDetails: Array<ContactDetails>): CreateContactResponse
```

Create the new Contact.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contactDetails** | [**Array<ContactDetails>**](../docs/ContactDetails.md)| The contact details. | [optional] |

### Return type

[**CreateContactResponse**](../docs/CreateContactResponse.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `deleteContacts()`

```typescript
deleteContacts(id: string)
```

Deletes a contact.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| The contact id. | |

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

## `getContact()`

```typescript
getContact(id: string): ContactsDetails
```

Get summary of the contact.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Contact Id. | |

### Return type

[**ContactsDetails**](../docs/ContactsDetails.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `updateContact()`

```typescript
updateContact(id: string, contactDetails: ContactDetails)
```

Update the contact.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| The contactId. | [optional] |
| **contactDetails** | [**ContactDetails**](../docs/ContactDetails.md)| The contact details. | [optional] |

### Return type

void (empty response body)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)
