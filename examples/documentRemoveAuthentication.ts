import { DocumentApi } from '../api/documentApi';
import { RemoveAuthentication } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var removeAuthentication = new RemoveAuthentication();
removeAuthentication.emailId = "david@cubeflakes.com";
var documentId = "YOUR_DOCUMENT_ID";

async function removeAuthenticationFromDocument() {
    try {
        await documentApi.removeAuthentication(documentId, removeAuthentication);
        console.log("Authentication removed successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
removeAuthenticationFromDocument();