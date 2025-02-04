import { TemplateApi } from '../api/templateApi';

const templateApi = new TemplateApi();
templateApi.setApiKey("YOUR_API_KEY");

var templateId = "YOUR_TEMPLATE_ID";
async function getTemplateProperties() {
    try {
        var propertyResponse = await templateApi.getProperties(templateId);
        console.log("Template Properties:", propertyResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getTemplateProperties();