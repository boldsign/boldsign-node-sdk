import { DocumentApi } from '../api/documentApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const documentApi = new DocumentApi(BaseUrl);
documentApi.setApiKey("YOUR_API_KEY");

var deletePermanently = false;
var documentId = "YOUR_DOCUMENT_ID";
async function deleteDocument() {
    try {
        await documentApi.deleteDocument(documentId, deletePermanently);
        console.log("Document deleted successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
deleteDocument();