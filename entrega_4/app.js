let getNumber = (inputId) => Number(document.getElementById(inputId).value);
// Number pasa el string a número para que puedan ser sumados
// value recoge el valor q introducimos en el input

function suma(a, b){
    let result = a + b;
    return result
}
function resta(a, b){
    let result = a - b;
    return result
}
function multiplicacion(a, b){
    let result = a * b;
    return result
}
function division(a, b){
    let result = a / b;
    return result
}

let resultSuma = () => {
   document.getElementById('result').innerHTML = suma(getNumber('first'),getNumber('second'));
}
let resultResta = () => {
    document.getElementById('result').innerHTML = resta(getNumber('first'),getNumber('second'));
}
let resultMultiplicacion = () => {
    document.getElementById('result').innerHTML = multiplicacion(getNumber('first'),getNumber('second'));
 }
 let resultDivision = () => {
     document.getElementById('result').innerHTML = division(getNumber('first'),getNumber('second'));
 }
document.getElementById('boton-suma').addEventListener('click', () => resultSuma());
document.getElementById('boton-resta').addEventListener('click', () => resultResta());
document.getElementById('boton-multiplicacion').addEventListener('click', () => resultMultiplicacion());
document.getElementById('boton-division').addEventListener('click', () => resultDivision());
