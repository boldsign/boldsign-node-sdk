import { UserApi } from '../api/userApi';
import { CreateUser } from '../model';

const userApi = new UserApi();
userApi.setApiKey("YOUR_API_KEY");

var createUserRequest = new CreateUser();
createUserRequest.teamId = "YOUR_TEAM_ID";
createUserRequest.emailId = "luthercooper@cubeflakes.com";
createUserRequest.userRole = CreateUser.UserRoleEnum.Member;

async function createUser() {
    try {
        var createUserResponse = await userApi.createUser([createUserRequest]); 
        console.log("User created successfully:", createUserResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
createUser();