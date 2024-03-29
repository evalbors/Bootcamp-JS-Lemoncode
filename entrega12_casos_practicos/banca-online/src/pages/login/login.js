import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';

let login = {
  user: '',
  password: '',
};

onUpdateField('user', (event) => {
  const value = event.target.value;
  //login.user = value;
  login = {
    ...login,
    user: value,
  };
  //console.log('usuario');

  formValidation.validateField('user', login.user).then((result) => {
    onSetError('user', result);
  });
});

onUpdateField('password', (event) => {
  const value = event.target.value;
  //login.password = value;
  login = {
    ...login,
    password: value,
  };
  // console.log('password');

  formValidation.validateField('password', login.password).then((result) => {
    onSetError('password', result);
  });
});

const onNavigate = (isValid) => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Usuario y/o contraseña no válidos');
  }
};

onSubmitForm('login-button', () => {
  // console.log({ login });
  formValidation.validateForm(login).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      isValidLogin(login).then((isValid) => {
        //console.log({ isValid });
        onNavigate(isValid);
      });
    }
  });
});
