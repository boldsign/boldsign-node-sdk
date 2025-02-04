import { DocumentApi } from '../api/documentApi';
import { DocumentTags } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var documentTags = new DocumentTags();
documentTags.documentId = "YOUR_DOCUMENT_ID";
documentTags.tags = ["test", "api"];

async function addTagsToDocument() {
    try {
        await documentApi.addTag(documentTags);
        console.log("Tags added successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
addTagsToDocument();