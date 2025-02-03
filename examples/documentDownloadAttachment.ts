import { DocumentApi } from '../api/documentApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const documentApi = new DocumentApi(BaseUrl);
documentApi.setApiKey("YOUR_API_KEY");

var documentId = "YOUR_DOCUMENT_ID";
var attachmentId = "YOUR_ATTACHMENT_ID";
var onBehalfOf = "YOUR_BEHALF_EMAIL";
async function downloadAttachment() {
    try {
        await documentApi.downloadAttachment(documentId, attachmentId, onBehalfOf);
        console.log("Attachment downloaded successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
downloadAttachment();