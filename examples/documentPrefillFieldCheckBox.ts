import { DocumentApi } from '../api/documentApi';
import { PrefillField, PrefillFieldRequest } from '../model';

const BaseUrl: string = "https://staging-api.boldsign.com";
const documentApi = new DocumentApi(BaseUrl);
documentApi.setApiKey("YOUR_API_KEY");

var prefillField = new PrefillField();
prefillField.id = "CheckBox1";
prefillField.value = "Prefill value";

var prefillFieldRequest = new PrefillFieldRequest();
prefillFieldRequest.fields = [prefillField];
var documentId = "YOUR_DOCUMENT_ID";

async function prefillDocumentFields() {
    try {
        await documentApi.prefillFields(documentId, prefillFieldRequest);
        console.log("Fields have been prefilled successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
prefillDocumentFields();