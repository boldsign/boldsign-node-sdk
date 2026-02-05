# # EmbeddedSendTemplateFormRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `files` | ```Array<RequestFile>``` |   |  |
| `fileUrls` | ```Array<string>``` |   |  |
| `redirectUrl` | ```string``` |   |  |
| `showToolbar` | ```boolean``` |   |  |
| `sendViewOption` | ```string``` |   |  |
| `showSaveButton` | ```boolean``` |   |  |
| `locale` | ```string``` |   |  |
| `showSendButton` | ```boolean``` |   |  |
| `showPreviewButton` | ```boolean``` |   |  |
| `showNavigationButtons` | ```boolean``` |   |  |
| `sendLinkValidTill` | ```Date``` |   |  |
| `showTooltip` | ```boolean``` |   |  |
| `documentId` | ```string``` |   |  |
| `title` | ```string``` |   |  |
| `message` | ```string``` |   |  |
| `roles` | [```Array<Role>```](Role.md) |   |  |
| `brandId` | ```string``` |   |  |
| `labels` | ```Array<string>``` |   |  |
| `disableEmails` | ```boolean``` |   |  |
| `disableSMS` | ```boolean``` |   |  [default to false] |
| `hideDocumentId` | ```boolean``` |   |  |
| `reminderSettings` | [```ReminderSettings```](ReminderSettings.md) |   |  |
| `cc` | [```Array<DocumentCC>```](DocumentCC.md) |   |  |
| `expiryDays` | ```number``` |   |  |
| `expiryDateType` | ```string``` |   |  |
| `expiryValue` | ```number``` |   |  [default to 60] |
| `enablePrintAndSign` | ```boolean``` |   |  |
| `enableReassign` | ```boolean``` |   |  |
| `enableSigningOrder` | ```boolean``` |   |  |
| `disableExpiryAlert` | ```boolean``` |   |  |
| `documentInfo` | [```Array<DocumentInfo>```](DocumentInfo.md) |   |  |
| `onBehalfOf` | ```string``` |   |  |
| `isSandbox` | ```boolean``` |   |  |
| `roleRemovalIndices` | ```Array<number>``` |   |  |
| `documentDownloadOption` | ```string``` |   |  |
| `metaData` | ```{ [key: string]: string | null; }``` |   |  |
| `formGroups` | [```Array<FormGroup>```](FormGroup.md) |   |  |
| `removeFormFields` | ```Array<string>``` |   |  |
| `recipientNotificationSettings` | [```RecipientNotificationSettings```](RecipientNotificationSettings.md) |   |  |
| `enableAuditTrailLocalization` | ```boolean``` |   |  |
| `downloadFileName` | ```string``` |   |  |
| `scheduledSendTime` | ```number``` |   |  |
| `allowScheduledSend` | ```boolean``` |   |  [default to false] |
| `allowedSignatureTypes` | ```Array<string>``` |   |  |
| `groupSignerSettings` | [```GroupSignerSettings```](GroupSignerSettings.md) |   |  |

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
