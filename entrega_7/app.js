console.log('✅ Caso 1');
// Dado este IBAN: ES6600190020961234567890
// Validar que se informa con dos letras, y los números correspondientes.
const IBAN = 'ES6600190020961234567890';
function validacionFormato(e) {
  const re = /^\D\D\d{22}$/;
  return re.test(e);
}
console.log(validacionFormato(IBAN));

console.log('✅ Caso 2');
// Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
const IBAN_1 = 'ES6600190020961234567890';
const IBAN_2 = 'ES66 0019 0020 9612 3456 7890';
function validacionFormatoConEspacios(e) {
  const re = /^\D\D\d\d\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
  return re.test(e);
}
console.log(validacionFormatoConEspacios(IBAN_1));
console.log(validacionFormatoConEspacios(IBAN_2));

console.log('✅Caso 3');
// Vamos a extraer el código de páis y el dígito de control.
// Validar matrícula coche
// 3.1 Vamos a validar una matrícula de coche moderna,
// esta compuesta por 4 digitos y tres letras, patrones a validar:
// 2021 GMD
// 2345-GMD
// 4532BDB
// 0320-AAA
// 3.2 Vamos a extraer por un lado la parte numérica y por otro las letras.

function validacionFormatoMatricula(e) {
  const re = /^\d{4}(\s|-)?\D{3}$/;
  return re.test(e);
}
const matricula_1 = '2021 GMD';
const matricula_2 = '2345-GMD';
const matricula_3 = '4532BDB';
const matricula_4 = '0320-AAA';

console.log(validacionFormatoMatricula(matricula_1));
console.log(validacionFormatoMatricula(matricula_2));
console.log(validacionFormatoMatricula(matricula_3));
console.log(validacionFormatoMatricula(matricula_4));
