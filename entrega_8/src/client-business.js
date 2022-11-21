// -- getClientElement -- getClientNode --
// const getClientAccountsElement = require('./account-business.js');
// const getAccounts = require('./data-business.js');
import { getClientAccountsElement } from './account-business.js';
import { getAccounts } from './data-business.js';

function getClientElement(client) {
  const allAccounts = getAccounts();
  const clientAccounts = [];
  for (let account of allAccounts) {
    if (account.clientId === client.id) {
      clientAccounts.push(account);
    }
  }
  const node = getClientNode(client);
  const ul = getClientAccountsElement(clientAccounts);
  node.appendChild(ul);
  return node;
}
function getClientNode(client) {
  const li = document.createElement('li');
  li.append(getFullName(client));
  return li;
}
function getFullName(client) {
  return client.first_name + ' ' + client.last_name;
}

// Sol se exporta getClientElement
// porque el resto no se usan fuera,
// solo las usa aquí getClientElement

/* module.exports = {
  getClientElement: getClientElement,
}; */
export { getClientElement };
