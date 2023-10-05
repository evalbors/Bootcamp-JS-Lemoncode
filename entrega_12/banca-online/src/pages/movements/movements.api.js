import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;
export const getMovements = () => Axios.get(url).then(({ data }) => data);


