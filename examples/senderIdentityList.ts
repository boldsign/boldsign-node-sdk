import { SenderIdentitiesApi } from '../api/senderIdentitiesApi';

const senderIdentitiesApi = new SenderIdentitiesApi();
senderIdentitiesApi.setApiKey("YOUR_API_KEY");

var page = 1;
var pageSize = 10;
async function listSenderIdentities() {
    try {
        var identityListResponse = await senderIdentitiesApi.listSenderIdentities(page, pageSize);
        console.log("Sender Identity List:", identityListResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
listSenderIdentities();