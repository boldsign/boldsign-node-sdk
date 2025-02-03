import { TemplateApi } from '../api/templateApi';
import { FormField, MergeAndSendForSignForm, Rectangle, Role } from '../model';

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
role.signerType =  Role.SignerTypeEnum.Signer;
role.signerRole = "Manager";
role.formFields = [formField];

var mergeAndSendForsign = new MergeAndSendForSignForm();
mergeAndSendForsign.title = "Invitation form";
mergeAndSendForsign.message = "Kindly review and sign this.";
mergeAndSendForsign.roles = [role];
mergeAndSendForsign.templateIds =  ["YOUR_TEMPLATE_ID", "YOUR_TEMPLATE_ID"];

async function sendDocumentUsingMultipleTemplates() {
    try {
        var multipleTemplateResponse = await templateApi.mergeAndSend(mergeAndSendForsign);
        console.log("Document sent for signing using multiple templates successfully", multipleTemplateResponse);
    } catch (error) {
        console.error('Error occurred while calling the API:', error);
    }
}
sendDocumentUsingMultipleTemplates();