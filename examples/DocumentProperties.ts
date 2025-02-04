import { DocumentApi } from '../api/documentApi';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var documentId = "YOUR_DOCUMENT_ID";
async function getDocumentProperties() {
    try {
        var getPropertiesResponse = await documentApi.getProperties(documentId); 
        console.log("Document Properties:", getPropertiesResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getDocumentProperties();