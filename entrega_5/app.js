const carrito = [
    {
      id: 198752,
      name: "Tinta DJ27 Color",
      price: 52.95,
      count: 3,
      premium: true
  }, {
      id: 75621,
      name: "Impresora ticketera PRO-201",
      price: 32.75,
      count: 2,
      premium: true
  }, {
      id: 54657,
      name: "Caja de rollos de papel para ticketera",
      price: 5.95,
      count: 3,
      premium: false
  }, {
      id: 3143,
      name: "Caja de folios DIN-A4 80gr",
      price: 9.95,
      count: 2,
      premium: false
  } ];



// 1. Mostrar el carrito de la compra. Me muestra un objeto... tengo q pasar objeto a string 
for (piece of carrito){
    console.log("////////////////////////");

    console.log(piece.id)
    console.log(piece.name)
    console.log(piece.price)
    console.log(piece.count)
    console.log(piece.premium)
}

console.log("------------------------");

// 2. Listar todos los productos.
console.log("Listado de productos:")
for (piece of carrito){
    console.log("· " + piece.name)
    // document.getElementById("shopping-list").innerHTML = piece.name;
} 

console.log("------------------------");


// 3. Eliminar el producto con id 54657 del carrito de la compra.
console.log(carrito);
carrito.splice(2, 1);
console.log(carrito);

console.log("------------------------");


// 4. Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).

/* let sum1 = () => carrito[0].count * carrito[0].price;
let sum2 = () => carrito[1].count * carrito[1].price;
let sum3 = () => carrito[2].count * carrito[2].price;
let total =  sum1() + sum2() + sum3();
console.log(total);
 */

let total = 0;
for (element of carrito) {
  total += element.price * element.count;
}
console.log("Total: ", total);

console.log("------------------------");


// 5. Filtrar por los productos que sean prime.

console.log("Son premium:")
for (piece of carrito){
    if (piece.premium){
        
        console.log(piece.name)
    }
}