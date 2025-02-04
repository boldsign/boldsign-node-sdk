import { TemplateApi } from '../api/templateApi';

const templateApi = new TemplateApi();
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