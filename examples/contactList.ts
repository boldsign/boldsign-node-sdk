import { ContactsApi } from '../api/contactsApi';

const contactsApi = new ContactsApi();
contactsApi.setApiKey("YOUR_API_KEY");

var page = 1;
var pageSize = 10;
async function getContactList() {
    try {
        var contactListResponse = await contactsApi.contactUserList(page, pageSize);
        console.log("Contact list retrieved:", contactListResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
getContactList();