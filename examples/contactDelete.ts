import { ContactsApi } from '../api/contactsApi';

const contactsApi = new ContactsApi();
contactsApi.setApiKey("YOUR_API_KEY");

var contactId = "YOUR_CONTACT_ID";
async function deleteContact() {
    try {
        await contactsApi.deleteContacts(contactId);
        console.log("Contact deleted successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
deleteContact();