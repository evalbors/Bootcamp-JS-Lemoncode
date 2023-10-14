import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/transfer`;

export const makeTransfer = (transfer) =>
  Axios.post(`${url}/${transfer.id}`, transfer).then(({ data }) => data);
