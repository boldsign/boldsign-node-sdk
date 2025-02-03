import { TemplateApi } from '../api/templateApi';
import { TemplateTag } from '../model';

const BaseUrl: string = "https://staging-api.boldsign.com";
const templateApi = new TemplateApi(BaseUrl);
templateApi.setApiKey("YOUR_API_KEY");

var addTag = new TemplateTag();
addTag.templateId = "YOUR_TEMPLATE_ID";
addTag.documentLabels = ["test", "api"];
addTag.templateLabels = ["test", "api"];

async function addTagToTemplate() {
    try {
      await templateApi.addTag(addTag);
      console.log("Tag added successfully!");
    } catch (error) {
      console.error("Error occurred while calling the API:", error);
    }
}
addTagToTemplate();