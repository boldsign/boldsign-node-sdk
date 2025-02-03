import { TemplateApi } from '../api/templateApi';
import { FormField, Rectangle, ReminderSettings, Role, SendForSignFromTemplateForm } from '../model';
import * as fs from 'fs'; 

const BaseUrl: string = "https://staging-api.boldsign.com";
const templateApi = new TemplateApi(BaseUrl);
templateApi.setApiKey("YOUR_API_KEY");

var formField = new FormField();
formField.fieldType = FormField.FieldTypeEnum.Signature;
formField.pageNumber = 1;
const bounds = new Rectangle();
bounds.x = 100;
bounds.y = 50;
bounds.width = 100;
bounds.height = 100;
formField.bounds = bounds;

var role = new Role();
role.roleIndex = 50;
role.signerName = "Richard";
role.signerEmail = "richard@cubeflakes.com";
role.signerOrder = 1;
role.enableEmailOTP = false;
role.signerType =  Role.SignerTypeEnum.Signer;
role.signerRole = "Manager";
role.privateMessage = "Please check and sign the document";
role.formFields = [formField];

var templateId = "YOUR_TEMPLATE_ID";

var sendForSignFromTemplate = new SendForSignFromTemplateForm();
var files = fs.createReadStream("YOUR_FILE_PATH");
sendForSignFromTemplate.files = [files];
sendForSignFromTemplate.title = "Invitation form";
sendForSignFromTemplate.message = "Kindly review and sign this.";
sendForSignFromTemplate.roles = [role];
sendForSignFromTemplate.disableEmails = false;
sendForSignFromTemplate.disableSMS = false;
sendForSignFromTemplate.hideDocumentId = true;
sendForSignFromTemplate.labels = ["Invitation", "Form", "Test"];
var reminderSettings = new ReminderSettings();
reminderSettings.reminderDays = 3;
reminderSettings.reminderCount = 5;
reminderSettings.enableAutoReminder = false;
sendForSignFromTemplate.reminderSettings = reminderSettings;
sendForSignFromTemplate.expiryValue = 60;
sendForSignFromTemplate.disableExpiryAlert = true;
sendForSignFromTemplate.enablePrintAndSign = true;
sendForSignFromTemplate.enableReassign = true;
sendForSignFromTemplate.enableSigningOrder = true;

async function sendDocumentFromTemplate() {
    try {
        var sendDocumentTemplateResponse = await templateApi.sendUsingTemplate(templateId, sendForSignFromTemplate);
        console.log("Document sent for signing using template successfully:", sendDocumentTemplateResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
sendDocumentFromTemplate();