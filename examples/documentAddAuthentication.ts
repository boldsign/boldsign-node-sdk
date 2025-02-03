import { DocumentApi } from '../api/documentApi';
import { AccessCodeDetail } from '../model';

const BaseUrl: string = "https://staging-api.boldsign.com";
const documentApi = new DocumentApi(BaseUrl);
documentApi.setApiKey("YOUR_API_KEY");

var accessCodeDetail = new AccessCodeDetail();
accessCodeDetail.authenticationType = AccessCodeDetail.AuthenticationTypeEnum.EmailOtp;
accessCodeDetail.emailId = "hankyWhites@cubeflakes.com";
var documentId = "YOUR_DOCUMENT_ID";

async function addAuthenticationToDocument() {
    try {
        documentApi.addAuthentication(documentId, accessCodeDetail);
        console.log("Authentication added successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
addAuthenticationToDocument();