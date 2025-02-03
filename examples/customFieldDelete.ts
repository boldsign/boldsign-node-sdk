import { CustomFieldApi } from '../api/customFieldApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const customFieldApi = new CustomFieldApi(BaseUrl);
customFieldApi.setApiKey("YOUR_API_KEY");

var customFieldId = "YOUR_CUSTOMFIELD_ID";
async function deleteCustomField() {
    try {
        await customFieldApi.deleteCustomField(customFieldId);
        console.log("Custom field deleted successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
deleteCustomField();