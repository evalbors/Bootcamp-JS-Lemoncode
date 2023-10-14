import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onSetValues,
} from '../../common/helpers';
import { formValidation } from './account.validations';
import { history } from '../../core/router';
import { insertAccount, getAccount, updateAccount } from './account.api';
import { mapAccountVmToApi, mapAccountApiToVm } from './account.mappers';

const params = history.getParams();
const isEditMode = Boolean(params.id);
if (isEditMode) {
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountApiToVm(apiAccount);
    onSetValues(account);
  });
}
// apiAccount puede ser patata

let account = {
  id: '',
  type: '',
  alias: '',
};

onUpdateField('type', (event) => {
  const value = event.target.value;
  account = {
    ...account,
    type: value,
  };

  formValidation.validateField('type', account.type).then((result) => {
    onSetError('type', result);
  });
});

onUpdateField('alias', (event) => {
  const value = event.target.value;
  account = {
    ...account,
    alias: value,
  };

  formValidation.validateField('alias', account.alias).then((result) => {
    onSetError('alias', result);
  });
});

const onSave = () => {
  const apiAccount = mapAccountVmToApi(account);
  return isEditMode ? updateAccount(apiAccount) : insertAccount(apiAccount);
};
onSubmitForm('save-button', () => {
  formValidation.validateForm(account).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      onSave().then(() => {
        history.back();
      });
    }
  });
});
