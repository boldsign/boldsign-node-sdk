import { DocumentApi } from '../api/documentApi';
import { ReminderMessage } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var reminderMessage = new ReminderMessage();
reminderMessage.message = "Please sign this soon";
var documentId = "YOUR_DOCUMENT_ID";
var receiverEmails = ["david@cubeflakes.com"];

async function remindDocument() {
    try {
        await documentApi.remindDocument(documentId, receiverEmails, reminderMessage);
        console.log("Reminder sent successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
remindDocument();