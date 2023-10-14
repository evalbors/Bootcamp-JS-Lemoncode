import { updateProperty, insertProperty } from './upload-property.api';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onSetValues,
} from '../../common/helpers';
import { formValidation } from './update-property.validations';
import { history } from '../../core/router/history';
import {
  mapGeneralDataVmToApi,
  mapGeneralDataApiToVm,
} from './update-property.mappers';

const params = history.getParams();

let generalData = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  //saleTypes: [],
};

const isEditMode = Boolean(params.id);
if (isEditMode) {
  getAccount(params.id).then((api) => {
    generalData = mapGeneralDataApiToVm(api);
    onSetValues(generalData);
  });
}

onUpdateField('title', (event) => {
  const value = event.target.value;
  generalData = {
    ...generalData,
    title: value,
  };

  formValidation.validateField('title', generalData.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  generalData = {
    ...generalData,
    notes: value,
  };

  formValidation.validateField('notes', generalData.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  generalData = {
    ...generalData,
    email: value,
  };

  formValidation.validateField('email', generalData.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (event) => {
  const value = event.target.value;
  generalData = {
    ...generalData,
    phone: value,
  };

  formValidation.validateField('phone', generalData.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (event) => {
  const value = event.target.value;
  generalData = {
    ...generalData,
    price: value,
  };

  formValidation.validateField('phone', generalData.price).then((result) => {
    onSetError('price', result);
  });
});

const onSave = () => {
  const apiGeneralData = mapGeneralDataVmToApi(generalData);
  return isEditMode
    ? updateProperty(apiGeneralData)
    : insertProperty(apiGeneralData);
};

onSubmitForm('save-button', () => {
  console.log({ generalData });
  formValidation.validateForm(generalData).then((result) => {
    onSetFormErrors(result);

    if (result.succeeded) {
      onSave().then(() => {
        history.back();
      });
    }
  });
});

let checks = document.querySelectorAll('.salesType');
let button = document.getElementById('save-button');

button.addEventListener('click', () => {
  checks.forEach((check) => {
    console.log(check.value);
  });
});
