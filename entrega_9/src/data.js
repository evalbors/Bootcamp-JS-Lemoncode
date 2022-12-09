/* import axios from "axios";

function getCharacters() {
  return axios
    .get("https://breakingbadapi.com/api/characters")
    .then(response => {
      return response.data;
    });
}
 */
const API = "http://jsonplaceholder.typicode.com";
const BBAPI = "https://breakingbadapi.com/api/";

const getCharacters = () => {
  return fetch(`${API}/users`)
    .then(response => {
      response.json();
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Se ha producido un error en la api");
    });
};

export { getCharacters };
