import { ContactsApi } from '../api/contactsApi';
import { ContactDetails, PhoneNumber } from '../model';

const BaseUrl: string = "https://staging-api.boldsign.com";
const contactsApi = new ContactsApi(BaseUrl);
contactsApi.setApiKey("YOUR_API_KEY");

var contactDetails = new ContactDetails();
contactDetails.name = "LutherCooper";
contactDetails.email = "luthercooper@cubeflakes.com";
contactDetails.jobTitle = "Developer";
contactDetails.companyName = "CubeFlakes";
var phoneNumber = new PhoneNumber();
phoneNumber.countryCode = "+1";
phoneNumber.number = "2015550123";
contactDetails.phoneNumber = phoneNumber;
var contact = [contactDetails];

async function createContact() {
    try {
        var createContactResponse = await contactsApi.createContact(contact);
        console.log("Contacts created successfully:", createContactResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
createContact();