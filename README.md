# @boldsign/node-sdk

Easily integrate BoldSign's e-signature features into your Node.js applications. This package simplifies sending documents for signature, embedding signing ceremonies, tracking document status, downloading signed documents, and managing e-signature workflows.

## Prerequisites

* Node 12 or higher.
* Free [developer account](https://boldsign.com/esignature-api/)

## Documentation

* [Official API documentation](https://developers.boldsign.com/)

## Installation

```
npm install @boldsign/node-sdk
```

## Getting Started

Please follow the [installation procedure](#installation) and then run the following:


### TypeScript Example

```typescript
    import { DocumentApi } from '@boldsign/node-sdk';
    import { DocumentSigner, FormField, Rectangle, SendForSign } from '@boldsign/node-sdk';
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