import { TeamsApi } from '../api/teamsApi';

const teamsApi = new TeamsApi();
teamsApi.setApiKey("YOUR_API_KEY");

var page = 1;
var pageSize = 10;
async function listTeams() {
    try {
        var listTeamsResponse = await teamsApi.listTeams(page, pageSize); 
        console.log("Teams List:", listTeamsResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
listTeams();