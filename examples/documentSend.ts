import { DocumentApi } from '../api/documentApi';
import { DocumentSigner, FormField, Rectangle, RequestDetailedFile, SendForSign } from '../model';
import * as fs from 'fs'; 

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

const bounds = new Rectangle();
bounds.x = 100;
bounds.y = 50;
bounds.width = 100;
bounds.height = 100;

var formField = new FormField();
formField.fieldType = FormField.FieldTypeEnum.Signature;
formField.pageNumber = 1;
formField.bounds = bounds;

var documentSigner = new DocumentSigner();
documentSigner.name = "SR";
documentSigner.emailAddress = "selvarani.s+stg1@syncfusion.com";
documentSigner.signerType = DocumentSigner.SignerTypeEnum.Signer;
documentSigner.formFields = [formField];

var documentSigner1 = new DocumentSigner();
documentSigner1.name = "SR1";
documentSigner1.emailAddress = "selvarani.s+stg11@syncfusion.com";
documentSigner1.signerType = DocumentSigner.SignerTypeEnum.Signer;
documentSigner1.formFields = [formField];


var sendForSign = new SendForSign();
sendForSign.title = "Agreement";
sendForSign.signers = [documentSigner, documentSigner1];
var files = fs.createReadStream("examples/documents/agreement.pdf");
sendForSign.files = [files];

async function sendDocument() {
    try {
        var sendDocumentResponse = await documentApi.sendDocument(sendForSign);
        console.log("Document sent successfully:", sendDocumentResponse.documentId);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}

sendDocument();