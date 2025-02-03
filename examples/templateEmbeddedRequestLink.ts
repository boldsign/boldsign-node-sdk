import { TemplateApi } from '../api/templateApi';
import { EmbeddedCreateTemplateRequest, EmbeddedSendTemplateFormRequest, TemplateRole } from '../model';
import * as fs from 'fs'; 

const BaseUrl: string = "https://staging-api.boldsign.com";
const templateApi = new TemplateApi(BaseUrl);
templateApi.setApiKey("YOUR_API_KEY");

var role = new TemplateRole();
role.index = 1;
role.name = "Manager";

var embeddedSendTemplateFormRequest = new EmbeddedSendTemplateFormRequest();
embeddedSendTemplateFormRequest.title = "Api template";
embeddedSendTemplateFormRequest.roles = [role];
embeddedSendTemplateFormRequest.showToolbar = true;
embeddedSendTemplateFormRequest.showNavigationButtons = true;
embeddedSendTemplateFormRequest.showPreviewButton = true;
embeddedSendTemplateFormRequest.showSaveButton = true;
embeddedSendTemplateFormRequest.locale = EmbeddedCreateTemplateRequest.LocaleEnum.En;
embeddedSendTemplateFormRequest.showTooltip = false;
embeddedSendTemplateFormRequest.sendViewOption = EmbeddedSendTemplateFormRequest.SendViewOptionEnum.FillingPage;
var files = fs.createReadStream("YOUR_FILE_PATH");
embeddedSendTemplateFormRequest.files = [files];
var templateId = "YOUR_TEMPLATE_ID";

async function createEmbeddedTemplateRequestUrl() {
    try {
        var embeddedTemplateUrlResponse = await templateApi.createEmbeddedRequestUrlTemplate(templateId, embeddedSendTemplateFormRequest);
        console.log("Embedded Template URL:", embeddedTemplateUrlResponse);
    } catch (error) {
        console.error('Error occurred while calling the API:', error);
    }
}
createEmbeddedTemplateRequestUrl();