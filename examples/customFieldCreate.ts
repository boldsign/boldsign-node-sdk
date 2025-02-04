import { CustomFieldApi } from '../api/customFieldApi';
import { BrandCustomFieldDetails, CustomFormField } from '../model';

const customFieldApi = new CustomFieldApi();
customFieldApi.setApiKey("YOUR_API_KEY");

var formField = new CustomFormField();
formField.fieldType = CustomFormField.FieldTypeEnum.Signature;
formField.placeHolder = "string";
formField.isRequired = true;

var customFieldDetails = new BrandCustomFieldDetails();
customFieldDetails.fieldName = "string";
customFieldDetails.fieldDescription = "string";
customFieldDetails.fieldOrder = 2;
customFieldDetails.brandId = "YOUR_BRAND_ID";
customFieldDetails.sharedField = true;
customFieldDetails.formField = formField;

async function createCustomField() {
    try {
        var createCustomFieldResponse = await customFieldApi.createCustomField(customFieldDetails);
        console.log("Custom field created successfully:", createCustomFieldResponse);
    } catch (error) {
        console.error("Error occurred while calling the API:", error);
    }
}
createCustomField();