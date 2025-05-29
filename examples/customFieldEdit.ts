import { CustomFieldApi } from '../api/customFieldApi';
import { BrandCustomFieldDetails, CustomFormField } from '../model';

const customFieldApi = new CustomFieldApi();
customFieldApi.setApiKey("YOUR_API_KEY");

var customFieldId = "YOUR_CUSTOMFIELD_ID";

var formField = new CustomFormField();
formField.fieldType = CustomFormField.FieldTypeEnum.Signature;
formField.placeHolder = "new_placeholder";
formField.isRequired = true;

var customFieldDetails = new BrandCustomFieldDetails();
customFieldDetails.fieldName = "string";
customFieldDetails.fieldDescription = "string";
customFieldDetails.fieldOrder = 2;
customFieldDetails.brandId = "YOUR_BRAND_ID";
customFieldDetails.sharedField = true;
customFieldDetails.formField = formField;

async function updateCustomField() {
    try {
        var updateCustomFieldResponse = await customFieldApi.editCustomField(customFieldId, customFieldDetails);
        console.log("Custom field updated successfully:", updateCustomFieldResponse);
    } catch (error:any) {
        console.error("Error occurred while calling the API:", error.message);
    }
}
updateCustomField();