import { UserApi } from '../api/userApi';

const userApi = new UserApi();
userApi.setApiKey("YOUR_API_KEY");

var userId = "YOUR_USER_ID";
async function getUserDetails() {
    try {
        var userDetailsResponse = await userApi.getUser(userId);
        console.log("User Details:", userDetailsResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getUserDetails();