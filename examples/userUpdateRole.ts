import { UserApi } from '../api/userApi';
import { UpdateUser } from '../model';

const userApi = new UserApi();
userApi.setApiKey("YOUR_API_KEY");

var updateUserRequest = new UpdateUser();
updateUserRequest.userId = "YOUR_USER_ID";
updateUserRequest.userRole = UpdateUser.UserRoleEnum.TeamAdmin;

async function updateUser() {
    try {
        await userApi.updateUser(updateUserRequest);  
        console.log("Userrole updated successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
updateUser();