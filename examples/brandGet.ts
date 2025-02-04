import { BrandingApi } from '../api/brandingApi';

const brandingApi = new BrandingApi();
brandingApi.setApiKey("YOUR_API_KEY");

var brandId = "YOUR_BRAND_ID";
async function getBrandDetails() {
    try {
        var brandDetailsResponse = await brandingApi.getBrand(brandId);
        console.log("Brand Details:", brandDetailsResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getBrandDetails();