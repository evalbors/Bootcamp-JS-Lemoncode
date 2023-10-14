import {
  getPropertyDetail,
  getEquipmentsList,
  sendMessage,
} from './property-detail.api';
import { mapPropertyApiToVm } from './property-detail.mappers';
import { history } from '../../core/router/history';
import { setPropertyValues } from './property-detail.helpers';
import { formValidation } from './property-detail.validations';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
const params = history.getParams();

let propertyDetail = {
  title: '',
  notes: '',
  city: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: '',
  equipments: '',
  price: '',
  mainImage: '',
  images: '',
};

let equipmentDetail = {
  id: '',
  name: '',
};

const loadProperty = (propertyDetail, equipmentDetail) => {
  const property = mapPropertyApiToVm(propertyDetail, equipmentDetail);
  setPropertyValues(property);
};

Promise.all([getPropertyDetail(params.id), getEquipmentsList()]).then(
  ([propertyDetail, equipmentDetail]) => {
    loadProperty(propertyDetail, equipmentDetail);
  }
);

let contact = {
  email: '',
  message: '',
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  contact = {
    ...contact,
    email: value,
  };

  formValidation.validateField('email', contact.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  contact = {
    ...contact,
    message: value,
  };

  formValidation.validateField('message', contact.message).then((result) => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  console.log({ contact });
  formValidation.validateForm(contact).then((result) => {
    onSetFormErrors(result);
    sendMessage(message);
  });
});
