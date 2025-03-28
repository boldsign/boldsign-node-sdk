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

export class AttachmentInfo {
    'title': string | null;
    'allowedFileTypes': string | null;
    'description'?: string | null;
    'acceptedFileTypes'?: Array<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "allowedFileTypes",
            "baseName": "allowedFileTypes",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "acceptedFileTypes",
            "baseName": "acceptedFileTypes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AttachmentInfo.attributeTypeMap;
    }
}

