import { DocumentApi } from '../api/documentApi';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var page = 1
async function listDocuments() {
    try {
        var listDocumentResponse = await documentApi.listDocuments(page);
        console.log("Documents listed successfully:", listDocumentResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
listDocuments();