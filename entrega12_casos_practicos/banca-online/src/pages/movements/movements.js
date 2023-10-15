import { getMovements, getAccountListData } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsApiToVm, mapDataAccountToVM } from './movements.mappers';
import { onUpdateField, onSetValues } from '../../common/helpers';
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

getAccountListData().then((accountList) => {
  getMovements().then((movements) => {
    accountList.forEach((account) => {
      movements.forEach((movement) => {
        if (movement.accountId === account.id) {
          //console.log(account.alias);
          onSetValues(data);
          console.log({ data });
        }
      });
    });
  });
});

let data = {
  iban: '',
  balance: '',
  alias: '',
};
