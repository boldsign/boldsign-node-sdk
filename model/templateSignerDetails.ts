/**
 * BoldSign API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PhoneNumber } from './phoneNumber';

export class TemplateSignerDetails {
    'signerName'?: string | null;
    'signerRole'?: string | null;
    'signerEmail'?: string | null;
    'phoneNumber'?: PhoneNumber;
    'status'?: TemplateSignerDetails.StatusEnum;
    'enableAccessCode'?: boolean;
    'enableEmailOTP'?: boolean;
    'imposeAuthentication'?: TemplateSignerDetails.ImposeAuthenticationEnum;
    'deliveryMode'?: TemplateSignerDetails.DeliveryModeEnum;
    'allowFieldConfiguration'?: boolean = false;
    'userId'?: string | null;
    'order'?: number;
    'signerType'?: TemplateSignerDetails.SignerTypeEnum = TemplateSignerDetails.SignerTypeEnum.Signer;
    'hostEmail'?: string | null;
    'hostName'?: string | null;
    'hostUserId'?: string | null;
    'signType'?: TemplateSignerDetails.SignTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signerName",
            "baseName": "signerName",
            "type": "string"
        },
        {
            "name": "signerRole",
            "baseName": "signerRole",
            "type": "string"
        },
        {
            "name": "signerEmail",
            "baseName": "signerEmail",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "PhoneNumber"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TemplateSignerDetails.StatusEnum"
        },
        {
            "name": "enableAccessCode",
            "baseName": "enableAccessCode",
            "type": "boolean"
        },
        {
            "name": "enableEmailOTP",
            "baseName": "enableEmailOTP",
            "type": "boolean"
        },
        {
            "name": "imposeAuthentication",
            "baseName": "imposeAuthentication",
            "type": "TemplateSignerDetails.ImposeAuthenticationEnum"
        },
        {
            "name": "deliveryMode",
            "baseName": "deliveryMode",
            "type": "TemplateSignerDetails.DeliveryModeEnum"
        },
        {
            "name": "allowFieldConfiguration",
            "baseName": "allowFieldConfiguration",
            "type": "boolean"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        },
        {
            "name": "signerType",
            "baseName": "signerType",
            "type": "TemplateSignerDetails.SignerTypeEnum"
        },
        {
            "name": "hostEmail",
            "baseName": "hostEmail",
            "type": "string"
        },
        {
            "name": "hostName",
            "baseName": "hostName",
            "type": "string"
        },
        {
            "name": "hostUserId",
            "baseName": "hostUserId",
            "type": "string"
        },
        {
            "name": "signType",
            "baseName": "signType",
            "type": "TemplateSignerDetails.SignTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TemplateSignerDetails.attributeTypeMap;
    }
}

export namespace TemplateSignerDetails {
    export enum StatusEnum {
        None = <any> 'None',
        NotCompleted = <any> 'NotCompleted',
        Completed = <any> 'Completed',
        Declined = <any> 'Declined',
        Revoked = <any> 'Revoked',
        Expired = <any> 'Expired'
    }
    export enum ImposeAuthenticationEnum {
        None = <any> 'None',
        EmailOtp = <any> 'EmailOTP',
        AccessCode = <any> 'AccessCode',
        Smsotp = <any> 'SMSOTP',
        IdVerification = <any> 'IdVerification'
    }
    export enum DeliveryModeEnum {
        Email = <any> 'Email',
        Sms = <any> 'SMS',
        EmailAndSms = <any> 'EmailAndSMS',
        WhatsApp = <any> 'WhatsApp'
    }
    export enum SignerTypeEnum {
        Signer = <any> 'Signer',
        Reviewer = <any> 'Reviewer',
        InPersonSigner = <any> 'InPersonSigner'
    }
    export enum SignTypeEnum {
        Single = <any> 'Single',
        Group = <any> 'Group'
    }
}
