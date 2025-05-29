import { SenderIdentitiesApi } from '../api/senderIdentitiesApi';
import { CreateSenderIdentityRequest } from '../model';

const senderIdentitiesApi = new SenderIdentitiesApi();
senderIdentitiesApi.setApiKey("YOUR_API_KEY");

var createSenderIdentityRequest = new CreateSenderIdentityRequest();
createSenderIdentityRequest.name = "Luther Cooper";
createSenderIdentityRequest.email = "luthercooper@cubeflakes.com";
createSenderIdentityRequest.brandId = "YOUR_BRAND_ID";
createSenderIdentityRequest.redirectUrl = "https://boldsign.com";

async function createSenderIdentity() {
    try {
        var createIdentityresponse = await senderIdentitiesApi.createSenderIdentities(createSenderIdentityRequest);
        console.log("Sender Identity created successfully:", createIdentityresponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
createSenderIdentity();