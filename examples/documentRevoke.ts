import { DocumentApi } from '../api/documentApi';
import { RevokeDocument } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var revokeDocumentRequest = new RevokeDocument();
revokeDocumentRequest.message = "This is document revoke message";
var documentId = "YOUR_DOCUMENT_ID";

async function revokeDocument() {
    try {
        await documentApi.revokeDocument(documentId, revokeDocumentRequest);
        console.log("Document revoked successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
revokeDocument();