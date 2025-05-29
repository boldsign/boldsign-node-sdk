import { CustomFieldApi } from '../api/customFieldApi';

const customFieldApi = new CustomFieldApi();
customFieldApi.setApiKey("YOUR_API_KEY");

var brandId = "YOUR_BRAND_ID";
async function CustomFieldList() {
    try {
        var customFieldListResponse = await customFieldApi.customFieldsList(brandId);
        console.log("Custom field list:", customFieldListResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
CustomFieldList();