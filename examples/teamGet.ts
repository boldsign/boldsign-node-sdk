import { TeamsApi } from '../api/teamsApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const teamsApi = new TeamsApi(BaseUrl);
teamsApi.setApiKey("YOUR_API_KEY");

var teamId = "YOUR_TEAM_ID";
async function getTeam(){
    try {
        var teamDetailsResponse = await teamsApi.getTeam(teamId);  
        console.log("Team Details:", teamDetailsResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getTeam();