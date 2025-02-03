import { TemplateApi } from '../api/templateApi';
import { EditTemplateRequest } from '../model';

const BaseUrl: string = "https://staging-api.boldsign.com";
const templateApi = new TemplateApi(BaseUrl);
templateApi.setApiKey("YOUR_API_KEY");

var editTemplateRequest = new EditTemplateRequest();
editTemplateRequest.title = "Updated Template Title";
editTemplateRequest.description = "Updated description for the template";
editTemplateRequest.documentMessage = "Updated document message for signers";
editTemplateRequest.enableReassign = true;
var templateId = "YOUR_TEMPLATE_ID";

async function editTemplate() {
    try {
        await templateApi.editTemplate(templateId, editTemplateRequest);
        console.log("Template edited successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
editTemplate();