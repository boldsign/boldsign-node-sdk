import { DocumentApi } from '../api/documentApi';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var deletePermanently = false;
var documentId = "YOUR_DOCUMENT_ID";
async function deleteDocument() {
    try {
        await documentApi.deleteDocument(documentId, deletePermanently);
        console.log("Document deleted successfully!");
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
deleteDocument();