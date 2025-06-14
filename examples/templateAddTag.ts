import { TemplateApi } from '../api/templateApi';
import { TemplateTag } from '../model';

const templateApi = new TemplateApi();
templateApi.setApiKey("YOUR_API_KEY");

var addTag = new TemplateTag();
addTag.templateId = "YOUR_TEMPLATE_ID";
addTag.documentLabels = ["test", "api"];
addTag.templateLabels = ["test", "api"];

async function addTagToTemplate() {
    try {
      await templateApi.addTag(addTag);
      console.log("Tag added successfully!");
    } catch (error:any) {
      console.error("Error occurred while calling the API:", error.message);
    }
}
addTagToTemplate();