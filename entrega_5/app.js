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



// 1. Mostrar el carrito de la compra. 
console.log("1. El carrito de la compra:")
for (object of carrito){
    console.log("···············");
    
    for (data in object){
        console.log(object[data]); 
    }
}

console.log("------------------------");


// 2. Listar todos los productos.
console.log("2. Listado de productos:")
for (object of carrito){
    console.log("· " + object.name)
    // document.getElementById("shopping-list").innerHTML = object.name;
} 

console.log("------------------------");


// 3. Eliminar el producto con id 54657 del carrito de la compra.
console.log("3. Array con el producto eliminado:")
carrito.splice(2, 1);
console.log(carrito);

console.log("------------------------");


// 4. Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).

let total = 0;
for (element of carrito) {
  total += element.price * element.count;
}
console.log("4. Total: ", total);

console.log("------------------------");


// 5. Filtrar por los productos que sean prime.
console.log("5. Estos productos son premium:")
for (object of carrito){
    if (object.premium){
        console.log("✓ " + object.name)
    }
}