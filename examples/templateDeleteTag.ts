import { TemplateApi } from '../api/templateApi';
import { TemplateTag } from '../model';

const BaseUrl: string = "https://staging-api.boldsign.com";
const templateApi = new TemplateApi(BaseUrl);
templateApi.setApiKey("YOUR_API_KEY");

var deleteTag = new TemplateTag();
deleteTag.templateId = "YOUR_TEMPLATE_ID";
deleteTag.documentLabels = ["test", "api"];
deleteTag.templateLabels = ["test", "api"];

async function deleteTagFromTemplate() {
    try {
      await templateApi.deleteTag(deleteTag);
      console.log("Tag deleted successfully!");
    } catch (error) {
      console.error("Error occurred while calling the API:", error);
    }
}
deleteTagFromTemplate();