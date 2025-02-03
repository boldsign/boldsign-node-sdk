import { CustomFieldApi } from '../api/customFieldApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const customFieldApi = new CustomFieldApi(BaseUrl);
customFieldApi.setApiKey("YOUR_API_KEY");

var brandId = "YOUR_BRAND_ID";
async function CustomFieldList() {
    try {
        var customFieldListResponse = await customFieldApi.customFieldsList(brandId);
        console.log("Custom field list:", customFieldListResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
CustomFieldList();