// -- printClientsAccounts

// const getClients = require('./data-business.js');
import { getClients } from './data-business.js';
import { getClientElement } from './client-business';

function printClientsAccounts() {
  const clients = getClients();
  const ul = document.createElement('ul');
  for (let client of clients) {
    const element = getClientElement(client);
    ul.appendChild(element);
  }
  document.getElementById('root').appendChild(ul);
}

export { printClientsAccounts };

/* module.exports = {
  printClientsAccounts: printClientsAccounts,
}; */
