import { getPropertyDetail, getEquipmentsList } from './property-detail.api';
import { mapPropertyApiToVm } from './property-detail.mappers';
import { history } from '../../core/router/history';
import { setPropertyValues } from './property-detail.helpers';

const params = history.getParams();
/* const isId = Boolean(params);

if (isId) {
  getPropertyDetail().then((propertyDetail) => {
    console.log({ propertyDetail });
    mapPropertyApiToVm(propertyDetail);
    console.log({ propertyDetail });
    setPropertyValues(propertyDetail);
  });
} */

let propertyDetail = {
  id: '',
  title: '',
  notes: '',
  city: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: '',
  equipmentIds: '',
  price: '',
  mainImage: '',
  images: '',
};

/* const loadProperty = getPropertyDetail(params.id).then((detail) => {
  propertyDetail = mapPropertyApiToVm(detail);
  setPropertyValues(propertyDetail);
});

const loadEquipment = getEquipmentsList(params.id).then((equipment) => {
  propertyDetail.equipmentIds = equipment.name;
}); */

Promise.all([getPropertyDetail(params.id), getEquipmentsList()]).then(
  ([propertyDetail, equipmentIds]) => {
    propertyDetail = mapPropertyApiToVm(propertyDetail);
    setPropertyValues(propertyDetail);
  }
);
