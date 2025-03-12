# TeamsApi

All URIs are relative to https://api.boldsign.com.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createTeam()**](TeamsApi.md#createTeam) | **POST** /v1/teams/create | Create Team. |
| [**getTeam()**](TeamsApi.md#getTeam) | **GET** /v1/teams/get | Get Team details. |
| [**listTeams()**](TeamsApi.md#listTeams) | **GET** /v1/teams/list | List Teams. |
| [**updateTeam()**](TeamsApi.md#updateTeam) | **PUT** /v1/teams/update | Update Team. |


## `createTeam()`

```typescript
createTeam(createTeamRequest: CreateTeamRequest): TeamCreated
```

Create Team.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createTeamRequest** | [**CreateTeamRequest**](../docs/CreateTeamRequest.md)| team creation. | |

### Return type

[**TeamCreated**](../docs/TeamCreated.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json;odata.metadata=minimal;odata.streaming=true`, `application/json;odata.metadata=minimal;odata.streaming=false`, `application/json;odata.metadata=minimal`, `application/json;odata.metadata=full;odata.streaming=true`, `application/json;odata.metadata=full;odata.streaming=false`, `application/json;odata.metadata=full`, `application/json;odata.metadata=none;odata.streaming=true`, `application/json;odata.metadata=none;odata.streaming=false`, `application/json;odata.metadata=none`, `application/json;odata.streaming=true`, `application/json;odata.streaming=false`, `application/json`, `application/xml`, `application/prs.odatatestxx-odata`, `application/json-patch+json`, `text/json`, `application/*+json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `getTeam()`

```typescript
getTeam(teamId: string): TeamResponse
```

Get Team details.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamId** | **string**| Team Id. | |

### Return type

[**TeamResponse**](../docs/TeamResponse.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `listTeams()`

```typescript
listTeams(page: number, pageSize: number, searchKey: string): TeamListResponse
```

List Teams.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **number**| Page index specified in get team list request. | [default to 1] |
| **pageSize** | **number**| Page size specified in get team list request. | [optional] [default to 10] |
| **searchKey** | **string**| Teams can be listed by the search key | [optional] |

### Return type

[**TeamListResponse**](../docs/TeamListResponse.md)

### Authorization

[X-API-KEY](../README.md#X-API-KEY), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints)
[[Back to Model list]](../README.md#models)
[[Back to README]](../README.md)

## `updateTeam()`

```typescript
updateTeam(teamUpdateRequest: TeamUpdateRequest)
```

Update Team.


### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamUpdateRequest** | [**TeamUpdateRequest**](../docs/TeamUpdateRequest.md)| update team. | |

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
