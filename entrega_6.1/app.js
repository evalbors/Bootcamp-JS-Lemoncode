const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    }, 
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    }, {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    }, 
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
},];

const elements = [
    {
        description: "Pluma",
        price: 20,
        tax: LOWER_TYPE,
        stock: 2,
        units: 1,
    },
    {
        description: "Tinta",
        price: 10,
        tax: LOWER_TYPE,
        stock: 5,
        units: 2,
    }
];
const showProducts = productList => {
   
    let list = document.getElementById("list");
    
    for (let product of productList){
        let itemList = document.createElement("li");
        let span = document.createElement("span");
        let number = document.createElement("input");
        let price = document.createElement("span");

        number.setAttribute("type", "number");
        number.setAttribute("class", "number-box");
        number.addEventListener("change", event => product.units = event.target.valueAsNumber);
       
        span.innerHTML = product.description;
        price.innerHTML = product.price;
        price.setAttribute("class", "price-text");

        itemList.appendChild(span);
        itemList.appendChild(price);
        itemList.appendChild(number);
        list.appendChild(itemList);
    
    }
    
}
showProducts(products);

// recojo en valor y lo paso a número
const getSubtotal = (e) => {
    console.log(e);
    let subtotal = 0; // siempre mejor inicializar que no darle ningún valor
    for (var i = 0; i < e.length; i++){
        subtotal += parseInt(e[i].price) * parseInt(e[i].units);
    }
    // otra manera:
    /* for (product of e){
        subtotal += parseInt(product.price) * parseInt(product.units);
    } */
    return subtotal;
}

// una función dentro de otra
let getIva = (cosa) => {
    let iva = 0;
    for (var i = 0; i < cosa.length; i++){
        let subtotal = parseInt(cosa[i].price) * parseInt(cosa[i].units);
        iva += subtotal * cosa[i].tax / 100;
    }
    return iva;
}

/// console.log(getSubtotal()); esto no fucionaría, solo funcionaría si quitamos la e como parametro inicial y pusieramos products en cada e siguiente
// console.log(getSubtotal(products));


// Evento al clicar el botón
let button = document.getElementById("button")
button.addEventListener("click", calculateSubtotal(products));

// Función que se activa al clicar el botón
function calculateSubtotal(){
    document.getElementById("subtotal-result").innerHTML = getSubtotal(products);
}

function calculateTotal(){
    return getSubtotal()+ getIva();
}

// crear 3 funciones y activarlas dentro de una
/* function showResults() {
    document.getElementById("subtotal-result").innerHTML = getSubtotal(products);
    document.getElementById("iva-result").innerHTML = getIva(products);
    document.getElementById("total-result").innerHTML = calculateTotal(products);
}
 */


// Otra manera de hacer lo del iva.
// let total = (e) => {
  /*   switch(e.tax) {
  
        case "REGULAR_TYPE":
            total = subtotal() + (subtotal() * .21);

            break;
        case "LOWER_TYP": 
        total = subtotal() + (subtotal() * 4);
            break;
        default: 
            total = subtotal();
            break;
    
    }
}  */
