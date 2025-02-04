import { DocumentApi } from '../api/documentApi';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var documentId = "YOUR_DOCUMENT_ID";
var onBehalfOf = "YOUR_BEHALF_EMAIL";
async function downloadAuditLog() {
    try {
        await documentApi.downloadAuditLog(documentId, onBehalfOf);
        console.log("Audit log downloaded successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
downloadAuditLog();