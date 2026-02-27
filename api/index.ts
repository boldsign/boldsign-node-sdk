import { BrandingApi } from './brandingApi';
import { ContactsApi } from './contactsApi';
import { CustomFieldApi } from './customFieldApi';
import { DocumentApi } from './documentApi';
import { GroupContactsApi } from './groupContactsApi';
import { IdentityVerificationApi } from './identityVerificationApi';
import { PlanApi } from './planApi';
import { SenderIdentitiesApi } from './senderIdentitiesApi';
import { TeamsApi } from './teamsApi';
import { TemplateApi } from './templateApi';
import { UserApi } from './userApi';

export {
    BrandingApi,
    ContactsApi,
    CustomFieldApi,
    DocumentApi,
    GroupContactsApi,
    IdentityVerificationApi,
    PlanApi,
    SenderIdentitiesApi,
    TeamsApi,
    TemplateApi,
    UserApi,
};

export {
    HttpError,
    optionsI,
    returnTypeT,
    returnTypeI,
    generateFormData,
    toFormData,
    queryParamsSerializer,
    USER_AGENT,
} from "./apis";

export const APIS = [BrandingApi, ContactsApi, CustomFieldApi, DocumentApi, GroupContactsApi, IdentityVerificationApi, PlanApi, SenderIdentitiesApi, TeamsApi, TemplateApi, UserApi];
