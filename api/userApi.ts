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

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import {
    ObjectSerializer, Authentication, VoidAuth, Interceptor,
    HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth, RequestFile, 
    CreateUser,ErrorResult,UpdateUser,UpdateUserMetaData,UserProperties,UserRecords,
} from '../model';

import {
    HttpError,
    optionsI,
    returnTypeT,
    returnTypeI,
    generateFormData,
    toFormData,
    queryParamsSerializer,
    USER_AGENT,
} from './';

let defaultBasePath = 'https://api.boldsign.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class UserApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = { 'User-Agent': USER_AGENT };
    protected _useQuerystring : boolean = true;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'Bearer': new ApiKeyAuth('header', 'Authorization'),
        'X-API-KEY': new ApiKeyAuth('header', 'X-API-KEY'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = { ...defaultHeaders, "User-Agent": USER_AGENT };
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(apikey: string) {
        this.authentications["X-API-KEY"].apiKey = apikey;
    }

    public setAccessToken(accessToken: string) {
        this.authentications["Bearer"].apiKey = 'bearer ' + accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Cancel the users invitation.
     * @param userId 
     * @param options
     */
    public async cancelInvitation (userId: string, options: optionsI = {headers: {}}) : Promise<returnTypeI> {
        const localVarPath = this.basePath + '/v1/users/cancelInvitation';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams['content-type'] = 'application/json';
        } else {
            localVarHeaderParams['content-type'] = produces.join(',');
        }
        let localVarFormParams: any = {};
        let localVarBodyParams: any = undefined;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling cancelInvitation.');
        }

        if (userId !== undefined) {
            localVarQueryParameters['UserId'] = ObjectSerializer.serialize(userId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let data = {};
        if (localVarUseFormData) {
          const formData = toFormData(localVarFormParams);
          data = formData;
          localVarHeaderParams = {
            ...localVarHeaderParams,
            ...formData.getHeaders(),
          };
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            paramsSerializer: this._useQuerystring ? queryParamsSerializer : undefined,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            responseType: "json",
        };

        if (localVarRequestOptions.method !== 'GET') {
           localVarRequestOptions.data = data;
        }
        let authenticationPromise = Promise.resolve();

        if (this.authentications["X-API-KEY"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["X-API-KEY"].applyToRequest(localVarRequestOptions));
        }
        if (this.authentications["Bearer"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["Bearer"].applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            return new Promise<returnTypeI>((resolve, reject) => {
                axios.request(localVarRequestOptions)
                    .then((response) => {
                        handleSuccessfulResponse(
                          resolve,
                          reject,
                          response,
                          
                        );
                    }, (error: AxiosError) => {
                        if (error.response == null) {
                            reject(error);
                            return;
                        }

                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            401,
                            "ErrorResult",
                        )) {
                          return;
                        }
                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            403,
                            "ErrorResult",
                        )) {
                          return;
                        }


                        reject(error);
                    });
            });
        });
    }
    /**
     * 
     * @summary Create the user.
     * @param createUser The create user.
     * @param options
     */
    public async createUser (createUser?: Array<CreateUser>, options: optionsI = {headers: {}}) : Promise<returnTypeI> {
        createUser = deserializeIfNeeded(createUser, "Array<CreateUser>");
        const localVarPath = this.basePath + '/v1/users/create';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams['content-type'] = 'application/json';
        } else {
            localVarHeaderParams['content-type'] = produces.join(',');
        }
        let localVarFormParams: any = {};
        let localVarBodyParams: any = undefined;

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        const result = generateFormData(createUser, Array<CreateUser>);
        localVarUseFormData = result.localVarUseFormData;

        let data = {};
        if (localVarUseFormData) {
          const formData = toFormData(result.data);
          data = formData;
          localVarHeaderParams = {
            ...localVarHeaderParams,
            ...formData.getHeaders(),
          };
        } else {
          data = ObjectSerializer.serialize(
            createUser,
            "Array<CreateUser>"
          );
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            paramsSerializer: this._useQuerystring ? queryParamsSerializer : undefined,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            responseType: "json",
        };

        if (localVarRequestOptions.method !== 'GET') {
           localVarRequestOptions.data = data;
        }
        let authenticationPromise = Promise.resolve();

        if (this.authentications["X-API-KEY"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["X-API-KEY"].applyToRequest(localVarRequestOptions));
        }
        if (this.authentications["Bearer"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["Bearer"].applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            return new Promise<returnTypeI>((resolve, reject) => {
                axios.request(localVarRequestOptions)
                    .then((response) => {
                        handleSuccessfulResponse(
                          resolve,
                          reject,
                          response,
                          
                        );
                    }, (error: AxiosError) => {
                        if (error.response == null) {
                            reject(error);
                            return;
                        }

                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            401,
                            "ErrorResult",
                        )) {
                          return;
                        }
                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            403,
                            "ErrorResult",
                        )) {
                          return;
                        }


                        reject(error);
                    });
            });
        });
    }
    /**
     * 
     * @summary Get summary of the user.
     * @param userId User Id.
     * @param options
     */
    public async getUser (userId: string, options: optionsI = {headers: {}}) : Promise<UserProperties> {
        const localVarPath = this.basePath + '/v1/users/get';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams['content-type'] = 'application/json';
        } else {
            localVarHeaderParams['content-type'] = produces.join(',');
        }
        let localVarFormParams: any = {};
        let localVarBodyParams: any = undefined;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUser.');
        }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let data = {};
        if (localVarUseFormData) {
          const formData = toFormData(localVarFormParams);
          data = formData;
          localVarHeaderParams = {
            ...localVarHeaderParams,
            ...formData.getHeaders(),
          };
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            paramsSerializer: this._useQuerystring ? queryParamsSerializer : undefined,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            responseType: "json",
        };

        if (localVarRequestOptions.method !== 'GET') {
           localVarRequestOptions.data = data;
        }
        let authenticationPromise = Promise.resolve();

        if (this.authentications["X-API-KEY"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["X-API-KEY"].applyToRequest(localVarRequestOptions));
        }
        if (this.authentications["Bearer"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["Bearer"].applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            return new Promise<UserProperties>((resolve, reject) => {
                axios.request(localVarRequestOptions)
                    .then((response) => {
                        handleSuccessfulResponse<UserProperties>(
                          resolve,
                          reject,
                          response,
                          "UserProperties",
                        );
                    }, (error: AxiosError) => {
                        if (error.response == null) {
                            reject(error);
                            return;
                        }

                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            200,
                            "UserProperties",
                        )) {
                          return;
                        }
                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            401,
                            "ErrorResult",
                        )) {
                          return;
                        }
                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            403,
                            "ErrorResult",
                        )) {
                          return;
                        }


                        reject(error);
                    });
            });
        });
    }
    /**
     * 
     * @summary List user documents.
     * @param page Page index specified in get user list request.
     * @param pageSize Page size specified in get user list request.
     * @param search Users can be listed by the search  based on the user ID
     * @param options
     */
    public async listUsers (page: number, pageSize?: number, search?: string, options: optionsI = {headers: {}}) : Promise<UserRecords> {
        const localVarPath = this.basePath + '/v1/users/list';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams['content-type'] = 'application/json';
        } else {
            localVarHeaderParams['content-type'] = produces.join(',');
        }
        let localVarFormParams: any = {};
        let localVarBodyParams: any = undefined;

        // verify required parameter 'page' is not null or undefined
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling listUsers.');
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['PageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['Page'] = ObjectSerializer.serialize(page, "number");
        }

        if (search !== undefined) {
            localVarQueryParameters['Search'] = ObjectSerializer.serialize(search, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let data = {};
        if (localVarUseFormData) {
          const formData = toFormData(localVarFormParams);
          data = formData;
          localVarHeaderParams = {
            ...localVarHeaderParams,
            ...formData.getHeaders(),
          };
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            paramsSerializer: this._useQuerystring ? queryParamsSerializer : undefined,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            responseType: "json",
        };

        if (localVarRequestOptions.method !== 'GET') {
           localVarRequestOptions.data = data;
        }
        let authenticationPromise = Promise.resolve();

        if (this.authentications["X-API-KEY"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["X-API-KEY"].applyToRequest(localVarRequestOptions));
        }
        if (this.authentications["Bearer"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["Bearer"].applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            return new Promise<UserRecords>((resolve, reject) => {
                axios.request(localVarRequestOptions)
                    .then((response) => {
                        handleSuccessfulResponse<UserRecords>(
                          resolve,
                          reject,
                          response,
                          "UserRecords",
                        );
                    }, (error: AxiosError) => {
                        if (error.response == null) {
                            reject(error);
                            return;
                        }

                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            200,
                            "UserRecords",
                        )) {
                          return;
                        }
                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            401,
                            "ErrorResult",
                        )) {
                          return;
                        }


                        reject(error);
                    });
            });
        });
    }
    /**
     * 
     * @summary Resend the users invitation.
     * @param userId 
     * @param options
     */
    public async resendInvitation (userId: string, options: optionsI = {headers: {}}) : Promise<returnTypeI> {
        const localVarPath = this.basePath + '/v1/users/resendInvitation';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams['content-type'] = 'application/json';
        } else {
            localVarHeaderParams['content-type'] = produces.join(',');
        }
        let localVarFormParams: any = {};
        let localVarBodyParams: any = undefined;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling resendInvitation.');
        }

        if (userId !== undefined) {
            localVarQueryParameters['UserId'] = ObjectSerializer.serialize(userId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let data = {};
        if (localVarUseFormData) {
          const formData = toFormData(localVarFormParams);
          data = formData;
          localVarHeaderParams = {
            ...localVarHeaderParams,
            ...formData.getHeaders(),
          };
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            paramsSerializer: this._useQuerystring ? queryParamsSerializer : undefined,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            responseType: "json",
        };

        if (localVarRequestOptions.method !== 'GET') {
           localVarRequestOptions.data = data;
        }
        let authenticationPromise = Promise.resolve();

        if (this.authentications["X-API-KEY"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["X-API-KEY"].applyToRequest(localVarRequestOptions));
        }
        if (this.authentications["Bearer"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["Bearer"].applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            return new Promise<returnTypeI>((resolve, reject) => {
                axios.request(localVarRequestOptions)
                    .then((response) => {
                        handleSuccessfulResponse(
                          resolve,
                          reject,
                          response,
                          
                        );
                    }, (error: AxiosError) => {
                        if (error.response == null) {
                            reject(error);
                            return;
                        }

                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            401,
                            "ErrorResult",
                        )) {
                          return;
                        }
                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            403,
                            "ErrorResult",
                        )) {
                          return;
                        }


                        reject(error);
                    });
            });
        });
    }
    /**
     * 
     * @summary Update new User meta data details.
     * @param updateUserMetaData update query.
     * @param options
     */
    public async updateMetaData (updateUserMetaData?: UpdateUserMetaData, options: optionsI = {headers: {}}) : Promise<returnTypeI> {
        updateUserMetaData = deserializeIfNeeded(updateUserMetaData, "UpdateUserMetaData");
        const localVarPath = this.basePath + '/v1/users/updateMetaData';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams['content-type'] = 'application/json';
        } else {
            localVarHeaderParams['content-type'] = produces.join(',');
        }
        let localVarFormParams: any = {};
        let localVarBodyParams: any = undefined;

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        const result = generateFormData(updateUserMetaData, UpdateUserMetaData);
        localVarUseFormData = result.localVarUseFormData;

        let data = {};
        if (localVarUseFormData) {
          const formData = toFormData(result.data);
          data = formData;
          localVarHeaderParams = {
            ...localVarHeaderParams,
            ...formData.getHeaders(),
          };
        } else {
          data = ObjectSerializer.serialize(
            updateUserMetaData,
            "UpdateUserMetaData"
          );
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'PUT',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            paramsSerializer: this._useQuerystring ? queryParamsSerializer : undefined,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            responseType: "json",
        };

        if (localVarRequestOptions.method !== 'GET') {
           localVarRequestOptions.data = data;
        }
        let authenticationPromise = Promise.resolve();

        if (this.authentications["X-API-KEY"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["X-API-KEY"].applyToRequest(localVarRequestOptions));
        }
        if (this.authentications["Bearer"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["Bearer"].applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            return new Promise<returnTypeI>((resolve, reject) => {
                axios.request(localVarRequestOptions)
                    .then((response) => {
                        handleSuccessfulResponse(
                          resolve,
                          reject,
                          response,
                          
                        );
                    }, (error: AxiosError) => {
                        if (error.response == null) {
                            reject(error);
                            return;
                        }

                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            401,
                            "ErrorResult",
                        )) {
                          return;
                        }
                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            403,
                            "ErrorResult",
                        )) {
                          return;
                        }


                        reject(error);
                    });
            });
        });
    }
    /**
     * 
     * @summary Update new User role.
     * @param updateUser update query.
     * @param options
     */
    public async updateUser (updateUser?: UpdateUser, options: optionsI = {headers: {}}) : Promise<returnTypeI> {
        updateUser = deserializeIfNeeded(updateUser, "UpdateUser");
        const localVarPath = this.basePath + '/v1/users/update';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams['content-type'] = 'application/json';
        } else {
            localVarHeaderParams['content-type'] = produces.join(',');
        }
        let localVarFormParams: any = {};
        let localVarBodyParams: any = undefined;

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        const result = generateFormData(updateUser, UpdateUser);
        localVarUseFormData = result.localVarUseFormData;

        let data = {};
        if (localVarUseFormData) {
          const formData = toFormData(result.data);
          data = formData;
          localVarHeaderParams = {
            ...localVarHeaderParams,
            ...formData.getHeaders(),
          };
        } else {
          data = ObjectSerializer.serialize(
            updateUser,
            "UpdateUser"
          );
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'PUT',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            paramsSerializer: this._useQuerystring ? queryParamsSerializer : undefined,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            responseType: "json",
        };

        if (localVarRequestOptions.method !== 'GET') {
           localVarRequestOptions.data = data;
        }
        let authenticationPromise = Promise.resolve();

        if (this.authentications["X-API-KEY"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["X-API-KEY"].applyToRequest(localVarRequestOptions));
        }
        if (this.authentications["Bearer"].apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications["Bearer"].applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            return new Promise<returnTypeI>((resolve, reject) => {
                axios.request(localVarRequestOptions)
                    .then((response) => {
                        handleSuccessfulResponse(
                          resolve,
                          reject,
                          response,
                          
                        );
                    }, (error: AxiosError) => {
                        if (error.response == null) {
                            reject(error);
                            return;
                        }

                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            401,
                            "ErrorResult",
                        )) {
                          return;
                        }
                        if (handleErrorCodeResponse(
                            reject,
                            error.response,
                            403,
                            "ErrorResult",
                        )) {
                          return;
                        }


                        reject(error);
                    });
            });
        });
    }
}

function deserializeIfNeeded<T> (obj: T, classname: string): T {
  if (obj !== null && obj !== undefined && obj.constructor.name !== classname) {
    return ObjectSerializer.deserialize(obj, classname);
  }

  return obj;
}

type AxiosResolve<T> = (
  value: (T | PromiseLike<T>),
) => void

type AxiosReject = (reason?: any) => void;

function handleSuccessfulResponse<T>(
  resolve: AxiosResolve<T>,
  reject: AxiosReject,
  response: AxiosResponse,
  returnType?: string,
) {
    let body = response.data;

    if (
        response.status &&
        response.status >= 200 &&
        response.status <= 299
    ) {
        if (returnType) {
            body = ObjectSerializer.deserialize(body, returnType);
        }

        resolve(body);
    } else {
        reject(new HttpError(response, body, response.status));
    }
}

function handleErrorCodeResponse(
  reject: AxiosReject,
  response: AxiosResponse,
  code: number,
  returnType: string
): boolean {
    if (response.status !== code) {
        return false;
    }

    let body = response.data;
    if(code === 401) {
        body = "Unauthorized request (401): Invalid authentication.";
    }
    reject(new HttpError(response, body, response.status));

    return true;
}

function handleErrorRangeResponse(
  reject: AxiosReject,
  response: AxiosResponse,
  code: string,
  returnType: string
): boolean {
    let rangeCodeLeft = Number(code[0] + "00");
    let rangeCodeRight = Number(code[0] + "99");

    if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
        const body = ObjectSerializer.deserialize(
            response.data,
            returnType,
        );

      reject(new HttpError(response, body, response.status));

      return true;
    }

    return false;
}
