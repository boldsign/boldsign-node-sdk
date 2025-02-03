import { PlanApi } from '../api/planApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const planApi = new PlanApi(BaseUrl);
planApi.setApiKey("YOUR_API_KEY");

async function getApiCreditsCount() {
    try {
        var apiCreditsCountResponse = await planApi.apiCreditsCount();
        console.log("API Credits Count:", apiCreditsCountResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getApiCreditsCount();