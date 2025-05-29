import { TemplateApi } from '../api/templateApi';
import { CreateTemplateRequest, TemplateRole } from '../model';
import * as fs from 'fs';

const templateApi = new TemplateApi();
templateApi.setApiKey("YOUR_API_KEY");
var role = new TemplateRole();
role.index = 1;
role.name = "Signer";
var createEmbeddedTemplateRequest = new CreateTemplateRequest();
createEmbeddedTemplateRequest.title = "Testing Embedded Template";
createEmbeddedTemplateRequest.brandId = "YOUR_BRAND_ID";
createEmbeddedTemplateRequest.description = "Creating an embedded template for seamless signing";
createEmbeddedTemplateRequest.documentTitle = "Embedded Template Test";
createEmbeddedTemplateRequest.documentMessage = "Please review and sign the embedded document";
createEmbeddedTemplateRequest.enableReassign = true;
createEmbeddedTemplateRequest.allowNewRoles = true;
createEmbeddedTemplateRequest.roles = [role];
var documentFile = fs.createReadStream("YOUR_FILE_PATH");
createEmbeddedTemplateRequest.files = [documentFile];
async function createEmbeddedTemplate() {
    try {
        const createTemplateResponse = await templateApi.createEmbeddedTemplateUrl(createEmbeddedTemplateRequest);
        console.log("Embedded template created successfully:", createTemplateResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API for embedded template:", error.message);
    }
}
createEmbeddedTemplate();