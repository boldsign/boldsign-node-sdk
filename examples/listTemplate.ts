import { TemplateApi } from '../api/templateApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const templateApi = new TemplateApi(BaseUrl);
templateApi.setApiKey("YOUR_API_KEY");

var page = 1;
var pageSize = 10;
async function listTemplates() {
  try {
    var listTemplateResponse = await templateApi.listTemplates(page, "all", pageSize);
    console.log("Templates listed successfully:", listTemplateResponse);
  } catch (error) {
    console.error("Error occurred while calling the API:", error);
  }
}
listTemplates();