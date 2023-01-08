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

console.log("** Cliente caso 1 ***");
const reserva1 = new ReservaCliente();
reserva1.reservas = reservas;
console.log("subtotal", reserva1.subtotal);
console.log("total", reserva1.total);

console.log("** Cliente caso 2 ***");
const reserva2 = new ReservaTourOperador();
reserva2.reservas = reservas;
console.log("subtotal", reserva2.subtotal);
console.log("total", reserva2.total);

// 189 iva
// 135 dto.
