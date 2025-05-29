import { IdentityVerificationApi } from "../api/identityVerificationApi";
import { DownloadImageRequest } from "../model";

const identityVerificationApi = new IdentityVerificationApi();
identityVerificationApi.setApiKey("YOUR_API_KEY");

var image_request = new DownloadImageRequest();
image_request.emailId = "sivaramani.sivaraj@syncfusion.com";
image_request.countryCode = "+91";
image_request.phoneNumber = "23467898765";
image_request.fileId = "YOUR_FILE_ID";

var document_id = "YOUR_DOCUMENT_ID";
async function identityVerificationImage() {
     try {
        var verification_image = await identityVerificationApi.image(document_id,image_request);
        console.log(verification_image);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
identityVerificationImage();

