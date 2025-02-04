import { SenderIdentitiesApi } from '../api/senderIdentitiesApi';
import { EditSenderIdentityRequest } from '../model';

const senderIdentitiesApi = new SenderIdentitiesApi();
senderIdentitiesApi.setApiKey("YOUR_API_KEY");

var email = "luthercooper@cubeflakes.com";
var editSenderIdentityRequest = new EditSenderIdentityRequest();
editSenderIdentityRequest.name = "Luther";
editSenderIdentityRequest.redirectUrl = "https://www.syncfusion.com/";

async function updateSenderIdentity() {
    try {
        await senderIdentitiesApi.updateSenderIdentities(email, editSenderIdentityRequest);
        console.log("Sender Identity updated successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
updateSenderIdentity();