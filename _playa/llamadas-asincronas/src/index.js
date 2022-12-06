import axios from 'axios';

axios
  .get('https://api.github.com/orgs/lemoncode/members')
  .then((response) => {
    return response.data;
  })
  .then((data) => {
    for (item of data) {
      document.write(item.login);
    }
  })
  .catch((error) => {
    document.write('Se ha producido un error');
  });

/*
fetch('https://www.breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    for (item of data) {
      document.write(item.name);
    }
  })
  .catch((error) => {
    document.write('Se ha producido un error en la api');
  });
 */
