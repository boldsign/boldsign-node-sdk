import { UserApi } from '../api/userApi';

const userApi = new UserApi();
userApi.setApiKey("YOUR_API_KEY");

var userId = "YOUR_USER_ID";
async function resendUserInvitation() {
    try {
        await userApi.resendInvitation(userId);
        console.log("Invitation resent successfully!");
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
resendUserInvitation();