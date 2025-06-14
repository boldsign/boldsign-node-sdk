import { UserApi } from '../api/userApi';

const userApi = new UserApi();
userApi.setApiKey("YOUR_API_KEY");

var page = 1;
var pageSize = 10;
async function listUsers() {
    try {
        var userListResponse = await userApi.listUsers(page, pageSize);
        console.log("User List:", userListResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
listUsers();