import {
  getPropertyList,
  getSaleTypeListUrl,
  getProvincesListUrl,
} from './property-list.api';
import { mapPropertyListFromApiToVM } from './property-list.mappers';
import { addPropertyRows } from './property-list.helpers';

getPropertyList().then((propertyList) => {
  const viewModelPropertyList = mapPropertyListFromApiToVM(propertyList);
  addPropertyRows(viewModelPropertyList);
});
