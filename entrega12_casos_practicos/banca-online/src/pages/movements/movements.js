import { getMovements, getAccountList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsApiToVm, mapDataAccountToVM } from './movements.mappers';
import { onUpdateField, onSetValue } from '../../common/helpers';
import { history } from '../../core/router';

const setEvents = (movements) => {
  movements.forEach((movement) => {
    onUpdateField(`select-${movement.id}`, (event) => {
      const route = event.target.value;
      history.push(route);
      console.log({ movements });
    });
  });
};

getMovements().then((movements) => {
  const vmMovements = mapMovementsApiToVm(movements);
  addMovementRows(vmMovements);
  setEvents(vmMovements);
});

/* getAccountList().then((accountList) => {
  const vmAccountList = mapDataAccountToVM(accountList);

  onSetValue(vmAccountList);
});
 */
/*
balance
alias
iban
*/

/*
let movement = {
  id: '',
  description: '',
  amount: '',
  balance: '',
  transaction: '',
  realTransaction: '',
  accountId: '',
};
 */

/* Falta añadir los datos de accountData, y creo que es con onSetValue();
Ver el seudocódigo en mappers de movements*/

/* onUpdateField('iban', accountData.iban);
onUpdateField('balance', accountData.balance);
onUpdateField('alias', accountData.alias);
 */
