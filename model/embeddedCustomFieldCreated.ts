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

export class EmbeddedCustomFieldCreated {
    'createUrl'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createUrl",
            "baseName": "createUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EmbeddedCustomFieldCreated.attributeTypeMap;
    }
}

