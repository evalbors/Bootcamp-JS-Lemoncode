import {
  getPropertyList,
  getSaleTypeListUrl,
  getProvincesListUrl,
} from './property-list.api';
import { mapPropertyListFromApiToVM } from './property-list.mappers';
import { addPropertyRows, setOptions } from './property-list.helpers';

/* Después del then...
    const propertyList = resultList[0];
    const saleTypeList = resultList[1];
    const provinceList = resultList[2];

); Abajo lo abraviamos más: */

/*
    const [propertyList, saleTypeList, provinceList] = resultList;
  }
); Abajo lo abraviamos más todavía: */

Promise.all([
  getPropertyList(),
  getSaleTypeListUrl(),
  getProvincesListUrl(),
]).then(([propertyList, saleTypeList, provinceList]) => {
  loadPropertyList(propertyList);
  setOptions(saleTypeList, 'select-sale-type', 'Tipo');
  setOptions(provinceList, 'select-province', 'Provincia');
});

const loadPropertyList = (propertyList) => {
  const viewModelPropertyList = mapPropertyListFromApiToVM(propertyList);
  addPropertyRows(viewModelPropertyList);
};
