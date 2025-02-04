import { BrandingApi } from '../api/brandingApi';
import * as fs from 'fs';

const brandingApi = new BrandingApi();
brandingApi.setApiKey("YOUR_API_KEY");
var brandId = "YOUR_BRAND_ID";
var brandName = "Node-SDK-Test";
const brandLogo = fs.createReadStream("YOUR_FILE_PATH");
var backgroundColor = "Blue";
var buttonColor = "Black";
var buttonTextColor = "White";
var emailDisplayName = "david@cubeflakes.com";
async function updateBrand() {
    try {
        const updateBrandApiResponse = await brandingApi.editBrand(brandId, brandName, brandLogo, backgroundColor, buttonColor, buttonTextColor, emailDisplayName);
        console.log("Brand updated successfully:", updateBrandApiResponse.body.brandId);
    } catch (error) {
        console.error("Error occurred while updating the brand:", error);
    }
}
updateBrand();