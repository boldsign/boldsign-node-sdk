# # EditDocumentRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `files` | [```Array<EditDocumentFile>```](EditDocumentFile.md) |   |  |
| `title` | ```string``` |   |  |
| `message` | ```string``` |   |  |
| `signers` | [```Array<EditDocumentSigner>```](EditDocumentSigner.md) |   |  |
| `cc` | [```Array<DocumentCC>```](DocumentCC.md) |   |  |
| `enableSigningOrder` | ```boolean``` |   |  |
| `enableAuditTrailLocalization` | ```boolean``` |   |  |
| `expiryDateType` | ```string``` |   |  |
| `expiryValue` | ```number``` |   |  |
| `reminderSettings` | [```ReminderSettings```](ReminderSettings.md) |   |  |
| `disableEmails` | ```boolean``` |   |  |
| `disableSMS` | ```boolean``` |   |  |
| `brandId` | ```string``` |   |  |
| `hideDocumentId` | ```boolean``` |   |  |
| `labels` | ```Array<string>``` |   |  |
| `disableExpiryAlert` | ```boolean``` |   |  |
| `enablePrintAndSign` | ```boolean``` |   |  |
| `enableReassign` | ```boolean``` |   |  |
| `useTextTags` | ```boolean``` |   |  |
| `textTagDefinitions` | [```Array<TextTagDefinition>```](TextTagDefinition.md) |   |  |
| `documentInfo` | [```Array<DocumentInfo>```](DocumentInfo.md) |   |  |
| `onBehalfOf` | ```string``` |   |  |
| `documentDownloadOption` | ```string``` |   |  |
| `metaData` | ```{ [key: string]: string | null; }``` |   |  |
| `recipientNotificationSettings` | [```RecipientNotificationSettings```](RecipientNotificationSettings.md) |   |  |
| `formGroups` | [```Array<FormGroup>```](FormGroup.md) |   |  |
| `downloadFileName` | ```string``` |   |  |
| `scheduledSendTime` | ```number``` |   |  |
| `allowedSignatureTypes` | ```Array<string>``` |   |  |
| `groupSignerSettings` | [```GroupSignerSettings```](GroupSignerSettings.md) |   |  |

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
