# # IWebhookData



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `object` | ```string``` |   |  |
| `documentId` | ```string``` |   |  |
| `messageTitle` | ```string``` |   |  |
| `documentDescription` | ```string``` |   |  |
| `status` | ```string``` |   |  |
| `senderDetail` | [```DocumentSender```](DocumentSender.md) |   |  |
| `signerDetails` | [```Array<TemplateSigner>```](TemplateSigner.md) |   |  |
| `ccDetails` | [```Array<TemplateCcWebhookModel>```](TemplateCcWebhookModel.md) |   |  |
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
| `id` | ```string``` |   |  |
| `name` | ```string``` |   |  |
| `email` | ```string``` |   |  |
| `modifiedDate` | ```Date``` |   |  |
| `approvedDateTime` | ```Date``` |   |  |
| `redirectUrl` | ```string``` |   |  |
| `createdBy` | [```SenderIdentityCreator```](SenderIdentityCreator.md) |   |  |
| `locale` | ```string``` |   |  |
| `templateId` | ```string``` |   |  |
| `allowNewFiles` | ```boolean``` |   |  |
| `allowModifyFiles` | ```boolean``` |   |  |
| `activityDate` | ```Date``` |   |  |
| `activityBy` | ```string``` |   |  |
| `templateName` | ```string``` |   |  |
| `templateDescription` | ```string``` |   |  |
| `isTemplate` | ```boolean``` |   |  [default to false] |
| `templateLabels` | ```Array<string>``` |   |  |
| `formFieldPermission` | [```FormFieldPermissionWebhookModel```](FormFieldPermissionWebhookModel.md) |   |  |
| `signerDetail` | [```DocumentSignerWebhookModel```](DocumentSignerWebhookModel.md) |   |  |

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
