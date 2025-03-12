# # EmbeddedCreateTemplateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `title`<sup>*_required_</sup> | ```string``` |   |  |
| `redirectUrl` | ```string``` |   |  |
| `showToolbar` | ```boolean``` |   |  [default to false] |
| `viewOption` | ```string``` |   |  [default to ViewOptionEnum.PreparePage] |
| `showSaveButton` | ```boolean``` |   |  [default to true] |
| `locale` | ```string``` |   |  [default to LocaleEnum.En] |
| `showSendButton` | ```boolean``` |   |  |
| `showCreateButton` | ```boolean``` |   |  [default to true] |
| `showPreviewButton` | ```boolean``` |   |  [default to true] |
| `showNavigationButtons` | ```boolean``` |   |  [default to true] |
| `linkValidTill` | ```Date``` |   |  |
| `showTooltip` | ```boolean``` |   |  [default to false] |
| `description` | ```string``` |   |  |
| `documentTitle` | ```string``` |   |  |
| `documentMessage` | ```string``` |   |  |
| `files` | ```Array<RequestFile>``` |   |  |
| `fileUrls` | ```Array<string>``` |   |  |
| `roles` | [```Array<TemplateRole>```](TemplateRole.md) |   |  |
| `allowModifyFiles` | ```boolean``` |   |  [default to true] |
| `cc` | [```Array<DocumentCC>```](DocumentCC.md) |   |  |
| `brandId` | ```string``` |   |  |
| `allowMessageEditing` | ```boolean``` |   |  [default to true] |
| `allowNewRoles` | ```boolean``` |   |  [default to true] |
| `allowNewFiles` | ```boolean``` |   |  [default to true] |
| `enableReassign` | ```boolean``` |   |  [default to true] |
| `enablePrintAndAssign` | ```boolean``` |   |  [default to false] |
| `enableSigningOrder` | ```boolean``` |   |  [default to false] |
| `documentInfo` | [```Array<DocumentInfo>```](DocumentInfo.md) |   |  |
| `useTextTags` | ```boolean``` |   |  [default to false] |
| `textTagDefinitions` | [```Array<TextTagDefinition>```](TextTagDefinition.md) |   |  |
| `autoDetectFields` | ```boolean``` |   |  [default to false] |
| `onBehalfOf` | ```string``` |   |  |
| `labels` | ```Array<string>``` |   |  |
| `templateLabels` | ```Array<string>``` |   |  |
| `formGroups` | [```Array<FormGroup>```](FormGroup.md) |   |  |

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
