import { TemplateApi } from '../api/templateApi';

const templateApi = new TemplateApi();
templateApi.setApiKey("YOUR_API_KEY");

var page = 1;
var pageSize = 10;
async function listTemplates() {
  try {
    var listTemplateResponse = await templateApi.listTemplates(page, "all", pageSize);
    console.log("Templates listed successfully:", listTemplateResponse);
  } catch (error:any) {
    console.error("Error occurred while calling the API:", error.message);
  }
}
listTemplates();