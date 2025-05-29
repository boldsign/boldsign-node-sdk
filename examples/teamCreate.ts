import { TeamsApi } from '../api/teamsApi';
import { CreateTeamRequest } from '../model/createTeamRequest';

const teamsApi = new TeamsApi();
teamsApi.setApiKey("YOUR_API_KEY");

var createTeamRequest = new CreateTeamRequest();
createTeamRequest.teamName = "Team-A";

async function createTeam() {
    try {
        var createTeamResponse = await teamsApi.createTeam(createTeamRequest);
        console.log("Team created successfully:", createTeamResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
createTeam();