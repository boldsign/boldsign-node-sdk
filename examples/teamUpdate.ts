import { TeamsApi } from '../api/teamsApi';
import { TeamUpdateRequest } from '../model';

const teamsApi = new TeamsApi();
teamsApi.setApiKey("YOUR_API_KEY");

var teamUpdateRequest = new TeamUpdateRequest();
teamUpdateRequest.teamId = "YOUR_TEAM_ID";
teamUpdateRequest.teamName = "Sales";

async function updateTeam() {
    try {
        await teamsApi.updateTeam(teamUpdateRequest);
        console.log("Team updated successfully!");
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
updateTeam();