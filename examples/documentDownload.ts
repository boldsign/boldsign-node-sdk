import { DocumentApi } from '../api/documentApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const documentApi = new DocumentApi(BaseUrl);
documentApi.setApiKey("YOUR_API_KEY");

var documentId = "YOUR_DOCUMENT_ID";
var onBehalfOf = "YOUR_BEHALF_EMAIL";
async function downloadDocument() {
    try {
        await documentApi.downloadDocument(documentId, onBehalfOf);
        console.log("Document downloaded successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
downloadDocument();