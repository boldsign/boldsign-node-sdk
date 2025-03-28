# # EmbeddedDocumentRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `redirectUrl` | ```string``` |   |  |
| `showToolbar` | ```boolean``` |   |  [default to false] |
| `sendViewOption` | ```string``` |   |  [default to SendViewOptionEnum.PreparePage] |
| `showSaveButton` | ```boolean``` |   |  [default to true] |
| `locale` | ```string``` |   |  [default to LocaleEnum.En] |
| `showSendButton` | ```boolean``` |   |  [default to true] |
| `showPreviewButton` | ```boolean``` |   |  [default to true] |
| `showNavigationButtons` | ```boolean``` |   |  [default to true] |
| `showTooltip` | ```boolean``` |   |  [default to false] |
| `embeddedSendLinkValidTill` | ```Date``` |   |  |
| `files` | ```Array<RequestFile>``` |   |  |
| `title` | ```string``` |   |  |
| `message` | ```string``` |   |  |
| `signers` | [```Array<DocumentSigner>```](DocumentSigner.md) |   |  |
| `cc` | [```Array<DocumentCC>```](DocumentCC.md) |   |  |
| `enableSigningOrder` | ```boolean``` |   |  [default to false] |
| `expiryDays` | ```number``` |   |  |
| `expiryDateType` | ```string``` |   |  |
| `expiryValue` | ```number``` |   |  [default to 60] |
| `reminderSettings` | [```ReminderSettings```](ReminderSettings.md) |   |  |
| `enableEmbeddedSigning` | ```boolean``` |   |  [default to false] |
| `disableEmails` | ```boolean``` |   |  [default to false] |
| `disableSMS` | ```boolean``` |   |  [default to false] |
| `brandId` | ```string``` |   |  |
| `hideDocumentId` | ```boolean``` |   |  [default to false] |
| `labels` | ```Array<string>``` |   |  |
| `fileUrls` | ```Array<string>``` |   |  |
| `sendLinkValidTill` | ```Date``` |   |  |
| `useTextTags` | ```boolean``` |   |  [default to false] |
| `textTagDefinitions` | [```Array<TextTagDefinition>```](TextTagDefinition.md) |   |  |
| `enablePrintAndSign` | ```boolean``` |   |  [default to false] |
| `enableReassign` | ```boolean``` |   |  [default to true] |
| `disableExpiryAlert` | ```boolean``` |   |  |
| `documentInfo` | [```Array<DocumentInfo>```](DocumentInfo.md) |   |  |
| `onBehalfOf` | ```string``` |   |  |
| `autoDetectFields` | ```boolean``` |   |  [default to false] |
| `documentDownloadOption` | ```string``` |   |  |
| `isSandbox` | ```boolean``` |   |  |
| `metaData` | ```{ [key: string]: string | null; }``` |   |  |
| `recipientNotificationSettings` | [```RecipientNotificationSettings```](RecipientNotificationSettings.md) |   |  |
| `formGroups` | [```Array<FormGroup>```](FormGroup.md) |   |  |
| `enableAuditTrailLocalization` | ```boolean``` |   |  |
| `downloadFileName` | ```string``` |   |  |
| `scheduledSendTime` | ```number``` |   |  |
| `allowScheduledSend` | ```boolean``` |   |  [default to false] |

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
