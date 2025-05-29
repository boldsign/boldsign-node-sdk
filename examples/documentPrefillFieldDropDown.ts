import { DocumentApi } from '../api/documentApi';
import { PrefillField, PrefillFieldRequest } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

const prefillField = new PrefillField();
prefillField.id = "Dropdown1";
prefillField.value = "Prefill value";

const prefillFieldRequest = new PrefillFieldRequest();
prefillFieldRequest.fields = [prefillField];
var documentId = "YOUR_DOCUMENT_ID";

async function prefillDocumentFields() {
    try {
        await documentApi.prefillFields(documentId, prefillFieldRequest);
        console.log("Fields have been prefilled successfully!");
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
prefillDocumentFields();