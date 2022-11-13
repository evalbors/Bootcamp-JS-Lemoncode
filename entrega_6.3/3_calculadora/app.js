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
// console.log(vuelta(200, 152)); // devolución: 48€

var calculo_vuelta_cambio = (importe_total, pago_cliente, arr) => {
  var vuelta = importe_total - pago_cliente;

  for (i = 0; i < arr.length; i++) {
    var check = vuelta / arr[i];
    var result = '';

    if (check >= 1) {
      var devolucion = '';
      devolucion = vuelta - Math.floor(check) * arr[i];
      vuelta = devolucion;
      result += 'devuelve ' + Math.floor(check) + ' de ' + arr[i] + '€';
      console.log('devuelve ' + Math.floor(check) + ' de ' + arr[i] + '€');
      console.log('------');
    }
    result += result + '\n';
  }

  return result;
};

console.log(calculo_vuelta_cambio(200, 152, cambio));

/*
200€ -152€
48€

48€ / 20€ = 2.4 billetes

48€ - 2 billetes de 20€
8€

8€ / 5€ = 1.6 billetes

8€ -  1 billete de 5€
3€

3€ / 2€ = 1 monedas de 2€

3€ -  2€
1€

1€ / 1€ = 1 monedas de 1€

1€ -  1€
0
 */
