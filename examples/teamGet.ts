import { TeamsApi } from '../api/teamsApi';

const teamsApi = new TeamsApi();
teamsApi.setApiKey("YOUR_API_KEY");

var teamId = "YOUR_TEAM_ID";
async function getTeam(){
    try {
        var teamDetailsResponse = await teamsApi.getTeam(teamId);  
        console.log("Team Details:", teamDetailsResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
getTeam();