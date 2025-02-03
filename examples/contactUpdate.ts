import { ContactsApi } from '../api/contactsApi';
import { ContactDetails, PhoneNumber } from '../model';

const BaseUrl: string = "https://staging-api.boldsign.com";
const contactsApi = new ContactsApi(BaseUrl);
contactsApi.setApiKey("YOUR_API_KEY");

var contactId = "YOUR_CONTACT_ID";
var contactDetails = new ContactDetails();
contactDetails.name = "Test_Engineer";
contactDetails.email = "test1711@gmail.com";
contactDetails.jobTitle = "Tester";
contactDetails.companyName = "Flakes";
var phoneNumber = new PhoneNumber();
phoneNumber.countryCode = "+1";
phoneNumber.number = "2015550123";
contactDetails.phoneNumber = phoneNumber;

async function updateContact() {
    try {
        await contactsApi.updateContact(contactId, contactDetails);
        console.log("Contact updated successfully!");
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
updateContact();