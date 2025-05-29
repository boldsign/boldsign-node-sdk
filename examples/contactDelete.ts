import { ContactsApi } from '../api/contactsApi';

const contactsApi = new ContactsApi();
contactsApi.setApiKey("YOUR_API_KEY");

var contactId = "YOUR_CONTACT_ID";
async function deleteContact() {
    try {
        await contactsApi.deleteContacts(contactId);
        console.log("Contact deleted successfully!");
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
deleteContact();