let a = document.getElementById("first");
let b = document.getElementById("second");

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

console.log(suma(1,2));
console.log(resta(4,2));
console.log(multiplicacion(4,2));
console.log(division(4,2));

// me falta conectar los inputs introducidos con 'a' y 'b'

let resultado_suma = document.getElementById("boton-suma").addEventListener("click", suma);
let resultado_resta = document.getElementById("boton-resta").addEventListener("click", resta);
let resultado_multiplicacion = document.getElementById("boton-multiplicacion").addEventListener("click", multiplicacion);
let resultado_division = document.getElementById("boton-division").addEventListener("click", division);



document.getElementById("result").innerText = resultado_suma;
document.getElementById("result").innerText = resultado_resta;



 