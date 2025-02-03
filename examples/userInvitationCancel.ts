import { UserApi } from '../api/userApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const userApi = new UserApi(BaseUrl);
userApi.setApiKey("YOUR_API_KEY");

var userId = "YOUR_USER_ID";
async function cancelUserInvitation() {
    try {
        await userApi.cancelInvitation(userId);
        console.log("Invitation canceled successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
cancelUserInvitation();