import { DocumentApi } from '../api/documentApi';
import { AccessCodeDetail } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var accessCodeDetail = new AccessCodeDetail();
accessCodeDetail.authenticationType = AccessCodeDetail.AuthenticationTypeEnum.EmailOtp;
accessCodeDetail.emailId = "hankyWhites@cubeflakes.com";
var documentId = "YOUR_DOCUMENT_ID";

async function addAuthenticationToDocument() {
    try {
        documentApi.addAuthentication(documentId, accessCodeDetail);
        console.log("Authentication added successfully!");
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
addAuthenticationToDocument();