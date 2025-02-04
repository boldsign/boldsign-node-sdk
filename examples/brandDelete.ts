import { BrandingApi } from '../api/brandingApi';

const brandingApi = new BrandingApi();
brandingApi.setApiKey("YOUR_API_KEY");

var brandId = "YOUR_BRAND_ID";
async function deleteBrand() {
    try {
        await brandingApi.deleteBrand(brandId);
        console.log("Brand deleted successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
deleteBrand();