import { TemplateApi } from '../api/templateApi';
import { EmbeddedTemplateEditRequest } from '../model';

const templateApi = new TemplateApi();
templateApi.setApiKey("YOUR_API_KEY");

var embeddedEditTemplateRequest = new EmbeddedTemplateEditRequest();
embeddedEditTemplateRequest.showToolbar = true;
embeddedEditTemplateRequest.showNavigationButtons = false;
embeddedEditTemplateRequest.showPreviewButton = true;
embeddedEditTemplateRequest.showSaveButton = false;
embeddedEditTemplateRequest.showCreateButton = false;
embeddedEditTemplateRequest.showTooltip = false;
var templateId = "YOUR_TEMPLATE_ID";

async function getEmbeddedTemplateEditUrl() {
    try {
        var embeddedEditTemplateResponse = await templateApi.getEmbeddedTemplateEditUrl(templateId, embeddedEditTemplateRequest);
        console.log("Template Edit URL:", embeddedEditTemplateResponse);
    } catch (error) {
        console.error('Error occurred while calling the API:', error);
    }
}
getEmbeddedTemplateEditUrl();