import { DocumentApi } from '../api/documentApi';
import { AccessCodeDetails } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var accessCodeDetails = new AccessCodeDetails();
accessCodeDetails.accessCode = "12345";
var documentId = "YOUR_DOCUMENT_ID";
var email = "hankyWhites@cubeflakes.com";

async function changeDocumentAccessCode() {
    try {
        await documentApi.changeAccessCode(documentId, accessCodeDetails, email);
        console.log("Access code changed successfully!");
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
changeDocumentAccessCode();