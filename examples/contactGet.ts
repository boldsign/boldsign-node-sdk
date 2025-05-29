import { ContactsApi } from '../api/contactsApi';

const contactsApi = new ContactsApi();
contactsApi.setApiKey("YOUR_API_KEY");

var contactId = "YOUR_CONTACT_ID";
async function getContactDetails() {
    try {
        var contactDetailsResponse = await contactsApi.getContact(contactId);
        console.log("Contact details retrieved successfully!:", contactDetailsResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
getContactDetails();