import { DocumentApi } from '../api/documentApi';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var documentId = "YOUR_DOCUMENT_ID";
var attachmentId = "YOUR_ATTACHMENT_ID";
var onBehalfOf = "YOUR_BEHALF_EMAIL";
async function downloadAttachment() {
    try {
        await documentApi.downloadAttachment(documentId, attachmentId, onBehalfOf);
        console.log("Attachment downloaded successfully!");
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
downloadAttachment();