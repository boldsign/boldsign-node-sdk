import { AccessCodeDetail } from './accessCodeDetail';
import { AccessCodeDetails } from './accessCodeDetails';
import { Added } from './added';
import { Address } from './address';
import { AttachmentInfo } from './attachmentInfo';
import { AuditTrail } from './auditTrail';
import { AuthenticationSettings } from './authenticationSettings';
import { Base64File } from './base64File';
import { BehalfDocument } from './behalfDocument';
import { BehalfDocumentRecords } from './behalfDocumentRecords';
import { BehalfOf } from './behalfOf';
import { BillingViewModel } from './billingViewModel';
import { BrandCreated } from './brandCreated';
import { BrandCustomFieldDetails } from './brandCustomFieldDetails';
import { BrandingMessage } from './brandingMessage';
import { BrandingRecords } from './brandingRecords';
import { ChangeRecipient } from './changeRecipient';
import { ConditionalRule } from './conditionalRule';
import { ContactCreated } from './contactCreated';
import { ContactDetails } from './contactDetails';
import { ContactPageDetails } from './contactPageDetails';
import { ContactsDetails } from './contactsDetails';
import { ContactsList } from './contactsList';
import { CreateContactResponse } from './createContactResponse';
import { CreateSenderIdentityRequest } from './createSenderIdentityRequest';
import { CreateTeamRequest } from './createTeamRequest';
import { CreateTemplateRequest } from './createTemplateRequest';
import { CreateUser } from './createUser';
import { CustomDomainSettings } from './customDomainSettings';
import { CustomFieldCollection } from './customFieldCollection';
import { CustomFieldMessage } from './customFieldMessage';
import { CustomFormField } from './customFormField';
import { DeleteCustomFieldReply } from './deleteCustomFieldReply';
import { Document } from './document';
import { DocumentCC } from './documentCC';
import { DocumentCcDetails } from './documentCcDetails';
import { DocumentCcWebhookModel } from './documentCcWebhookModel';
import { DocumentCreated } from './documentCreated';
import { DocumentEvent } from './documentEvent';
import { DocumentExpirySettings } from './documentExpirySettings';
import { DocumentFiles } from './documentFiles';
import { DocumentFormFields } from './documentFormFields';
import { DocumentInfo } from './documentInfo';
import { DocumentProperties } from './documentProperties';
import { DocumentReassign } from './documentReassign';
import { DocumentRecords } from './documentRecords';
import { DocumentSender } from './documentSender';
import { DocumentSenderDetail } from './documentSenderDetail';
import { DocumentSigner } from './documentSigner';
import { DocumentSignerDetails } from './documentSignerDetails';
import { DocumentSignerWebhookModel } from './documentSignerWebhookModel';
import { DocumentTags } from './documentTags';
import { DownloadImageRequest } from './downloadImageRequest';
import { EditSenderIdentityRequest } from './editSenderIdentityRequest';
import { EditTemplateRequest } from './editTemplateRequest';
import { EditableDateFieldSettings } from './editableDateFieldSettings';
import { EmbeddedCreateTemplateRequest } from './embeddedCreateTemplateRequest';
import { EmbeddedCustomFieldCreated } from './embeddedCustomFieldCreated';
import { EmbeddedDocumentRequest } from './embeddedDocumentRequest';
import { EmbeddedFileDetails } from './embeddedFileDetails';
import { EmbeddedFileLink } from './embeddedFileLink';
import { EmbeddedMergeTemplateFormRequest } from './embeddedMergeTemplateFormRequest';
import { EmbeddedSendCreated } from './embeddedSendCreated';
import { EmbeddedSendTemplateFormRequest } from './embeddedSendTemplateFormRequest';
import { EmbeddedSigningLink } from './embeddedSigningLink';
import { EmbeddedTemplateCreated } from './embeddedTemplateCreated';
import { EmbeddedTemplateEditRequest } from './embeddedTemplateEditRequest';
import { EmbeddedTemplateEdited } from './embeddedTemplateEdited';
import { ErrorResult } from './errorResult';
import { ExistingFormField } from './existingFormField';
import { ExtendExpiry } from './extendExpiry';
import { FileInfo } from './fileInfo';
import { Font } from './font';
import { FormField } from './formField';
import { FormGroup } from './formGroup';
import { FormulaFieldSettings } from './formulaFieldSettings';
import { IWebhookData } from './iWebhookData';
import { IdDocument } from './idDocument';
import { IdReport } from './idReport';
import { IdVerification } from './idVerification';
import { IdentityVerificationEvent } from './identityVerificationEvent';
import { IdentityVerificationSettings } from './identityVerificationSettings';
import { ImageInfo } from './imageInfo';
import { MergeAndSendForSignForm } from './mergeAndSendForSignForm';
import { ModelDate } from './modelDate';
import { ModelError } from './modelError';
import { ModificationDetails } from './modificationDetails';
import { NotificationSettings } from './notificationSettings';
import { PageDetails } from './pageDetails';
import { PhoneNumber } from './phoneNumber';
import { PhoneNumberWebhookModel } from './phoneNumberWebhookModel';
import { PrefillField } from './prefillField';
import { PrefillFieldRequest } from './prefillFieldRequest';
import { RecipientChangeLog } from './recipientChangeLog';
import { RecipientNotificationSettings } from './recipientNotificationSettings';
import { Rectangle } from './rectangle';
import { ReminderMessage } from './reminderMessage';
import { ReminderSettings } from './reminderSettings';
import { RemoveAuthentication } from './removeAuthentication';
import { Removed } from './removed';
import { RevokeDocument } from './revokeDocument';
import { Role } from './role';
import { Roles } from './roles';
import { SendForSign } from './sendForSign';
import { SendForSignFromTemplateForm } from './sendForSignFromTemplateForm';
import { SenderIdentityCreated } from './senderIdentityCreated';
import { SenderIdentityEvent } from './senderIdentityEvent';
import { SenderIdentityList } from './senderIdentityList';
import { SenderIdentityViewModel } from './senderIdentityViewModel';
import { SignerAuthenticationSettings } from './signerAuthenticationSettings';
import { Size } from './size';
import { TeamCreated } from './teamCreated';
import { TeamDocumentRecords } from './teamDocumentRecords';
import { TeamListResponse } from './teamListResponse';
import { TeamPageDetails } from './teamPageDetails';
import { TeamResponse } from './teamResponse';
import { TeamUpdateRequest } from './teamUpdateRequest';
import { TeamUsers } from './teamUsers';
import { Teams } from './teams';
import { Template } from './template';
import { TemplateCC } from './templateCC';
import { TemplateCcWebhookModel } from './templateCcWebhookModel';
import { TemplateCreated } from './templateCreated';
import { TemplateEvent } from './templateEvent';
import { TemplateFormFields } from './templateFormFields';
import { TemplateProperties } from './templateProperties';
import { TemplateRecords } from './templateRecords';
import { TemplateRole } from './templateRole';
import { TemplateSender } from './templateSender';
import { TemplateSenderDetail } from './templateSenderDetail';
import { TemplateSenderDetails } from './templateSenderDetails';
import { TemplateSharedTemplateDetail } from './templateSharedTemplateDetail';
import { TemplateSigner } from './templateSigner';
import { TemplateSignerDetails } from './templateSignerDetails';
import { TemplateTag } from './templateTag';
import { TextTagDefinition } from './textTagDefinition';
import { TextTagOffset } from './textTagOffset';
import { UpdateUser } from './updateUser';
import { UpdateUserMetaData } from './updateUserMetaData';
import { UserPageDetails } from './userPageDetails';
import { UserProperties } from './userProperties';
import { UserRecords } from './userRecords';
import { UsersDetails } from './usersDetails';
import { Validation } from './validation';
import { VerificationDataRequest } from './verificationDataRequest';
import { ViewBrandDetails } from './viewBrandDetails';
import { ViewCustomFieldDetails } from './viewCustomFieldDetails';
import { WebhookEvent } from './webhookEvent';
import { WebhookEventData } from './webhookEventData';
import { WebhookEventMetadata } from './webhookEventMetadata';
import {
    RequestDetailedFile,
    RequestFile,
    AttributeTypeMap,
    ObjectSerializer,
    Authentication,
    HttpBasicAuth,
    HttpBearerAuth,
    ApiKeyAuth,
    OAuth,
    VoidAuth,
    Interceptor,
} from "./models";

export let enumsMap: {[index: string]: any} = {
        "AccessCodeDetail.AuthenticationTypeEnum": AccessCodeDetail.AuthenticationTypeEnum,
        "AuditTrail.ActionEnum": AuditTrail.ActionEnum,
        "AuthenticationSettings.AuthenticationFrequencyEnum": AuthenticationSettings.AuthenticationFrequencyEnum,
        "BehalfDocument.StatusEnum": BehalfDocument.StatusEnum,
        "CreateUser.UserRoleEnum": CreateUser.UserRoleEnum,
        "CustomFormField.FieldTypeEnum": CustomFormField.FieldTypeEnum,
        "CustomFormField.FontEnum": CustomFormField.FontEnum,
        "CustomFormField.ValidationTypeEnum": CustomFormField.ValidationTypeEnum,
        "CustomFormField.TextAlignEnum": CustomFormField.TextAlignEnum,
        "CustomFormField.TextDirectionEnum": CustomFormField.TextDirectionEnum,
        "CustomFormField.ResizeOptionEnum": CustomFormField.ResizeOptionEnum,
        "Document.StatusEnum": Document.StatusEnum,
        "DocumentEvent.StatusEnum": DocumentEvent.StatusEnum,
        "DocumentExpirySettings.ExpiryDateTypeEnum": DocumentExpirySettings.ExpiryDateTypeEnum,
        "DocumentFormFields.ValidationtypeEnum": DocumentFormFields.ValidationtypeEnum,
        "DocumentFormFields.TextAlignEnum": DocumentFormFields.TextAlignEnum,
        "DocumentFormFields.TextDirectionEnum": DocumentFormFields.TextDirectionEnum,
        "DocumentFormFields.ResizeOptionEnum": DocumentFormFields.ResizeOptionEnum,
        "DocumentInfo.LocaleEnum": DocumentInfo.LocaleEnum,
        "DocumentInfo.LanguageEnum": DocumentInfo.LanguageEnum,
        "DocumentProperties.StatusEnum": DocumentProperties.StatusEnum,
        "DocumentProperties.ActivityActionEnum": DocumentProperties.ActivityActionEnum,
        "DocumentProperties.ExpiryDateTypeEnum": DocumentProperties.ExpiryDateTypeEnum,
        "DocumentProperties.DocumentDownloadOptionEnum": DocumentProperties.DocumentDownloadOptionEnum,
        "DocumentSigner.AuthenticationTypeEnum": DocumentSigner.AuthenticationTypeEnum,
        "DocumentSigner.DeliveryModeEnum": DocumentSigner.DeliveryModeEnum,
        "DocumentSigner.SignerTypeEnum": DocumentSigner.SignerTypeEnum,
        "DocumentSigner.LanguageEnum": DocumentSigner.LanguageEnum,
        "DocumentSigner.LocaleEnum": DocumentSigner.LocaleEnum,
        "DocumentSignerDetails.StatusEnum": DocumentSignerDetails.StatusEnum,
        "DocumentSignerDetails.AuthenticationTypeEnum": DocumentSignerDetails.AuthenticationTypeEnum,
        "DocumentSignerDetails.SignerTypeEnum": DocumentSignerDetails.SignerTypeEnum,
        "DocumentSignerDetails.LanguageEnum": DocumentSignerDetails.LanguageEnum,
        "DocumentSignerDetails.LocaleEnum": DocumentSignerDetails.LocaleEnum,
        "DocumentSignerDetails.DeliveryModeEnum": DocumentSignerDetails.DeliveryModeEnum,
        "DocumentSignerWebhookModel.StatusEnum": DocumentSignerWebhookModel.StatusEnum,
        "EmbeddedCreateTemplateRequest.ViewOptionEnum": EmbeddedCreateTemplateRequest.ViewOptionEnum,
        "EmbeddedCreateTemplateRequest.LocaleEnum": EmbeddedCreateTemplateRequest.LocaleEnum,
        "EmbeddedDocumentRequest.SendViewOptionEnum": EmbeddedDocumentRequest.SendViewOptionEnum,
        "EmbeddedDocumentRequest.LocaleEnum": EmbeddedDocumentRequest.LocaleEnum,
        "EmbeddedDocumentRequest.ExpiryDateTypeEnum": EmbeddedDocumentRequest.ExpiryDateTypeEnum,
        "EmbeddedDocumentRequest.DocumentDownloadOptionEnum": EmbeddedDocumentRequest.DocumentDownloadOptionEnum,
        "EmbeddedMergeTemplateFormRequest.SendViewOptionEnum": EmbeddedMergeTemplateFormRequest.SendViewOptionEnum,
        "EmbeddedMergeTemplateFormRequest.LocaleEnum": EmbeddedMergeTemplateFormRequest.LocaleEnum,
        "EmbeddedMergeTemplateFormRequest.ExpiryDateTypeEnum": EmbeddedMergeTemplateFormRequest.ExpiryDateTypeEnum,
        "EmbeddedMergeTemplateFormRequest.DocumentDownloadOptionEnum": EmbeddedMergeTemplateFormRequest.DocumentDownloadOptionEnum,
        "EmbeddedSendTemplateFormRequest.SendViewOptionEnum": EmbeddedSendTemplateFormRequest.SendViewOptionEnum,
        "EmbeddedSendTemplateFormRequest.LocaleEnum": EmbeddedSendTemplateFormRequest.LocaleEnum,
        "EmbeddedSendTemplateFormRequest.ExpiryDateTypeEnum": EmbeddedSendTemplateFormRequest.ExpiryDateTypeEnum,
        "EmbeddedSendTemplateFormRequest.DocumentDownloadOptionEnum": EmbeddedSendTemplateFormRequest.DocumentDownloadOptionEnum,
        "EmbeddedTemplateEditRequest.ViewOptionEnum": EmbeddedTemplateEditRequest.ViewOptionEnum,
        "EmbeddedTemplateEditRequest.LocaleEnum": EmbeddedTemplateEditRequest.LocaleEnum,
        "Font.NameEnum": Font.NameEnum,
        "Font.StyleEnum": Font.StyleEnum,
        "FormField.FieldTypeEnum": FormField.FieldTypeEnum,
        "FormField.FontEnum": FormField.FontEnum,
        "FormField.ValidationTypeEnum": FormField.ValidationTypeEnum,
        "FormField.TextAlignEnum": FormField.TextAlignEnum,
        "FormField.TextDirectionEnum": FormField.TextDirectionEnum,
        "FormField.ResizeOptionEnum": FormField.ResizeOptionEnum,
        "FormGroup.GroupValidationEnum": FormGroup.GroupValidationEnum,
        "IdentityVerificationEvent.StatusEnum": IdentityVerificationEvent.StatusEnum,
        "IdentityVerificationSettings.TypeEnum": IdentityVerificationSettings.TypeEnum,
        "IdentityVerificationSettings.NameMatcherEnum": IdentityVerificationSettings.NameMatcherEnum,
        "MergeAndSendForSignForm.ExpiryDateTypeEnum": MergeAndSendForSignForm.ExpiryDateTypeEnum,
        "MergeAndSendForSignForm.DocumentDownloadOptionEnum": MergeAndSendForSignForm.DocumentDownloadOptionEnum,
        "Role.AuthenticationTypeEnum": Role.AuthenticationTypeEnum,
        "Role.DeliveryModeEnum": Role.DeliveryModeEnum,
        "Role.SignerTypeEnum": Role.SignerTypeEnum,
        "Role.LanguageEnum": Role.LanguageEnum,
        "Role.LocaleEnum": Role.LocaleEnum,
        "Roles.SignerTypeEnum": Roles.SignerTypeEnum,
        "Roles.LanguageEnum": Roles.LanguageEnum,
        "Roles.LocaleEnum": Roles.LocaleEnum,
        "Roles.ImposeAuthenticationEnum": Roles.ImposeAuthenticationEnum,
        "Roles.DeliveryModeEnum": Roles.DeliveryModeEnum,
        "SendForSign.ExpiryDateTypeEnum": SendForSign.ExpiryDateTypeEnum,
        "SendForSign.DocumentDownloadOptionEnum": SendForSign.DocumentDownloadOptionEnum,
        "SendForSignFromTemplateForm.ExpiryDateTypeEnum": SendForSignFromTemplateForm.ExpiryDateTypeEnum,
        "SendForSignFromTemplateForm.DocumentDownloadOptionEnum": SendForSignFromTemplateForm.DocumentDownloadOptionEnum,
        "TeamUsers.UserRoleEnum": TeamUsers.UserRoleEnum,
        "TeamUsers.UserStatusEnum": TeamUsers.UserStatusEnum,
        "Template.StatusEnum": Template.StatusEnum,
        "Template.AccessTypeEnum": Template.AccessTypeEnum,
        "TemplateEvent.StatusEnum": TemplateEvent.StatusEnum,
        "TemplateFormFields.ValidationtypeEnum": TemplateFormFields.ValidationtypeEnum,
        "TemplateFormFields.TextAlignEnum": TemplateFormFields.TextAlignEnum,
        "TemplateFormFields.TextDirectionEnum": TemplateFormFields.TextDirectionEnum,
        "TemplateFormFields.ResizeOptionEnum": TemplateFormFields.ResizeOptionEnum,
        "TemplateProperties.DocumentDownloadOptionEnum": TemplateProperties.DocumentDownloadOptionEnum,
        "TemplateRole.SignerTypeEnum": TemplateRole.SignerTypeEnum,
        "TemplateRole.LanguageEnum": TemplateRole.LanguageEnum,
        "TemplateRole.LocaleEnum": TemplateRole.LocaleEnum,
        "TemplateRole.ImposeAuthenticationEnum": TemplateRole.ImposeAuthenticationEnum,
        "TemplateRole.DeliveryModeEnum": TemplateRole.DeliveryModeEnum,
        "TemplateSharedTemplateDetail.AccessTypeEnum": TemplateSharedTemplateDetail.AccessTypeEnum,
        "TemplateSigner.StatusEnum": TemplateSigner.StatusEnum,
        "TemplateSignerDetails.StatusEnum": TemplateSignerDetails.StatusEnum,
        "TemplateSignerDetails.ImposeAuthenticationEnum": TemplateSignerDetails.ImposeAuthenticationEnum,
        "TemplateSignerDetails.DeliveryModeEnum": TemplateSignerDetails.DeliveryModeEnum,
        "TemplateSignerDetails.SignerTypeEnum": TemplateSignerDetails.SignerTypeEnum,
        "TemplateSignerDetails.SignTypeEnum": TemplateSignerDetails.SignTypeEnum,
        "TextTagDefinition.TypeEnum": TextTagDefinition.TypeEnum,
        "TextTagDefinition.TextAlignEnum": TextTagDefinition.TextAlignEnum,
        "TextTagDefinition.TextDirectionEnum": TextTagDefinition.TextDirectionEnum,
        "TextTagDefinition.ResizeOptionEnum": TextTagDefinition.ResizeOptionEnum,
        "UpdateUser.UserRoleEnum": UpdateUser.UserRoleEnum,
        "UpdateUser.UserStatusEnum": UpdateUser.UserStatusEnum,
        "Validation.TypeEnum": Validation.TypeEnum,
        "ViewBrandDetails.EmailSignedDocumentEnum": ViewBrandDetails.EmailSignedDocumentEnum,
        "WebhookEventData.StatusEnum": WebhookEventData.StatusEnum,
        "WebhookEventMetadata.EventTypeEnum": WebhookEventMetadata.EventTypeEnum,
        "WebhookEventMetadata.EnvironmentEnum": WebhookEventMetadata.EnvironmentEnum,
}

export let typeMap: {[index: string]: any} = {
    "AccessCodeDetail": AccessCodeDetail,
    "AccessCodeDetails": AccessCodeDetails,
    "Added": Added,
    "Address": Address,
    "AttachmentInfo": AttachmentInfo,
    "AuditTrail": AuditTrail,
    "AuthenticationSettings": AuthenticationSettings,
    "Base64File": Base64File,
    "BehalfDocument": BehalfDocument,
    "BehalfDocumentRecords": BehalfDocumentRecords,
    "BehalfOf": BehalfOf,
    "BillingViewModel": BillingViewModel,
    "BrandCreated": BrandCreated,
    "BrandCustomFieldDetails": BrandCustomFieldDetails,
    "BrandingMessage": BrandingMessage,
    "BrandingRecords": BrandingRecords,
    "ChangeRecipient": ChangeRecipient,
    "ConditionalRule": ConditionalRule,
    "ContactCreated": ContactCreated,
    "ContactDetails": ContactDetails,
    "ContactPageDetails": ContactPageDetails,
    "ContactsDetails": ContactsDetails,
    "ContactsList": ContactsList,
    "CreateContactResponse": CreateContactResponse,
    "CreateSenderIdentityRequest": CreateSenderIdentityRequest,
    "CreateTeamRequest": CreateTeamRequest,
    "CreateTemplateRequest": CreateTemplateRequest,
    "CreateUser": CreateUser,
    "CustomDomainSettings": CustomDomainSettings,
    "CustomFieldCollection": CustomFieldCollection,
    "CustomFieldMessage": CustomFieldMessage,
    "CustomFormField": CustomFormField,
    "DeleteCustomFieldReply": DeleteCustomFieldReply,
    "Document": Document,
    "DocumentCC": DocumentCC,
    "DocumentCcDetails": DocumentCcDetails,
    "DocumentCcWebhookModel": DocumentCcWebhookModel,
    "DocumentCreated": DocumentCreated,
    "DocumentEvent": DocumentEvent,
    "DocumentExpirySettings": DocumentExpirySettings,
    "DocumentFiles": DocumentFiles,
    "DocumentFormFields": DocumentFormFields,
    "DocumentInfo": DocumentInfo,
    "DocumentProperties": DocumentProperties,
    "DocumentReassign": DocumentReassign,
    "DocumentRecords": DocumentRecords,
    "DocumentSender": DocumentSender,
    "DocumentSenderDetail": DocumentSenderDetail,
    "DocumentSigner": DocumentSigner,
    "DocumentSignerDetails": DocumentSignerDetails,
    "DocumentSignerWebhookModel": DocumentSignerWebhookModel,
    "DocumentTags": DocumentTags,
    "DownloadImageRequest": DownloadImageRequest,
    "EditSenderIdentityRequest": EditSenderIdentityRequest,
    "EditTemplateRequest": EditTemplateRequest,
    "EditableDateFieldSettings": EditableDateFieldSettings,
    "EmbeddedCreateTemplateRequest": EmbeddedCreateTemplateRequest,
    "EmbeddedCustomFieldCreated": EmbeddedCustomFieldCreated,
    "EmbeddedDocumentRequest": EmbeddedDocumentRequest,
    "EmbeddedFileDetails": EmbeddedFileDetails,
    "EmbeddedFileLink": EmbeddedFileLink,
    "EmbeddedMergeTemplateFormRequest": EmbeddedMergeTemplateFormRequest,
    "EmbeddedSendCreated": EmbeddedSendCreated,
    "EmbeddedSendTemplateFormRequest": EmbeddedSendTemplateFormRequest,
    "EmbeddedSigningLink": EmbeddedSigningLink,
    "EmbeddedTemplateCreated": EmbeddedTemplateCreated,
    "EmbeddedTemplateEditRequest": EmbeddedTemplateEditRequest,
    "EmbeddedTemplateEdited": EmbeddedTemplateEdited,
    "ErrorResult": ErrorResult,
    "ExistingFormField": ExistingFormField,
    "ExtendExpiry": ExtendExpiry,
    "FileInfo": FileInfo,
    "Font": Font,
    "FormField": FormField,
    "FormGroup": FormGroup,
    "FormulaFieldSettings": FormulaFieldSettings,
    "IWebhookData": IWebhookData,
    "IdDocument": IdDocument,
    "IdReport": IdReport,
    "IdVerification": IdVerification,
    "IdentityVerificationEvent": IdentityVerificationEvent,
    "IdentityVerificationSettings": IdentityVerificationSettings,
    "ImageInfo": ImageInfo,
    "MergeAndSendForSignForm": MergeAndSendForSignForm,
    "ModelDate": ModelDate,
    "ModelError": ModelError,
    "ModificationDetails": ModificationDetails,
    "NotificationSettings": NotificationSettings,
    "PageDetails": PageDetails,
    "PhoneNumber": PhoneNumber,
    "PhoneNumberWebhookModel": PhoneNumberWebhookModel,
    "PrefillField": PrefillField,
    "PrefillFieldRequest": PrefillFieldRequest,
    "RecipientChangeLog": RecipientChangeLog,
    "RecipientNotificationSettings": RecipientNotificationSettings,
    "Rectangle": Rectangle,
    "ReminderMessage": ReminderMessage,
    "ReminderSettings": ReminderSettings,
    "RemoveAuthentication": RemoveAuthentication,
    "Removed": Removed,
    "RevokeDocument": RevokeDocument,
    "Role": Role,
    "Roles": Roles,
    "SendForSign": SendForSign,
    "SendForSignFromTemplateForm": SendForSignFromTemplateForm,
    "SenderIdentityCreated": SenderIdentityCreated,
    "SenderIdentityEvent": SenderIdentityEvent,
    "SenderIdentityList": SenderIdentityList,
    "SenderIdentityViewModel": SenderIdentityViewModel,
    "SignerAuthenticationSettings": SignerAuthenticationSettings,
    "Size": Size,
    "TeamCreated": TeamCreated,
    "TeamDocumentRecords": TeamDocumentRecords,
    "TeamListResponse": TeamListResponse,
    "TeamPageDetails": TeamPageDetails,
    "TeamResponse": TeamResponse,
    "TeamUpdateRequest": TeamUpdateRequest,
    "TeamUsers": TeamUsers,
    "Teams": Teams,
    "Template": Template,
    "TemplateCC": TemplateCC,
    "TemplateCcWebhookModel": TemplateCcWebhookModel,
    "TemplateCreated": TemplateCreated,
    "TemplateEvent": TemplateEvent,
    "TemplateFormFields": TemplateFormFields,
    "TemplateProperties": TemplateProperties,
    "TemplateRecords": TemplateRecords,
    "TemplateRole": TemplateRole,
    "TemplateSender": TemplateSender,
    "TemplateSenderDetail": TemplateSenderDetail,
    "TemplateSenderDetails": TemplateSenderDetails,
    "TemplateSharedTemplateDetail": TemplateSharedTemplateDetail,
    "TemplateSigner": TemplateSigner,
    "TemplateSignerDetails": TemplateSignerDetails,
    "TemplateTag": TemplateTag,
    "TextTagDefinition": TextTagDefinition,
    "TextTagOffset": TextTagOffset,
    "UpdateUser": UpdateUser,
    "UpdateUserMetaData": UpdateUserMetaData,
    "UserPageDetails": UserPageDetails,
    "UserProperties": UserProperties,
    "UserRecords": UserRecords,
    "UsersDetails": UsersDetails,
    "Validation": Validation,
    "VerificationDataRequest": VerificationDataRequest,
    "ViewBrandDetails": ViewBrandDetails,
    "ViewCustomFieldDetails": ViewCustomFieldDetails,
    "WebhookEvent": WebhookEvent,
    "WebhookEventData": WebhookEventData,
    "WebhookEventMetadata": WebhookEventMetadata,
}

export {
    AccessCodeDetail,
    AccessCodeDetails,
    Added,
    Address,
    AttachmentInfo,
    AuditTrail,
    AuthenticationSettings,
    Base64File,
    BehalfDocument,
    BehalfDocumentRecords,
    BehalfOf,
    BillingViewModel,
    BrandCreated,
    BrandCustomFieldDetails,
    BrandingMessage,
    BrandingRecords,
    ChangeRecipient,
    ConditionalRule,
    ContactCreated,
    ContactDetails,
    ContactPageDetails,
    ContactsDetails,
    ContactsList,
    CreateContactResponse,
    CreateSenderIdentityRequest,
    CreateTeamRequest,
    CreateTemplateRequest,
    CreateUser,
    CustomDomainSettings,
    CustomFieldCollection,
    CustomFieldMessage,
    CustomFormField,
    DeleteCustomFieldReply,
    Document,
    DocumentCC,
    DocumentCcDetails,
    DocumentCcWebhookModel,
    DocumentCreated,
    DocumentEvent,
    DocumentExpirySettings,
    DocumentFiles,
    DocumentFormFields,
    DocumentInfo,
    DocumentProperties,
    DocumentReassign,
    DocumentRecords,
    DocumentSender,
    DocumentSenderDetail,
    DocumentSigner,
    DocumentSignerDetails,
    DocumentSignerWebhookModel,
    DocumentTags,
    DownloadImageRequest,
    EditSenderIdentityRequest,
    EditTemplateRequest,
    EditableDateFieldSettings,
    EmbeddedCreateTemplateRequest,
    EmbeddedCustomFieldCreated,
    EmbeddedDocumentRequest,
    EmbeddedFileDetails,
    EmbeddedFileLink,
    EmbeddedMergeTemplateFormRequest,
    EmbeddedSendCreated,
    EmbeddedSendTemplateFormRequest,
    EmbeddedSigningLink,
    EmbeddedTemplateCreated,
    EmbeddedTemplateEditRequest,
    EmbeddedTemplateEdited,
    ErrorResult,
    ExistingFormField,
    ExtendExpiry,
    FileInfo,
    Font,
    FormField,
    FormGroup,
    FormulaFieldSettings,
    IWebhookData,
    IdDocument,
    IdReport,
    IdVerification,
    IdentityVerificationEvent,
    IdentityVerificationSettings,
    ImageInfo,
    MergeAndSendForSignForm,
    ModelDate,
    ModelError,
    ModificationDetails,
    NotificationSettings,
    PageDetails,
    PhoneNumber,
    PhoneNumberWebhookModel,
    PrefillField,
    PrefillFieldRequest,
    RecipientChangeLog,
    RecipientNotificationSettings,
    Rectangle,
    ReminderMessage,
    ReminderSettings,
    RemoveAuthentication,
    Removed,
    RevokeDocument,
    Role,
    Roles,
    SendForSign,
    SendForSignFromTemplateForm,
    SenderIdentityCreated,
    SenderIdentityEvent,
    SenderIdentityList,
    SenderIdentityViewModel,
    SignerAuthenticationSettings,
    Size,
    TeamCreated,
    TeamDocumentRecords,
    TeamListResponse,
    TeamPageDetails,
    TeamResponse,
    TeamUpdateRequest,
    TeamUsers,
    Teams,
    Template,
    TemplateCC,
    TemplateCcWebhookModel,
    TemplateCreated,
    TemplateEvent,
    TemplateFormFields,
    TemplateProperties,
    TemplateRecords,
    TemplateRole,
    TemplateSender,
    TemplateSenderDetail,
    TemplateSenderDetails,
    TemplateSharedTemplateDetail,
    TemplateSigner,
    TemplateSignerDetails,
    TemplateTag,
    TextTagDefinition,
    TextTagOffset,
    UpdateUser,
    UpdateUserMetaData,
    UserPageDetails,
    UserProperties,
    UserRecords,
    UsersDetails,
    Validation,
    VerificationDataRequest,
    ViewBrandDetails,
    ViewCustomFieldDetails,
    WebhookEvent,
    WebhookEventData,
    WebhookEventMetadata,
    RequestDetailedFile,
    RequestFile,
    AttributeTypeMap,
    ObjectSerializer,
    Authentication,
    HttpBasicAuth,
    HttpBearerAuth,
    ApiKeyAuth,
    OAuth,
    VoidAuth,
    Interceptor,
};
