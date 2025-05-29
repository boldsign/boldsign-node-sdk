import { IdentityVerificationApi } from "../api/identityVerificationApi";
import { VerificationDataRequest } from "../model";

const identityVerificationApi = new IdentityVerificationApi();
identityVerificationApi.setApiKey("YOUR_API_KEY");
var data_request = new VerificationDataRequest();
data_request.emailId = "sivaramani.sivaraj@syncfusion.com";
data_request.countryCode = "+91";
data_request.phoneNumber = "23467898765";

var document_id = "YOUR_DOCUMENT_ID";
async function identityVerificationImage() {
     try {
        var verification_report = await identityVerificationApi.report(document_id,data_request);
        console.log(verification_report);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
identityVerificationImage();

