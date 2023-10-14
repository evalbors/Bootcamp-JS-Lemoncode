import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;
export const getAccountList = () => Axios.get(url).then(({ data }) => data);

// el final es diferente a login.api.js;
