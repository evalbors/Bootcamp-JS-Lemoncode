import {
  getPropertyList,
  getSaleTypeListUrl,
  getProvincesListUrl,
} from './property-list.api';
import {
  mapPropertyListFromApiToVM,
  mapFilterToQueryParams,
} from './property-list.mappers';
import {
  addPropertyRows,
  setOptions,
  clearPropertyRows,
} from './property-list.helpers';
import {
  roomOptions,
  bathroomOptions,
  minPriceOptions,
  maxPriceOptions,
} from './property-list-constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

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
  setOptions(roomOptions, 'select-room', 'Habitaciones');
  setOptions(bathroomOptions, 'select-bathroom', 'Baños');
  setOptions(minPriceOptions, 'select-min-price', 'Mín. (€)');
  setOptions(maxPriceOptions, 'select-max-price', 'Máx. (€)');
});

const loadPropertyList = (propertyList) => {
  const viewModelPropertyList = mapPropertyListFromApiToVM(propertyList);
  addPropertyRows(viewModelPropertyList);
};

// Vamos a modelar lo que queremos en la vista
let filter = {
  saleTypeId: '',
  provinceId: '',
  minRooms: '',
  minBathrooms: '',
  minPrice: '',
  maxPrice: '',
};

const changeFilterProperty = (obj, event) => {
  const value = event.target.value;
  obj = {
    ...obj,
    property: value,
  };
};

onUpdateField('select-sale-type', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    saleTypeId: value,
  };
});

onUpdateField('select-province', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    provinceId: value,
  };
});

onUpdateField('select-room', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minRooms: value,
  };
});

onUpdateField('select-bathroom', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minBathrooms: value,
  };
});

onUpdateField('select-min-price', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minPrice: value,
  };
});

onUpdateField('select-max-price', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    maxPrice: value,
  };
});

onSubmitForm('search-button', () => {
  const queryParams = mapFilterToQueryParams(filter);
  clearPropertyRows();
  getPropertyList(queryParams).then((propertyList) =>
    loadPropertyList(propertyList)
  );
  console.log({ filter });
});
