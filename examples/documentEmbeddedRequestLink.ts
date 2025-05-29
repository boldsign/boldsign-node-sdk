import { DocumentApi } from '../api/documentApi';
import { DocumentSigner, EmbeddedDocumentRequest, FormField, Rectangle } from '../model';
import * as fs from 'fs';
import * as path from 'path';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");
const formField = new FormField();
formField.fieldType = FormField.FieldTypeEnum.Signature;
formField.pageNumber = 1;
const bounds = new Rectangle();
bounds.x = 100;
bounds.y = 50;
bounds.width = 100;
bounds.height = 100;
formField.bounds = bounds;
const documentSigner = new DocumentSigner();
documentSigner.name = "David";
documentSigner.emailAddress = "david@cubeflakes.com";
documentSigner.signerOrder = 1;
documentSigner.signerType = DocumentSigner.SignerTypeEnum.Signer;
documentSigner.privateMessage = "This is private message for signer";
documentSigner.formFields = [formField];
const embeddedDocumentRequest = new EmbeddedDocumentRequest();
embeddedDocumentRequest.title = "Sent from API Node SDK";
embeddedDocumentRequest.showToolbar = true;
embeddedDocumentRequest.showNavigationButtons = true;
embeddedDocumentRequest.showPreviewButton = true;
embeddedDocumentRequest.showSendButton = true;
embeddedDocumentRequest.showSaveButton = true;
embeddedDocumentRequest.sendViewOption = EmbeddedDocumentRequest.SendViewOptionEnum.FillingPage;
embeddedDocumentRequest.locale = EmbeddedDocumentRequest.LocaleEnum.En;
embeddedDocumentRequest.showTooltip = false;
embeddedDocumentRequest.redirectUrl = "https://boldsign.dev/";
embeddedDocumentRequest.message = "This is document message sent from API Node SDK";
embeddedDocumentRequest.enableSigningOrder = false;
embeddedDocumentRequest.signers = [documentSigner];
const filePath = path.resolve("YOUR_FILE_PATH");
const files = fs.createReadStream(filePath);
embeddedDocumentRequest.files = [files];
async function createEmbeddedRequestUrlDocument() {
    try {
        const requestLinkResponse = await documentApi.createEmbeddedRequestUrlDocument(embeddedDocumentRequest);
        console.log('Embedded Document URL:', requestLinkResponse.sendUrl);
    } catch (error:any) {
        console.error("Error occurred while calling the API for embedded template:", error.message);
    }
}
createEmbeddedRequestUrlDocument();