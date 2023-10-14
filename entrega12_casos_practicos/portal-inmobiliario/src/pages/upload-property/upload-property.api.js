import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const uploadProperty = (property) =>
  Axios.put(`${url}/${property.id}`, property).then(({ data }) => data);

export const insertProperty = (property) =>
  Axios.post(`${url}/${property.id}`, property).then(({ data }) => data);
