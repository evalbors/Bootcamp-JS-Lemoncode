import Axios from 'axios';

const urlMovements = `${process.env.BASE_API_URL}/movements`;
export const getMovements = () =>
  Axios.get(urlMovements).then(({ data }) => data);

const urlAccountList = `${process.env.BASE_API_URL}/account-list`;
export const getAccountList = () =>
  Axios.get(urlAccountList).then(({ data }) => data);
