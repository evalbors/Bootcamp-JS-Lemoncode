// -- getClientAccountsElement -- getAccountElement
// const getNodeStyle = require('./style-business.js');
import { getNodeStyle } from './style-business.js';

function getClientAccountsElement(accounts) {
  const ul = document.createElement('ul');
  for (let account of accounts) {
    ul.append(getAccountElement(account));
  }
  return ul;
}

// esta función no hace falta exportarla ya que solo la usa getClientAccountsElement
function getAccountElement(account) {
  const li = document.createElement('li');
  li.style = getNodeStyle(account);
  li.append('[Saldo: ' + account.money + '] IBAN: ' + account.iban);
  return li;
}

/* module.exports = {
  getClientAccountsElement: getClientAccountsElement,
}; */
export { getClientAccountsElement };
