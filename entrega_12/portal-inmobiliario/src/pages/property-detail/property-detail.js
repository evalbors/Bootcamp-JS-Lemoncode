import { getPropertyDetail, getEquipmentsList } from './property-detail.api';
import { mapPropertyApiToVm } from './property-detail.mappers';
import { history } from '../../core/router/history';
import { setPropertyValues } from './property-detail.helpers';

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
