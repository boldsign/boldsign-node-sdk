import { TemplateApi } from '../api/templateApi';
import { EmbeddedCreateTemplateRequest, EmbeddedMergeTemplateFormRequest, EmbeddedSendTemplateFormRequest, Role} from '../model';
import * as fs from 'fs'; 

const templateApi = new TemplateApi();
templateApi.setApiKey("YOUR_API_KEY");

var role1 = new Role();
role1.signerEmail = "sivaramani.sivaraj@syncfusion.com";
role1.signerName = "Sivaramani";
role1.roleIndex = 1;
role1.signerType = Role.SignerTypeEnum.Signer;
role1.signerRole = "Manager";

var role2 = new Role();
role2.signerEmail = "john@gmail.com";
role2.signerName = "John";
role2.roleIndex = 2;
role2.signerType = Role.SignerTypeEnum.Signer;
role2.signerRole = "Employee";
var file = fs.createReadStream("examples/documents/agreement.pdf")
var embeddedMergeTemplateUrl = new EmbeddedMergeTemplateFormRequest();
embeddedMergeTemplateUrl.files = [file];
embeddedMergeTemplateUrl.title = "Template Request URL"
embeddedMergeTemplateUrl.roles= [role1,role2];
embeddedMergeTemplateUrl.templateIds = ["YOUR_TEMPLATE_ID1","YOUR_TEMPLATE_ID2"];


async function mergeEmbeddedTemplateRequestUrl() {
    try {
        var mergeTemplateUrl = await templateApi.mergeCreateEmbeddedRequestUrlTemplate(embeddedMergeTemplateUrl);
        console.log("Merge Embedded Template URL:", mergeTemplateUrl);
    } catch (error:any) {
        console.error('Error occurred while calling the API:', error.message);
    }
}
mergeEmbeddedTemplateRequestUrl();