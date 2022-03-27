const product = { count: 3, price: 10, type: "comida" };

const total = product.count * product.price;


// Calcular precio total con iva
let totalPrice = () => {

    if (product.count <= 0) {
    return 0;
    } 
    if (product.type === "comida") {
        const iva = total * 0.10;
        return total + iva;
    } 
    if (product.type === "libro") {
        const iva = total * 0.04;
        return total + iva;
    } 
    const iva = total * 0.21;
    return total + iva
}
console.log(totalPrice());



switch(product.type) {
  
    case "comida":
        console.log(total + (total * 0.10)); 
        break;
    case "libro": 
        console.log(total + (total * 0.04)); 
        break;
    default: 
        console.log(total + (total * 0.21)); 
        break;

}




