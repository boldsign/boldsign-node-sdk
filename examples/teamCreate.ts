import { TeamsApi } from '../api/teamsApi';
import { CreateTeamRequest } from '../model/createTeamRequest';

const BaseUrl: string = "https://staging-api.boldsign.com";
const teamsApi = new TeamsApi(BaseUrl);
teamsApi.setApiKey("YOUR_API_KEY");

var createTeamRequest = new CreateTeamRequest();
createTeamRequest.teamName = "Team-A";

async function createTeam() {
    try {
        var createTeamResponse = await teamsApi.createTeam(createTeamRequest);
        console.log("Team created successfully:", createTeamResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
createTeam();