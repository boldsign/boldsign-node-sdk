import { CustomFieldApi } from '../api/customFieldApi';

const customFieldApi = new CustomFieldApi();
customFieldApi.setApiKey("YOUR_API_KEY");

var brandId = "YOUR_BRAND_ID";
var dateType: string = "2025-01-22";
var date: Date = new Date(dateType);
var linkValidTill = date;

async function embedCustomField() {
    try {
        var embeddedCustomFieldResponse = await customFieldApi.embedCustomField(brandId, linkValidTill);
        console.log("Embedded custom field response:", embeddedCustomFieldResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
embedCustomField();