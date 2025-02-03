import { TemplateApi } from '../api/templateApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const templateApi = new TemplateApi(BaseUrl);
templateApi.setApiKey("YOUR_API_KEY");

var templateId = "YOUR_TEMPLATE_ID";
async function deleteTemplate() {
    try {
        await templateApi.deleteTemplate(templateId);
        console.log("Template deleted successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
deleteTemplate();