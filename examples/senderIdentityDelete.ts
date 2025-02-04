import { SenderIdentitiesApi } from '../api/senderIdentitiesApi';

const senderIdentitiesApi = new SenderIdentitiesApi();
senderIdentitiesApi.setApiKey("YOUR_API_KEY");

var email = "luthercooper@cubeflakes.com";
async function deleteSenderIdentity() {
    try {
      await senderIdentitiesApi.deleteSenderIdentities(email);
      console.log("Sender identity deleted successfully!");
    } catch (error) {
      console.error("Error occurred while calling the API:", error);
    }
}
deleteSenderIdentity();