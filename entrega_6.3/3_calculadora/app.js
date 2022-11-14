var cambio = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

// Pensemos cómo haríamos si estuviéramos
// a cargo de la caja de nuestra tienda.
// Si el importe de la compra fuese 152 euros
// y el cliente nos pagase con un billete de
// 200 euros. ¿Qué deberíamos hacer?

var vuelta = (importe_total, pago_cliente) => {
  return importe_total - pago_cliente;
};

console.log(
  '1. Calcular la diferencia para saber cuánto debemos devolver: 48 euros',
);
console.log('La devolución es de ' + vuelta(200, 152) + '€');
// devolución: 48€
console.log('------------------------------------------');

var calculo_vuelta_cambio = (importe_total, pago_cliente, arr) => {
  var vuelta = importe_total - pago_cliente;

  console.log(
    '2. Mostrar la cantidad de billetes y monedas de cada tipo que debemos devolver:',
  );
  console.log('La máquina devuelve:');
  var result = '';
  for (i = 0; i < arr.length; i++) {
    var check = vuelta / arr[i];

    if (check >= 1) {
      var devolucion = '';
      devolucion = vuelta - Math.floor(check) * arr[i];
      vuelta = devolucion;
      result += '- ' + Math.floor(check) + ' de ' + arr[i] + '€' + '\n';
    }
  }
  return result;
};

console.log(calculo_vuelta_cambio(200, 152, cambio));
