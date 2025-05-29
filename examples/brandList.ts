import { BrandingApi } from '../api/brandingApi';

const brandingApi = new BrandingApi();
brandingApi.setApiKey("YOUR_API_KEY");

async function getBrandList() {
    try {
        var brandListResponse = await brandingApi.brandList();
        console.log("Brand List:", brandListResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
getBrandList();