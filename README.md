# boldsign

Easily integrate BoldSign's e-signature features into your Node.js applications. This package simplifies sending documents for signature, embedding signing ceremonies, tracking document status, downloading signed documents, and managing e-signature workflows.

## Prerequisites

* Node 12 or higher.
* Free [developer account](https://boldsign.com/esignature-api/)

## Documentation

* [Official API documentation](https://developers.boldsign.com/)

## Installation

```
npm install boldsign
```

## Getting Started

Please follow the [installation procedure](#installation) and then run the following:


### TypeScript Example

```typescript
import { DocumentApi } from 'boldsign';
import { DocumentSigner, FormField, Rectangle, SendForSign } from 'boldsign';
import * as fs from 'fs';

const documentApi = new DocumentApi();
documentApi.setApiKey('YOUR_API_KEY_HERE');

const bounds = new Rectangle();
bounds.x = 100;
bounds.y = 50;
bounds.width = 100;
bounds.height = 100;

const formField = new FormField();
formField.fieldType = FormField.FieldTypeEnum.Signature;
formField.pageNumber = 1;
formField.bounds = bounds;

const documentSigner = new DocumentSigner();
documentSigner.name = "David";
documentSigner.emailAddress = "david@example.com";
documentSigner.signerType = DocumentSigner.SignerTypeEnum.Signer;
documentSigner.formFields = [formField];

var files = fs.createReadStream("agreement.pdf");

const sendForSign = new SendForSign();
sendForSign.title = "Agreement";
sendForSign.signers = [documentSigner];
sendForSign.files = [files];

const sendDocumentResponse = await documentApi.sendDocument(sendForSign);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.boldsign.com*

| Class      | Method        | HTTP request  | Description   |
| ---------- | ------------- | ------------- | ------------- |
| *BrandingApi* | [**brandList**](./docs/BrandingApi.md#brandlist) | **GET** /v1/brand/list | List all the brands. |
| *BrandingApi* | [**createBrand**](./docs/BrandingApi.md#createbrand) | **POST** /v1/brand/create | Create the brand. |
| *BrandingApi* | [**deleteBrand**](./docs/BrandingApi.md#deletebrand) | **DELETE** /v1/brand/delete | Delete the brand. |
| *BrandingApi* | [**editBrand**](./docs/BrandingApi.md#editbrand) | **POST** /v1/brand/edit | Edit the brand. |
| *BrandingApi* | [**getBrand**](./docs/BrandingApi.md#getbrand) | **GET** /v1/brand/get | Get the specific brand details. |
| *BrandingApi* | [**resetDefaultBrand**](./docs/BrandingApi.md#resetdefaultbrand) | **POST** /v1/brand/resetdefault | Reset default brand. |
| *ContactsApi* | [**contactUserList**](./docs/ContactsApi.md#contactuserlist) | **GET** /v1/contacts/list | List Contact document. |
| *ContactsApi* | [**createContact**](./docs/ContactsApi.md#createcontact) | **POST** /v1/contacts/create | Create the new Contact. |
| *ContactsApi* | [**deleteContacts**](./docs/ContactsApi.md#deletecontacts) | **DELETE** /v1/contacts/delete | Deletes a contact. |
| *ContactsApi* | [**getContact**](./docs/ContactsApi.md#getcontact) | **GET** /v1/contacts/get | Get summary of the contact. |
| *ContactsApi* | [**updateContact**](./docs/ContactsApi.md#updatecontact) | **PUT** /v1/contacts/update | Update the contact. |
| *CustomFieldApi* | [**createCustomField**](./docs/CustomFieldApi.md#createcustomfield) | **POST** /v1/customField/create | Create the custom field. |
| *CustomFieldApi* | [**customFieldsList**](./docs/CustomFieldApi.md#customfieldslist) | **GET** /v1/customField/list | List the custom fields respective to the brand id. |
| *CustomFieldApi* | [**deleteCustomField**](./docs/CustomFieldApi.md#deletecustomfield) | **DELETE** /v1/customField/delete | Delete the custom field. |
| *CustomFieldApi* | [**editCustomField**](./docs/CustomFieldApi.md#editcustomfield) | **POST** /v1/customField/edit | Edit the custom field. |
| *CustomFieldApi* | [**embedCustomField**](./docs/CustomFieldApi.md#embedcustomfield) | **POST** /v1/customField/createEmbeddedCustomFieldUrl | Generates a URL for creating or modifying custom fields within your application\&#39;s embedded Designer. |
| *DocumentApi* | [**addAuthentication**](./docs/DocumentApi.md#addauthentication) | **PATCH** /v1/document/addAuthentication | The add authentication to recipient. |
| *DocumentApi* | [**addTag**](./docs/DocumentApi.md#addtag) | **PATCH** /v1/document/addTags | Add the Tags in Documents. |
| *DocumentApi* | [**behalfDocuments**](./docs/DocumentApi.md#behalfdocuments) | **GET** /v1/document/behalfList | Gets the behalf documents. |
| *DocumentApi* | [**changeAccessCode**](./docs/DocumentApi.md#changeaccesscode) | **PATCH** /v1/document/changeAccessCode | Changes the access code for the given document signer. |
| *DocumentApi* | [**changeRecipient**](./docs/DocumentApi.md#changerecipient) | **PATCH** /v1/document/changeRecipient | Change recipient details of a document. |
| *DocumentApi* | [**createEmbeddedEditUrl**](./docs/DocumentApi.md#createembeddedediturl) | **POST** /v1/document/createEmbeddedEditUrl | Generates an embedded edit URL that allows the document editing process to be integrated into your application. |
| *DocumentApi* | [**createEmbeddedRequestUrlDocument**](./docs/DocumentApi.md#createembeddedrequesturldocument) | **POST** /v1/document/createEmbeddedRequestUrl | Generates a send URL which embeds document sending process into your application. |
| *DocumentApi* | [**deleteDocument**](./docs/DocumentApi.md#deletedocument) | **DELETE** /v1/document/delete | Delete the document. |
| *DocumentApi* | [**deleteTag**](./docs/DocumentApi.md#deletetag) | **DELETE** /v1/document/deleteTags | Delete the Tags in Documents. |
| *DocumentApi* | [**downloadAttachment**](./docs/DocumentApi.md#downloadattachment) | **GET** /v1/document/downloadAttachment | Download the Attachment. |
| *DocumentApi* | [**downloadAuditLog**](./docs/DocumentApi.md#downloadauditlog) | **GET** /v1/document/downloadAuditLog | Download the audit trail document. |
| *DocumentApi* | [**downloadDocument**](./docs/DocumentApi.md#downloaddocument) | **GET** /v1/document/download | Download the document. |
| *DocumentApi* | [**draftSend**](./docs/DocumentApi.md#draftsend) | **POST** /v1/document/draftSend | Sends a draft-status document out for signature. |
| *DocumentApi* | [**editDocument**](./docs/DocumentApi.md#editdocument) | **PUT** /v1/document/edit | Edit and updates an existing document. |
| *DocumentApi* | [**extendExpiry**](./docs/DocumentApi.md#extendexpiry) | **PATCH** /v1/document/extendExpiry | Extends the expiration date of the document. |
| *DocumentApi* | [**getProperties**](./docs/DocumentApi.md#getproperties) | **GET** /v1/document/properties | Get summary of the document. |
| *DocumentApi* | [**getEmbeddedSignLink**](./docs/DocumentApi.md#getembeddedsignlink) | **GET** /v1/document/getEmbeddedSignLink | Get sign link for Embedded Sign. |
| *DocumentApi* | [**listDocuments**](./docs/DocumentApi.md#listdocuments) | **GET** /v1/document/list | List user documents. |
| *DocumentApi* | [**prefillFields**](./docs/DocumentApi.md#prefillfields) | **PATCH** /v1/document/prefillFields | Updates the value (prefill) of the fields in the document. |
| *DocumentApi* | [**remindDocument**](./docs/DocumentApi.md#reminddocument) | **POST** /v1/document/remind | Send reminder to pending signers. |
| *DocumentApi* | [**removeAuthentication**](./docs/DocumentApi.md#removeauthentication) | **PATCH** /v1/document/RemoveAuthentication | Remove the access code for the given document signer. |
| *DocumentApi* | [**revokeDocument**](./docs/DocumentApi.md#revokedocument) | **POST** /v1/document/revoke | Revoke the document. |
| *DocumentApi* | [**sendDocument**](./docs/DocumentApi.md#senddocument) | **POST** /v1/document/send | Sends the document for sign. |
| *DocumentApi* | [**teamDocuments**](./docs/DocumentApi.md#teamdocuments) | **GET** /v1/document/teamlist | Get user Team documents. |
| *GroupContactsApi* | [**createGroupContact**](./docs/GroupContactsApi.md#creategroupcontact) | **POST** /v1/contactGroups/create | Create a new Group Contact. |
| *GroupContactsApi* | [**deleteGroupContact**](./docs/GroupContactsApi.md#deletegroupcontact) | **DELETE** /v1/contactGroups/delete | Deletes a Group Contact. |
| *GroupContactsApi* | [**getGroupContact**](./docs/GroupContactsApi.md#getgroupcontact) | **GET** /v1/contactGroups/get | Get Summary of the Group Contact. |
| *GroupContactsApi* | [**groupContactList**](./docs/GroupContactsApi.md#groupcontactlist) | **GET** /v1/contactGroups/list | List Group Contacts. |
| *GroupContactsApi* | [**updateGroupContact**](./docs/GroupContactsApi.md#updategroupcontact) | **PUT** /v1/contactGroups/update | Update the Group Contact. |
| *IdentityVerificationApi* | [**createEmbeddedVerificationUrl**](./docs/IdentityVerificationApi.md#createembeddedverificationurl) | **POST** /v1/identityVerification/createEmbeddedVerificationUrl | Generate a URL that embeds manual ID verification for the specified document signer into your application. |
| *IdentityVerificationApi* | [**image**](./docs/IdentityVerificationApi.md#image) | **POST** /v1/identityVerification/image | Retrieve the uploaded ID verification document or selfie image for the specified document signer using the file ID. |
| *IdentityVerificationApi* | [**report**](./docs/IdentityVerificationApi.md#report) | **POST** /v1/identityVerification/report | Retrieve the ID verification report for the specified document signer. |
| *PlanApi* | [**apiCreditsCount**](./docs/PlanApi.md#apicreditscount) | **GET** /v1/plan/apiCreditsCount | Gets the Api credits details. |
| *SenderIdentitiesApi* | [**createSenderIdentities**](./docs/SenderIdentitiesApi.md#createsenderidentities) | **POST** /v1/senderIdentities/create | Creates sender identity. |
| *SenderIdentitiesApi* | [**deleteSenderIdentities**](./docs/SenderIdentitiesApi.md#deletesenderidentities) | **DELETE** /v1/senderIdentities/delete | Deletes sender identity. |
| *SenderIdentitiesApi* | [**getSenderIdentityProperties**](./docs/SenderIdentitiesApi.md#getsenderidentityproperties) | **GET** /v1/senderIdentities/properties | Gets sender identity by ID or email. |
| *SenderIdentitiesApi* | [**listSenderIdentities**](./docs/SenderIdentitiesApi.md#listsenderidentities) | **GET** /v1/senderIdentities/list | Lists sender identity. |
| *SenderIdentitiesApi* | [**reRequestSenderIdentities**](./docs/SenderIdentitiesApi.md#rerequestsenderidentities) | **POST** /v1/senderIdentities/rerequest | Rerequests denied sender identity. |
| *SenderIdentitiesApi* | [**resendInvitationSenderIdentities**](./docs/SenderIdentitiesApi.md#resendinvitationsenderidentities) | **POST** /v1/senderIdentities/resendInvitation | Resends sender identity invitation. |
| *SenderIdentitiesApi* | [**updateSenderIdentities**](./docs/SenderIdentitiesApi.md#updatesenderidentities) | **POST** /v1/senderIdentities/update | Updates sender identity. |
| *TeamsApi* | [**createTeam**](./docs/TeamsApi.md#createteam) | **POST** /v1/teams/create | Create Team. |
| *TeamsApi* | [**getTeam**](./docs/TeamsApi.md#getteam) | **GET** /v1/teams/get | Get Team details. |
| *TeamsApi* | [**listTeams**](./docs/TeamsApi.md#listteams) | **GET** /v1/teams/list | List Teams. |
| *TeamsApi* | [**updateTeam**](./docs/TeamsApi.md#updateteam) | **PUT** /v1/teams/update | Update Team. |
| *TemplateApi* | [**addTag**](./docs/TemplateApi.md#addtag) | **PATCH** /v1/template/addTags | Add the Tags in Templates. |
| *TemplateApi* | [**createEmbeddedPreviewUrl**](./docs/TemplateApi.md#createembeddedpreviewurl) | **POST** /v1/template/createEmbeddedPreviewUrl | Generates a preview URL for a template to view it. |
| *TemplateApi* | [**createEmbeddedRequestUrlTemplate**](./docs/TemplateApi.md#createembeddedrequesturltemplate) | **POST** /v1/template/createEmbeddedRequestUrl | Generates a send URL using a template which embeds document sending process into your application. |
| *TemplateApi* | [**createEmbeddedTemplateUrl**](./docs/TemplateApi.md#createembeddedtemplateurl) | **POST** /v1/template/createEmbeddedTemplateUrl | Generates a create URL to embeds template create process into your application. |
| *TemplateApi* | [**createTemplate**](./docs/TemplateApi.md#createtemplate) | **POST** /v1/template/create | Creates a new template. |
| *TemplateApi* | [**deleteTemplate**](./docs/TemplateApi.md#deletetemplate) | **DELETE** /v1/template/delete | Deletes a template. |
| *TemplateApi* | [**deleteTag**](./docs/TemplateApi.md#deletetag) | **DELETE** /v1/template/deleteTags | Delete the Tags in Templates. |
| *TemplateApi* | [**download**](./docs/TemplateApi.md#download) | **GET** /v1/template/download | Download the template. |
| *TemplateApi* | [**editTemplate**](./docs/TemplateApi.md#edittemplate) | **PUT** /v1/template/edit | Edit and updates an existing template. |
| *TemplateApi* | [**getEmbeddedTemplateEditUrl**](./docs/TemplateApi.md#getembeddedtemplateediturl) | **POST** /v1/template/getEmbeddedTemplateEditUrl | Generates a edit URL to embeds template edit process into your application. |
| *TemplateApi* | [**getProperties**](./docs/TemplateApi.md#getproperties) | **GET** /v1/template/properties | Get summary of the template. |
| *TemplateApi* | [**listTemplates**](./docs/TemplateApi.md#listtemplates) | **GET** /v1/template/list | List all the templates. |
| *TemplateApi* | [**mergeAndSend**](./docs/TemplateApi.md#mergeandsend) | **POST** /v1/template/mergeAndSend | Send the document by merging multiple templates. |
| *TemplateApi* | [**mergeCreateEmbeddedRequestUrlTemplate**](./docs/TemplateApi.md#mergecreateembeddedrequesturltemplate) | **POST** /v1/template/mergeCreateEmbeddedRequestUrl | Generates a merge request URL using a template that combines document merging and sending processes into your application. |
| *TemplateApi* | [**sendUsingTemplate**](./docs/TemplateApi.md#sendusingtemplate) | **POST** /v1/template/send | Send a document for signature using a Template. |
| *UserApi* | [**cancelInvitation**](./docs/UserApi.md#cancelinvitation) | **POST** /v1/users/cancelInvitation | Cancel the users invitation. |
| *UserApi* | [**changeTeam**](./docs/UserApi.md#changeteam) | **PUT** /v1/users/changeTeam | Change users to other team. |
| *UserApi* | [**createUser**](./docs/UserApi.md#createuser) | **POST** /v1/users/create | Create the user. |
| *UserApi* | [**getUser**](./docs/UserApi.md#getuser) | **GET** /v1/users/get | Get summary of the user. |
| *UserApi* | [**listUsers**](./docs/UserApi.md#listusers) | **GET** /v1/users/list | List user documents. |
| *UserApi* | [**resendInvitation**](./docs/UserApi.md#resendinvitation) | **POST** /v1/users/resendInvitation | Resend the users invitation. |
| *UserApi* | [**updateMetaData**](./docs/UserApi.md#updatemetadata) | **PUT** /v1/users/updateMetaData | Update new User meta data details. |
| *UserApi* | [**updateUser**](./docs/UserApi.md#updateuser) | **PUT** /v1/users/update | Update new User role. |

## Models

- [AccessCodeDetail](./docs/AccessCodeDetail.md)
- [AccessCodeDetails](./docs/AccessCodeDetails.md)
- [Added](./docs/Added.md)
- [Address](./docs/Address.md)
- [AttachmentInfo](./docs/AttachmentInfo.md)
- [AuditTrail](./docs/AuditTrail.md)
- [AuthenticationSettings](./docs/AuthenticationSettings.md)
- [Base64File](./docs/Base64File.md)
- [BehalfDocument](./docs/BehalfDocument.md)
- [BehalfDocumentRecords](./docs/BehalfDocumentRecords.md)
- [BehalfOf](./docs/BehalfOf.md)
- [BillingViewModel](./docs/BillingViewModel.md)
- [BrandCreated](./docs/BrandCreated.md)
- [BrandCustomFieldDetails](./docs/BrandCustomFieldDetails.md)
- [BrandingMessage](./docs/BrandingMessage.md)
- [BrandingRecords](./docs/BrandingRecords.md)
- [ChangeRecipient](./docs/ChangeRecipient.md)
- [ChangeTeamRequest](./docs/ChangeTeamRequest.md)
- [CollaborationSettings](./docs/CollaborationSettings.md)
- [ConditionalRule](./docs/ConditionalRule.md)
- [ContactCreated](./docs/ContactCreated.md)
- [ContactDetails](./docs/ContactDetails.md)
- [ContactPageDetails](./docs/ContactPageDetails.md)
- [ContactsDetails](./docs/ContactsDetails.md)
- [ContactsList](./docs/ContactsList.md)
- [CreateContactResponse](./docs/CreateContactResponse.md)
- [CreateGroupContactResponse](./docs/CreateGroupContactResponse.md)
- [CreateSenderIdentityRequest](./docs/CreateSenderIdentityRequest.md)
- [CreateTeamRequest](./docs/CreateTeamRequest.md)
- [CreateTemplateRequest](./docs/CreateTemplateRequest.md)
- [CreateUser](./docs/CreateUser.md)
- [Creators](./docs/Creators.md)
- [CustomDomainSettings](./docs/CustomDomainSettings.md)
- [CustomFieldCollection](./docs/CustomFieldCollection.md)
- [CustomFieldMessage](./docs/CustomFieldMessage.md)
- [CustomFormField](./docs/CustomFormField.md)
- [DeleteCustomFieldReply](./docs/DeleteCustomFieldReply.md)
- [Document](./docs/Document.md)
- [DocumentCC](./docs/DocumentCC.md)
- [DocumentCcDetails](./docs/DocumentCcDetails.md)
- [DocumentCreated](./docs/DocumentCreated.md)
- [DocumentEdited](./docs/DocumentEdited.md)
- [DocumentExpirySettings](./docs/DocumentExpirySettings.md)
- [DocumentFiles](./docs/DocumentFiles.md)
- [DocumentFormFields](./docs/DocumentFormFields.md)
- [DocumentInfo](./docs/DocumentInfo.md)
- [DocumentProperties](./docs/DocumentProperties.md)
- [DocumentReassign](./docs/DocumentReassign.md)
- [DocumentRecords](./docs/DocumentRecords.md)
- [DocumentSenderDetail](./docs/DocumentSenderDetail.md)
- [DocumentSigner](./docs/DocumentSigner.md)
- [DocumentSignerDetails](./docs/DocumentSignerDetails.md)
- [DocumentTags](./docs/DocumentTags.md)
- [DownloadImageRequest](./docs/DownloadImageRequest.md)
- [EditDocumentFile](./docs/EditDocumentFile.md)
- [EditDocumentRequest](./docs/EditDocumentRequest.md)
- [EditDocumentSigner](./docs/EditDocumentSigner.md)
- [EditFormField](./docs/EditFormField.md)
- [EditSenderIdentityRequest](./docs/EditSenderIdentityRequest.md)
- [EditTemplateRequest](./docs/EditTemplateRequest.md)
- [EditableDateFieldSettings](./docs/EditableDateFieldSettings.md)
- [EmbeddedCreateTemplateRequest](./docs/EmbeddedCreateTemplateRequest.md)
- [EmbeddedCustomFieldCreated](./docs/EmbeddedCustomFieldCreated.md)
- [EmbeddedDocumentEditJsonRequest](./docs/EmbeddedDocumentEditJsonRequest.md)
- [EmbeddedDocumentEdited](./docs/EmbeddedDocumentEdited.md)
- [EmbeddedDocumentRequest](./docs/EmbeddedDocumentRequest.md)
- [EmbeddedFileDetails](./docs/EmbeddedFileDetails.md)
- [EmbeddedFileLink](./docs/EmbeddedFileLink.md)
- [EmbeddedMergeTemplateFormRequest](./docs/EmbeddedMergeTemplateFormRequest.md)
- [EmbeddedSendCreated](./docs/EmbeddedSendCreated.md)
- [EmbeddedSendTemplateFormRequest](./docs/EmbeddedSendTemplateFormRequest.md)
- [EmbeddedSigningLink](./docs/EmbeddedSigningLink.md)
- [EmbeddedTemplateCreated](./docs/EmbeddedTemplateCreated.md)
- [EmbeddedTemplateEditRequest](./docs/EmbeddedTemplateEditRequest.md)
- [EmbeddedTemplateEdited](./docs/EmbeddedTemplateEdited.md)
- [EmbeddedTemplatePreview](./docs/EmbeddedTemplatePreview.md)
- [EmbeddedTemplatePreviewJsonRequest](./docs/EmbeddedTemplatePreviewJsonRequest.md)
- [ErrorResult](./docs/ErrorResult.md)
- [ExistingFormField](./docs/ExistingFormField.md)
- [ExtendExpiry](./docs/ExtendExpiry.md)
- [FileInfo](./docs/FileInfo.md)
- [Font](./docs/Font.md)
- [FormField](./docs/FormField.md)
- [FormFieldPermission](./docs/FormFieldPermission.md)
- [FormGroup](./docs/FormGroup.md)
- [FormulaFieldSettings](./docs/FormulaFieldSettings.md)
- [GetGroupContactDetails](./docs/GetGroupContactDetails.md)
- [GroupContact](./docs/GroupContact.md)
- [GroupContactDetails](./docs/GroupContactDetails.md)
- [GroupContactsList](./docs/GroupContactsList.md)
- [GroupSigner](./docs/GroupSigner.md)
- [GroupSignerSettings](./docs/GroupSignerSettings.md)
- [GroupUser](./docs/GroupUser.md)
- [IdDocument](./docs/IdDocument.md)
- [IdReport](./docs/IdReport.md)
- [IdVerificationDetails](./docs/IdVerificationDetails.md)
- [IdentityVerificationSettings](./docs/IdentityVerificationSettings.md)
- [ImageInfo](./docs/ImageInfo.md)
- [MergeAndSendForSignForm](./docs/MergeAndSendForSignForm.md)
- [ModelDate](./docs/ModelDate.md)
- [ModelError](./docs/ModelError.md)
- [ModificationDetails](./docs/ModificationDetails.md)
- [NotificationSettings](./docs/NotificationSettings.md)
- [PageDetails](./docs/PageDetails.md)
- [PhoneNumber](./docs/PhoneNumber.md)
- [PrefillField](./docs/PrefillField.md)
- [PrefillFieldRequest](./docs/PrefillFieldRequest.md)
- [RecipientChangeLog](./docs/RecipientChangeLog.md)
- [RecipientNotificationSettings](./docs/RecipientNotificationSettings.md)
- [Rectangle](./docs/Rectangle.md)
- [ReminderMessage](./docs/ReminderMessage.md)
- [ReminderSettings](./docs/ReminderSettings.md)
- [RemoveAuthentication](./docs/RemoveAuthentication.md)
- [Removed](./docs/Removed.md)
- [RevokeDocument](./docs/RevokeDocument.md)
- [Role](./docs/Role.md)
- [Roles](./docs/Roles.md)
- [SendForSign](./docs/SendForSign.md)
- [SendForSignFromTemplateForm](./docs/SendForSignFromTemplateForm.md)
- [SenderIdentityCreated](./docs/SenderIdentityCreated.md)
- [SenderIdentityList](./docs/SenderIdentityList.md)
- [SenderIdentityViewModel](./docs/SenderIdentityViewModel.md)
- [SignatureFrameSettings](./docs/SignatureFrameSettings.md)
- [SignerAuthenticationSettings](./docs/SignerAuthenticationSettings.md)
- [Size](./docs/Size.md)
- [TeamCreated](./docs/TeamCreated.md)
- [TeamDocumentRecords](./docs/TeamDocumentRecords.md)
- [TeamListResponse](./docs/TeamListResponse.md)
- [TeamPageDetails](./docs/TeamPageDetails.md)
- [TeamResponse](./docs/TeamResponse.md)
- [TeamUpdateRequest](./docs/TeamUpdateRequest.md)
- [TeamUsers](./docs/TeamUsers.md)
- [Teams](./docs/Teams.md)
- [Template](./docs/Template.md)
- [TemplateCC](./docs/TemplateCC.md)
- [TemplateCreated](./docs/TemplateCreated.md)
- [TemplateFiles](./docs/TemplateFiles.md)
- [TemplateFormFields](./docs/TemplateFormFields.md)
- [TemplateGroupSigner](./docs/TemplateGroupSigner.md)
- [TemplateProperties](./docs/TemplateProperties.md)
- [TemplateRecords](./docs/TemplateRecords.md)
- [TemplateRole](./docs/TemplateRole.md)
- [TemplateSenderDetail](./docs/TemplateSenderDetail.md)
- [TemplateSenderDetails](./docs/TemplateSenderDetails.md)
- [TemplateSharedTemplateDetail](./docs/TemplateSharedTemplateDetail.md)
- [TemplateSharing](./docs/TemplateSharing.md)
- [TemplateSignerDetails](./docs/TemplateSignerDetails.md)
- [TemplateTag](./docs/TemplateTag.md)
- [TemplateTeamShare](./docs/TemplateTeamShare.md)
- [TextTagDefinition](./docs/TextTagDefinition.md)
- [TextTagOffset](./docs/TextTagOffset.md)
- [UpdateGroupContact](./docs/UpdateGroupContact.md)
- [UpdateUser](./docs/UpdateUser.md)
- [UpdateUserMetaData](./docs/UpdateUserMetaData.md)
- [UserPageDetails](./docs/UserPageDetails.md)
- [UserProperties](./docs/UserProperties.md)
- [UserRecords](./docs/UserRecords.md)
- [UsersDetails](./docs/UsersDetails.md)
- [Validation](./docs/Validation.md)
- [VerificationDataRequest](./docs/VerificationDataRequest.md)
- [ViewBrandDetails](./docs/ViewBrandDetails.md)
- [ViewCustomFieldDetails](./docs/ViewCustomFieldDetails.md)

## Authorization

### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header



### X-API-KEY

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header



## Author



## About this package

This package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1`
- Build package: `org.openapitools.codegen.languages.TypeScriptNodeClientCodegen`