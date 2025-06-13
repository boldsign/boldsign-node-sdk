import * as http from 'http';
import { ErrorResult } from "../model";

export class HttpError extends Error {
    constructor (public response: AxiosResponse, public body: ErrorResult, public statusCode?: number) {
        super(JSON.stringify(body, null, 2));
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model';


import { AxiosResponse } from "axios";
import { AttributeTypeMap, ObjectSerializer, RequestDetailedFile } from "../model";
const formData = require("form-data");
const Qs = require("qs");

export interface optionsI { headers: { [name: string]: string } }
export interface returnTypeT<T> { response: AxiosResponse, body: T }
export interface returnTypeI { response: AxiosResponse, body?: any }

export const queryParamsSerializer = (params) => {
    return Qs.stringify(params, { arrayFormat: 'repeat' })
}

export const USER_AGENT = "boldsign-node-sdk/1.0.2";

/**
 * Generates an object containing form data.
 *
 * Data is converted to JSON and added to data.body
 *
 * @param obj
 * @param typemap
 */
export const generateFormData = (
  obj: any,
  typemap: any
): { localVarUseFormData: boolean; data: object } => {
  const data = {};
  let localVarUseFormData = false;

  let attributeTypeMap;

  // Check if the dataType is an Array and get the element type if necessary
  if (Array.isArray(typemap)) {
    const itemType = typemap[0]?.constructor;
    if (itemType && itemType.attributeTypeMap) {
      attributeTypeMap = itemType.attributeTypeMap;
    }
  } else if (typemap && typemap.attributeTypeMap) {
    attributeTypeMap = typemap.attributeTypeMap;
  }

  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return {
      localVarUseFormData,
      data,
    };
  }

  attributeTypeMap.forEach((paramInfo) => {
    if (obj[paramInfo.name] === undefined) {
      return;
    }

    /**
     * Everything except binary (file) data can be serialized to JSON.
     * If file data we want to keep as-is.
     */
    if (paramInfo.type.indexOf("RequestFile") !== -1) {
      localVarUseFormData = true;

      /**
       * Some parameters can be arrays of files
       */
      if (Array.isArray(obj[paramInfo.name])) {
        const fileList: any= [];
        obj[paramInfo.name].forEach((childObject, i) => {
            fileList.push(childObject);
        });
        data[paramInfo.name] = fileList;
        return;
      }

      /**
       * File is already a type of `RequestFile`
       * @see RequestFile
       */
      data[paramInfo.baseName] = obj[paramInfo.name];
      return;
    }

    if(paramInfo.type.indexOf("Array") !== -1) {
      const serializedArray: string[] = [];
      obj[paramInfo.name].forEach((childObject, i) => {
        const key = `${paramInfo.baseName}[${i}]`;
        const serializedItem = typeof childObject === "object" ? JSON.stringify(childObject): childObject;
        serializedArray.push(serializedItem);
      });
      data[paramInfo.baseName] = serializedArray;
      return;
    }

    // Convert boolean value into string when using FormData, to prevent "data should be a string, Buffer or Uint8Array" error
    if (paramInfo.type.indexOf("boolean") !== -1) {
      data[paramInfo.baseName] = JSON.stringify(obj[paramInfo.name]);
      return;
    }

    /**
     * Everything else that is not binary data (file uploads) can be
     * serialized to JSON and sent over. This helps reduce complexity
     * when trying to keep formdata key names and serializing each nested
     * object individually.
     */
    const serialized = ObjectSerializer.serialize(
      obj[paramInfo.name],
      paramInfo.type
    );

    data[paramInfo.baseName] = shouldJsonify(serialized)
      ? JSON.stringify(serialized)
      : serialized;
  });

  return {
    localVarUseFormData,
    data,
  };
};

export const toFormData = (obj: object): any => {
  const form = new formData();

  Object.keys(obj).forEach((key) => {
    if (isBufferDetailedFile(obj[key])) {
      form.append(key, obj[key].value, obj[key].options);
      return;
    }
    else if (Array.isArray(obj[key])) {
      obj[key].forEach(function (item, index) {
        form.append(key, item);
      });
    } else {
      const value = (typeof obj[key] !== 'object') ? obj[key].toString(): obj[key];
      form.append(key, value);
    }
  });

  return form;
};

function isBufferDetailedFile(obj: any): obj is RequestDetailedFile {
  return (<RequestDetailedFile>obj).value !== undefined
    && Buffer.isBuffer(obj.value)
    && (<RequestDetailedFile>obj).options !== undefined
    && (<RequestDetailedFile>obj).options?.filename !== undefined
    && (<RequestDetailedFile>obj).options?.contentType !== undefined
}

const shouldJsonify = (val: any): boolean => val === Object(val);
