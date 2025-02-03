import { TeamsApi } from '../api/teamsApi';
import { TeamUpdateRequest } from '../model';

const BaseUrl: string = "https://staging-api.boldsign.com";
const teamsApi = new TeamsApi(BaseUrl);
teamsApi.setApiKey("YOUR_API_KEY");

var teamUpdateRequest = new TeamUpdateRequest();
teamUpdateRequest.teamId = "YOUR_TEAM_ID";
teamUpdateRequest.teamName = "Sales";

async function updateTeam() {
    try {
        await teamsApi.updateTeam(teamUpdateRequest);
        console.log("Team updated successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
updateTeam();