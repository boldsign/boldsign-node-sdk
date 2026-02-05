# UserApi

All URIs are relative to https://api.boldsign.com.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelInvitation()**](UserApi.md#cancelInvitation) | **POST** /v1/users/cancelInvitation | Cancel the users invitation. |
| [**changeTeam()**](UserApi.md#changeTeam) | **PUT** /v1/users/changeTeam | Change users to other team. |
| [**createUser()**](UserApi.md#createUser) | **POST** /v1/users/create | Create the user. |
| [**getUser()**](UserApi.md#getUser) | **GET** /v1/users/get | Get summary of the user. |
| [**listUsers()**](UserApi.md#listUsers) | **GET** /v1/users/list | List user documents. |
| [**resendInvitation()**](UserApi.md#resendInvitation) | **POST** /v1/users/resendInvitation | Resend the users invitation. |
| [**updateMetaData()**](UserApi.md#updateMetaData) | **PUT** /v1/users/updateMetaData | Update new User meta data details. |
| [**updateUser()**](UserApi.md#updateUser) | **PUT** /v1/users/update | Update new User role. |


## `cancelInvitation()`

```typescript
cancelInvitation(userId: string)
```

Cancel the users invitation.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**|  | |

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

## `changeTeam()`

```typescript
changeTeam(userId: string, changeTeamRequest: ChangeTeamRequest)
```

Change users to other team.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| user Id. | |
| **changeTeamRequest** | [**ChangeTeamRequest**](../docs/ChangeTeamRequest.md)| Change team request. | [optional] |

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

## `createUser()`

```typescript
createUser(createUser: Array<CreateUser>)
```

Create the user.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createUser** | [**Array<CreateUser>**](../docs/CreateUser.md)| The create user. | [optional] |

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

## `getUser()`

```typescript
getUser(userId: string): UserProperties
```

Get summary of the user.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| User Id. | |

### Return type

[**UserProperties**](../docs/UserProperties.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `listUsers()`

```typescript
listUsers(page: number, pageSize: number, search: string, userId: Array<string>): UserRecords
```

List user documents.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **number**| Page index specified in get user list request. | [default to 1] |
| **pageSize** | **number**| Page size specified in get user list request. | [optional] [default to 10] |
| **search** | **string**| Users can be listed by the search  based on the user ID | [optional] |
| **userId** | [**Array<string>**](../docs/string.md)| Users can be listed by the search based on the user IDs | [optional] |

### Return type

[**UserRecords**](../docs/UserRecords.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `resendInvitation()`

```typescript
resendInvitation(userId: string)
```

Resend the users invitation.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**|  | |

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

## `updateMetaData()`

```typescript
updateMetaData(updateUserMetaData: UpdateUserMetaData)
```

Update new User meta data details.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **updateUserMetaData** | [**UpdateUserMetaData**](../docs/UpdateUserMetaData.md)| update query. | [optional] |

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

## `updateUser()`

```typescript
updateUser(updateUser: UpdateUser)
```

Update new User role.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **updateUser** | [**UpdateUser**](../docs/UpdateUser.md)| update query. | [optional] |

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
