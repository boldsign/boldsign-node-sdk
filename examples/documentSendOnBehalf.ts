import { DocumentApi } from '../api/documentApi';
import { FormField, Rectangle, DocumentSigner, SendForSign, ReminderSettings } from '../model';
import * as fs from 'fs';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");
const formField = new FormField();
formField.fieldType = FormField.FieldTypeEnum.Signature;
formField.pageNumber = 1;
const bounds = new Rectangle();
bounds.x = 50;
bounds.y = 50;
bounds.width = 200;
bounds.height = 25;
formField.bounds = bounds;
const documentSigner = new DocumentSigner();
documentSigner.name = "Luther";
documentSigner.emailAddress = "luthercooper@cubeflakes.com";
documentSigner.signerOrder = 1;
documentSigner.signerType = DocumentSigner.SignerTypeEnum.Signer;
documentSigner.formFields = [formField];
documentSigner.locale = documentSigner.locale?.valueOf() || DocumentSigner.LocaleEnum.En;
const reminderSettings = new ReminderSettings();
reminderSettings.reminderDays = 3;
reminderSettings.reminderCount = 5;
reminderSettings.enableAutoReminder = false;
const sendForSign = new SendForSign();
sendForSign.title = "SDK Document Test case";
sendForSign.message = "Testing document from SDK integration test case";
sendForSign.files = [fs.createReadStream("YOUR_FILE_PATH")];
sendForSign.disableExpiryAlert = false;
sendForSign.reminderSettings = reminderSettings;
sendForSign.enableReassign = true;
sendForSign.message = "Please sign this.";
sendForSign.signers = [documentSigner];
sendForSign.enablePrintAndSign = false;
sendForSign.autoDetectFields = false;
sendForSign.onBehalfOf = "david@cubeflakes.com";
sendForSign.enableSigningOrder = false;
sendForSign.useTextTags = false;
sendForSign.hideDocumentId = false;
sendForSign.expiryValue = 60;
sendForSign.disableEmails = false;
sendForSign.disableSMS = false;
async function sendDocument() {
    try {
        await documentApi.sendDocument(sendForSign);
        console.log("Document sent for signing successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
sendDocument();