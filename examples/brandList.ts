import { BrandingApi } from '../api/brandingApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const brandingApi = new BrandingApi(BaseUrl);
brandingApi.setApiKey("YOUR_API_KEY");

async function getBrandList() {
    try {
        var brandListResponse = await brandingApi.brandList();
        console.log("Brand List:", brandListResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getBrandList();