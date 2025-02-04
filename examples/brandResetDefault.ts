import { BrandingApi } from '../api/brandingApi';

const brandingApi = new BrandingApi();
brandingApi.setApiKey("YOUR_API_KEY");

var brandId = "YOUR_BRAND_ID";
async function resetDefaultBrand() {
    try {
        await brandingApi.resetDefaultBrand(brandId);
        console.log("Brand reset as default successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
resetDefaultBrand();