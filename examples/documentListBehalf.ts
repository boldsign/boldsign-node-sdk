import { DocumentApi } from '../api/documentApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const documentApi = new DocumentApi(BaseUrl);
documentApi.setApiKey("YOUR_API_KEY");

var page = 1;
async function getBehalfDocuments() {
    try {
        var behalfDocumentResponse = await documentApi.behalfDocuments(page);
        console.log("Behalf Documents fetched successfully:", behalfDocumentResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getBehalfDocuments();