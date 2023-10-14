import { Validators, createFormValidation } from '@lemoncode/fonk';
// import { arrayRequired } from '@lemoncode/fonk-array-required-validator';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
    phone: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 9 },
        message: 'Teléfono no válido, mínimo 9 caracteres',
      },
    ],
    price: [{ validator: Validators.required, message: 'Campo requerido' }],
  },
};

export const formValidation = createFormValidation(validationSchema);
