// -- getNodeStyle
function getNodeStyle(account) {
  if (account.money < 0) {
    return 'color: red';
  }
  return 'color: blue';
}

export { getNodeStyle };
// crea un objeto donde dentro está la función
// esto es lo mismo que esto: export { getNodeStyle:getNodeStyle }

/*
para esta manera es necesario installa common js

module.exports = {
  getNodeStyle: getNodeStyle,
}; */
