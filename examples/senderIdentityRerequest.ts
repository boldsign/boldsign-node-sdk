import { SenderIdentitiesApi } from '../api/senderIdentitiesApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const senderIdentitiesApi = new SenderIdentitiesApi(BaseUrl);
senderIdentitiesApi.setApiKey("YOUR_API_KEY");

var email = "luthercooper@cubeflakes.com";
async function rerequestInvitation() {
    try {
        await senderIdentitiesApi.reRequestSenderIdentities(email);
        console.log("Sender identity re-requested successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
rerequestInvitation();