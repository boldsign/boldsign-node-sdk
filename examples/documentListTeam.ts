import { DocumentApi } from '../api/documentApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const documentApi = new DocumentApi(BaseUrl);
documentApi.setApiKey("YOUR_API_KEY");

var page = 1;
async function getTeamDocuments() {
    try {
        var teamDocumentResponse = await documentApi.teamDocuments(page);
        console.log("Team Documents fetched successfully:", teamDocumentResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getTeamDocuments();