import { getMovements } from './movements.api';
import { addMovementRows } from './movements.helpers';
// import { mapAccountListApiToVm } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

const setEvents = (movements) => {
  movements.forEach((movement) => {
    onUpdateField(`select-${movement.id}`, (event) => {
      const route = event.target.value;
      history.push(route);
    });
  });
};

getMovements().then((movements) => {
  addMovementRows(movements);
  setEvents(movements);
});
