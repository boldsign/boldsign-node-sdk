
import { BrandingApi } from '../api/brandingApi';
import * as fs from 'fs';

const createBrandApi = new BrandingApi();
createBrandApi.setApiKey("YOUR_API_KEY");
const brandName = "NodeSDK";
const logoFilePath = "YOUR_FILE_PATH";
const brandLogo = fs.createReadStream(logoFilePath);
const backgroundColor = "Blue";
const buttonColor = "Black";
const buttonTextColor = "White";
const emailDisplayName = "{SenderName} from Syncfusion";
async function createBrand() {
    try {
        const createBrandApiResponse = await createBrandApi.createBrand(
            brandName,
            brandLogo,
            backgroundColor,
            buttonColor,
            buttonTextColor,
            emailDisplayName
        );
        console.log("Brand created successfully:", createBrandApiResponse.brandId);
    } catch (error:any) {
        console.error("Error occurred while creating the brand:", error.message);
    }
}
createBrand();