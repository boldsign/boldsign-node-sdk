# # DocumentSignerDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `id` | ```string``` |   |  |
| `signerName` | ```string``` |   |  |
| `signerRole` | ```string``` |   |  |
| `signerEmail` | ```string``` |   |  |
| `status` | ```string``` |   |  |
| `enableAccessCode` | ```boolean``` |   |  |
| `isAuthenticationFailed` | ```boolean``` |   |  [default to false] |
| `enableEmailOTP` | ```boolean``` |   |  |
| `authenticationType` | ```string``` |   |  |
| `isDeliveryFailed` | ```boolean``` |   |  [default to false] |
| `isViewed` | ```boolean``` |   |  [default to false] |
| `order` | ```number``` |   |  [default to 0] |
| `signerType` | ```string``` |   |  [default to SignerTypeEnum.Signer] |
| `hostEmail` | ```string``` |   |  |
| `hostName` | ```string``` |   |  |
| `isReassigned` | ```boolean``` |   |  |
| `privateMessage` | ```string``` |   |  |
| `allowFieldConfiguration` | ```boolean``` |   |  |
| `formFields` | [```Array<DocumentFormFields>```](DocumentFormFields.md) |   |  |
| `language` | ```number``` |  &lt;p&gt;Description:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;i&gt;0&lt;/i&gt; - None&lt;/li&gt;&lt;li&gt;&lt;i&gt;1&lt;/i&gt; - English&lt;/li&gt;&lt;li&gt;&lt;i&gt;2&lt;/i&gt; - Spanish&lt;/li&gt;&lt;li&gt;&lt;i&gt;3&lt;/i&gt; - German&lt;/li&gt;&lt;li&gt;&lt;i&gt;4&lt;/i&gt; - French&lt;/li&gt;&lt;li&gt;&lt;i&gt;5&lt;/i&gt; - Romanian&lt;/li&gt;&lt;li&gt;&lt;i&gt;6&lt;/i&gt; - Norwegian&lt;/li&gt;&lt;li&gt;&lt;i&gt;7&lt;/i&gt; - Bulgarian&lt;/li&gt;&lt;li&gt;&lt;i&gt;8&lt;/i&gt; - Italian&lt;/li&gt;&lt;li&gt;&lt;i&gt;9&lt;/i&gt; - Danish&lt;/li&gt;&lt;li&gt;&lt;i&gt;10&lt;/i&gt; - Polish&lt;/li&gt;&lt;li&gt;&lt;i&gt;11&lt;/i&gt; - Portuguese&lt;/li&gt;&lt;li&gt;&lt;i&gt;12&lt;/i&gt; - Czech&lt;/li&gt;&lt;li&gt;&lt;i&gt;13&lt;/i&gt; - Dutch&lt;/li&gt;&lt;li&gt;&lt;i&gt;14&lt;/i&gt; - Swedish&lt;/li&gt;&lt;li&gt;&lt;i&gt;15&lt;/i&gt; - Russian&lt;/li&gt;&lt;li&gt;&lt;i&gt;16&lt;/i&gt; - Japanese&lt;/li&gt;&lt;li&gt;&lt;i&gt;17&lt;/i&gt; - Thai&lt;/li&gt;&lt;li&gt;&lt;i&gt;18&lt;/i&gt; - SimplifiedChinese&lt;/li&gt;&lt;li&gt;&lt;i&gt;19&lt;/i&gt; - TraditionalChinese&lt;/li&gt;&lt;li&gt;&lt;i&gt;20&lt;/i&gt; - Korean&lt;/li&gt;&lt;/ul&gt; |  |
| `locale` | ```string``` |   |  |
| `signType` | ```string``` |   |  [default to SignTypeEnum.Single] |
| `groupId` | ```string``` |   |  |
| `phoneNumber` | [```PhoneNumber```](PhoneNumber.md) |   |  |
| `idVerification` | [```IdVerificationDetails```](IdVerificationDetails.md) |   |  |
| `recipientNotificationSettings` | [```RecipientNotificationSettings```](RecipientNotificationSettings.md) |   |  |
| `authenticationRetryCount` | ```number``` |   |  |
| `enableQes` | ```boolean``` |   |  |
| `deliveryMode` | ```string``` |   |  |
| `authenticationSettings` | [```SignerAuthenticationSettings```](SignerAuthenticationSettings.md) |   |  |
| `groupSigners` | [```Array<GroupSigner>```](GroupSigner.md) |   |  |

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
