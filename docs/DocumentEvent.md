# # DocumentEvent



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `object` | ```string``` |   |  |
| `documentId` | ```string``` |   |  |
| `messageTitle` | ```string``` |   |  |
| `documentDescription` | ```string``` |   |  |
| `status` | ```string``` |   |  |
| `senderDetail` | [```DocumentSender```](DocumentSender.md) |   |  |
| `signerDetails` | [```Array<DocumentSignerWebhookModel>```](DocumentSignerWebhookModel.md) |   |  |
| `ccDetails` | [```Array<DocumentCcWebhookModel>```](DocumentCcWebhookModel.md) |   |  |
| `onBehalfOf` | ```string``` |   |  |
| `createdDate` | ```Date``` |   |  |
| `expiryDate` | ```Date``` |   |  |
| `enableSigningOrder` | ```boolean``` |   |  |
| `disableEmails` | ```boolean``` |   |  |
| `revokeMessage` | ```string``` |   |  |
| `errorMessage` | ```string``` |   |  |
| `labels` | ```Array<string>``` |   |  |
| `isCombinedAudit` | ```boolean``` |   |  |
| `isCombinedAttachment` | ```boolean``` |   |  |
| `brandId` | ```string``` |   |  |
| `documentDownloadOption` | ```string``` |   |  |
| `metaData` | ```{ [key: string]: string | null; }``` |   |  |
| `failedDeliveryMode` | ```string``` |   |  |
| `behalfOf` | [```BehalfOfWebhookModel```](BehalfOfWebhookModel.md) |   |  |
| `allowedSignatureTypes` | ```Array<string>``` |   |  |
| `groupSignerSettings` | [```GroupSignerSettingsWebhookModel```](GroupSignerSettingsWebhookModel.md) |   |  |
| `enableAllowSignEverywhere` | ```boolean``` |   |  |
| `documentTimeZone` | ```string``` |   |  |
| `allowCommenting` | ```boolean``` |   |  |

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
