// aquí irán las llamadas api al servidor
import Axios from 'axios';
// otra manera sería con el método de js el fetch, más sencillo con axios

const url = `${process.env.BASE_API_URL}/login`;

// get: recuperar info
// post: envía info, introduce datos
// put: actualizar
// delete: eliminar

export const isValidLogin = (login) =>
  Axios.post(url, login).then((response) => {
    return response.data;
  });
