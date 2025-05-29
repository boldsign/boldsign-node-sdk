import { ContactsApi } from '../api/contactsApi';
import { ContactDetails, PhoneNumber } from '../model';

const contactsApi = new ContactsApi();
contactsApi.setApiKey("YOUR_API_KEY");

var contactDetails = new ContactDetails();
contactDetails.name = "LutherCooper";
contactDetails.email = "luthercooper@cubeflakes.com";
contactDetails.jobTitle = "Developer";
contactDetails.companyName = "CubeFlakes";
var phoneNumber = new PhoneNumber();
phoneNumber.countryCode = "+91";
phoneNumber.number = "8807799764";
contactDetails.phoneNumber = phoneNumber;
var contact = [contactDetails];

async function createContact() {
    try {
        var createContactResponse = await contactsApi.createContact(contact);
        console.log("Contacts created successfully:", createContactResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
createContact();