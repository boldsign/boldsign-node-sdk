import { ContactsApi } from '../api/contactsApi';

const BaseUrl: string = "https://staging-api.boldsign.com";
const contactsApi = new ContactsApi(BaseUrl);
contactsApi.setApiKey("YOUR_API_KEY");

var contactId = "YOUR_CONTACT_ID";
async function getContactDetails() {
    try {
        var contactDetailsResponse = await contactsApi.getContact(contactId);
        console.log("Contact details retrieved successfully!:", contactDetailsResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getContactDetails();