import { DocumentApi } from '../api/documentApi';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var page = 1
const status: Array<
  'None' | 'WaitingForMe' | 'WaitingForOthers' | 'NeedAttention' |
  'Completed' | 'Declined' | 'Revoked' | 'Expired' | 'Draft' | 'Scheduled'
> = ['WaitingForOthers', 'Completed', 'Expired'];
async function listDocuments() {
    try {
        var listDocumentResponse = await documentApi.listDocuments(page,undefined,undefined,undefined,undefined,10,undefined,status);
        console.log("Documents listed successfully:", listDocumentResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
listDocuments();