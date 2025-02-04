import { DocumentApi } from '../api/documentApi';
import { ExtendExpiry } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

const extendExpiry = new ExtendExpiry();
extendExpiry.newExpiryValue = "2025-03-18";
extendExpiry.warnPrior = true;
var documentId = "YOUR_DOCUMENT_ID";

async function extendDocumentExpiry() {
    try {
        await documentApi.extendExpiry(documentId, extendExpiry);
        console.log("Expiry extended successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
extendDocumentExpiry();