import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
export const getPropertyList = () =>
  Axios.get(url).then((response) => {
    return response.data;
  });

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
export const getSaleTypeListUrl = () =>
  Axios.get(saleTypeListUrl).then((response) => {
    return response.data;
  });

const provincesListUrl = `${process.env.BASE_API_URL}/provinces`;
export const getProvincesListUrl = () =>
  Axios.get(provincesListUrl).then((response) => {
    return response.data;
  });
