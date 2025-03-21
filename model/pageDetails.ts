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

export class PageDetails {
    'pageSize'?: number;
    'page'?: number;
    'totalRecordsCount'?: number;
    'totalPages'?: number;
    'sortedColumn'?: string | null;
    'sortDirection'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number"
        },
        {
            "name": "totalRecordsCount",
            "baseName": "totalRecordsCount",
            "type": "number"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number"
        },
        {
            "name": "sortedColumn",
            "baseName": "sortedColumn",
            "type": "string"
        },
        {
            "name": "sortDirection",
            "baseName": "sortDirection",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PageDetails.attributeTypeMap;
    }
}

