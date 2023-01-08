const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

class ReservaCliente {
  constructor() {
    this._reservas = [];
    this._subtotal = 0;
  }

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total;
  }

  calculaPrecioHabitacion(tipoHabitacion) {
    if (tipoHabitacion === "suite") {
      return 150;
    }
    return 100;
  }

  calculaSubtotal() {
    this._subtotal =
      reservas.reduce(
        (acumulado, { noches, pax, tipoHabitacion }) =>
          acumulado +
          noches * pax * this.calculaPrecioHabitacion(tipoHabitacion),
        0
      ) + this.calculaCargosAdicionales();
  }

  calculaIVA() {
    return this.subtotal * 0.21;
  }

  calculaCargosAdicionales() {
    return reservas.reduce((acumulado, { pax }) => acumulado + pax * 40, 0);
  }

  calculaTotal() {
    this._total = this._subtotal + this.calculaIVA(this.subtotal);
  }

  set reservas(reservas) {
    this._reservas = reservas;
    this.calculaSubtotal();
    this.calculaTotal();
  }
}

class ReservaTourOperador extends ReservaCliente {
  calculaSubtotal() {
    this._subtotal = reservas.reduce(
      (acumulado, { noches, pax }) => acumulado + noches * pax * 100,
      0
    );
  }
  calculaDescuento() {
    return this.subtotal * 0.15;
  }
  calculaTotal() {
    this._total =
      this._subtotal -
      this.calculaDescuento(this.subtotal) +
      this.calculaIVA(this.subtotal);
  }
}

console.log("** Caso 1 ***");
const reserva1 = new ReservaCliente();
reserva1.reservas = reservas;
console.log("subtotal cliente caso 1: ", reserva1.subtotal);
console.log("total cliente caso 1: ", reserva1.total);

console.log("** Caso 2 ***");
const reserva2 = new ReservaTourOperador();
reserva2.reservas = reservas;
console.log("subtotal cliente caso 2: ", reserva2.subtotal);
console.log("total cliente caso 2: ", reserva2.total);
// iva: 189  | descuento: 135

class Reserva {
  constructor() {
    this._reservas = [];
    this._subtotal = 0;
    this._precio = 100;
  }

  get subtotal() {
    return this._subtotal;
  }
  get total() {
    return this._total;
  }

  calculaIVA() {
    return this.subtotal * 0.21;
  }
  calculaSubtotal() {
    this._subtotal = reservas.reduce(
      (acumulado, { noches, pax }) => acumulado + noches * pax * this.precio,
      0
    );
  }
  calculaTotal() {
    this._total = this._subtotal + this.calculaIVA(this.subtotal);
  }

  set reservas(reservas) {
    this._reservas = reservas;
    this.calculaSubtotal();
    this.calculaTotal();
  }
}

// las funcionalidades comunes:
// - calculo iva
// - calculo subtotal
// - calculo total

// las diferencias:
// - precio habitación
// - cargos adicionales
// - descuento

class ClienteParticular extends Reserva {
  constructor() {
    super();
    this._precioSuite = 150;
  }

  calculaPrecioHabitacion(tipoHabitacion) {
    if (tipoHabitacion === "suite") {
      return this._precioSuite;
    }
    return this._precio;
  }
  calculaCargosAdicionales() {
    return reservas.reduce((acumulado, { pax }) => acumulado + pax * 40, 0);
  }
  calculaSubtotal() {
    this._subtotal =
      reservas.reduce(
        (acumulado, { noches, pax, tipoHabitacion }) =>
          acumulado +
          noches * pax * this.calculaPrecioHabitacion(tipoHabitacion),
        0
      ) + this.calculaCargosAdicionales();
  }
}
class Tour0perador extends Reserva {
  constructor() {
    super();
    this._descuento = 0.15;
  }

  calculaDescuento() {
    return this.subtotal * this._descuento;
  }
  calculaTotal() {
    this._total =
      this._subtotal -
      this.calculaDescuento(this.subtotal) +
      this.calculaIVA(this.subtotal);
  }
}

console.log("** DESAFÍO ***");
const reservaClienteParticular = new ClienteParticular();
reservaClienteParticular.reservas = reservas;
console.log(
  "subtotal cliente caso Cliente Particular: ",
  reservaClienteParticular.subtotal
);
console.log(
  "total cliente Cliente Particular: ",
  reservaClienteParticular.total
);

const reservaTour0perador = new Tour0perador();
reservaTour0perador.reservas = reservas;
console.log(
  "subtotal cliente caso Tour 0perador: ",
  reservaTour0perador.subtotal
);
console.log("total cliente Tour 0perador: ", reservaTour0perador.total);
