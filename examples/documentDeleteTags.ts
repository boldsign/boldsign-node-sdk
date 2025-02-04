import { DocumentApi } from '../api/documentApi';
import { DocumentTags } from '../model';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

const documentTags = new DocumentTags();
documentTags.documentId = "YOUR_DOCUMENT_ID";
documentTags.tags = ["test", "api"];

async function deleteTagsFromDocument() {
    try {
        await documentApi.deleteTag(documentTags);
        console.log("Tags deleted successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
deleteTagsFromDocument();