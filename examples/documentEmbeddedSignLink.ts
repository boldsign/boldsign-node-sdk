import { DocumentApi } from '../api/documentApi';

const documentApi = new DocumentApi();
documentApi.setApiKey("YOUR_API_KEY");

var documentId = "YOUR_DOCUMENT_ID";
var signerEmail = "david@cubeflakes.com";
var countryCode = "+91";
var phoneNumber = "6381261236";
var dateType: string = "2025-01-22";
var date: Date = new Date(dateType);
var signLinkValidTill = date;
var redirectUrl = "https://www.syncfusion.com/";

async function getEmbeddedSignLink() {
    try {
        var embeddedSignLinkResponse = await documentApi.getEmbeddedSignLink(documentId, signerEmail, countryCode, phoneNumber, signLinkValidTill, redirectUrl);
        console.log("Embedded Sign Link created successfully:", embeddedSignLinkResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
getEmbeddedSignLink();