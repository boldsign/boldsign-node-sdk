import { DocumentApi } from '../api/documentApi';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var page = 1;
async function getBehalfDocuments() {
    try {
        var behalfDocumentResponse = await documentApi.behalfDocuments(page);
        console.log("Behalf Documents fetched successfully:", behalfDocumentResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
getBehalfDocuments();