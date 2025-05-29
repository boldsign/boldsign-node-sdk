import { IdentityVerificationApi } from "../api/identityVerificationApi";
import { EmbeddedFileDetails } from "../model";
const identityVerificationApi = new IdentityVerificationApi();
identityVerificationApi.setApiKey("YOUR_API_KEY");

var manual_verification = new EmbeddedFileDetails();
manual_verification.emailId = "sivaramani.sivaraj@syncfusion.com";
manual_verification.countryCode = "+91";
manual_verification.phoneNumber = "23467898765";
manual_verification.redirectUrl = "www.boldsign.com";

var document_id = "YOUR_DOCUMENT_ID";
async function createEmbeddedManualVerification() {
     try {
        var verification_url = await identityVerificationApi.createEmbeddedVerificationUrl(document_id,manual_verification);
        console.log(verification_url);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
createEmbeddedManualVerification();

