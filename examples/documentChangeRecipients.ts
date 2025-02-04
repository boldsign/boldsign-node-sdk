import { DocumentApi } from '../api/documentApi';
import { ChangeRecipient } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var changeRecipient = new ChangeRecipient();
changeRecipient.newSignerName = "David";
changeRecipient.newSignerEmail = "david@cubeflakes.com";
changeRecipient.oldSignerEmail = "hankyWhites@cubeflakes.com";
changeRecipient.reason = "Wrongly sent";
var documentId = "YOUR_DOCUMENT_ID";

async function changeDocumentRecipient() {
    try {
        await documentApi.changeRecipient(documentId, changeRecipient);
        console.log("Recipient changed successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
changeDocumentRecipient();