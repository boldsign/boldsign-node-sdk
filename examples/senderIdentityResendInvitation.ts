import { SenderIdentitiesApi } from '../api/senderIdentitiesApi';

const senderIdentitiesApi = new SenderIdentitiesApi();
senderIdentitiesApi.setApiKey("YOUR_API_KEY");

var email = "david@cubeflakes.com";
async function resendInvitation() {
    try {
        await senderIdentitiesApi.resendInvitationSenderIdentities(email);
        console.log("Invitation sent successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
resendInvitation();