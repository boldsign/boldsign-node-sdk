import { PlanApi } from '../api/planApi';

const planApi = new PlanApi();
planApi.setApiKey("YOUR_API_KEY");

async function getApiCreditsCount() {
    try {
        var apiCreditsCountResponse = await planApi.apiCreditsCount();
        console.log("API Credits Count:", apiCreditsCountResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
getApiCreditsCount();