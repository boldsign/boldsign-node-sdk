import { TeamsApi } from '../api/teamsApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const teamsApi = new TeamsApi(BaseUrl);
teamsApi.setApiKey("YOUR_API_KEY");

var page = 1;
var pageSize = 10;
async function listTeams() {
    try {
        var listTeamsResponse = await teamsApi.listTeams(page, pageSize); 
        console.log("Teams List:", listTeamsResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
listTeams();