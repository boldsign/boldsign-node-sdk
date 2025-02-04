import { TemplateApi } from '../api/templateApi';
import { CreateTemplateRequest, TemplateRole } from '../model';
import * as fs from 'fs';

const templateApi = new TemplateApi();
templateApi.setApiKey("YOUR_API_KEY");
var role = new TemplateRole();
role.index = 1;
role.name = "Signer";
var createTemplateRequest = new CreateTemplateRequest();
createTemplateRequest.title = "Testing node sdk";
createTemplateRequest.brandId = "YOUR_BRAND_ID";
createTemplateRequest.description = "Testing integration test case";
createTemplateRequest.documentTitle = "Node sdk test case";
createTemplateRequest.documentMessage = "Please check and sign";
createTemplateRequest.enableReassign = true;
createTemplateRequest.allowNewRoles = true;
createTemplateRequest.roles = [role];
var documentFile = fs.createReadStream("YOUR_FILE_PATH");
createTemplateRequest.files = [documentFile];
async function createTemplate() {
  try {
    const createTemplateResponse = await templateApi.createTemplate(createTemplateRequest);
    console.log("Template created successfully:", createTemplateResponse);
  } catch (error) {
    console.error("Error occurred while calling the API:", error);
  }
}
createTemplate();