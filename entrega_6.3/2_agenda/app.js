const workHours = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

var myTeam = [
  {
    name: 'María',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Pedro',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Esther',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Marcos',
    availability: new Array(8).fill(true),
  },
];

// 0. Disponibilidad asignada de manera aleatoria
var randomAvailabilityHour = () => (Math.random() < 0.5 ? true : false);
// console.log(randomAvailabilityHour());

console.log('------- 1. Generación aleatoria de la disponibilidad');

// 1. Iterar por el array de myTeam y asignarle a cada array de
// availability true o false dependiendo de un boleamo

var showAvailabilityForHour = (obj, arr) => {
  var availabilityForHour = '';
  var availabilityForPerson = '';

  for (var i = 0; i <= obj.length; i++) {
    var employee = 'nombre';
    // var employee = obj[i][0];

    for (var j = 0; j <= arr.length - 1; j++) {
      availabilityForHour += arr[j] + ' → ' + randomAvailabilityHour() + '\n';
    }

    availabilityForPerson = employee + '\n' + availabilityForHour + '\n';
  }

  return availabilityForPerson;
};

console.log(showAvailabilityForHour(myTeam, workHours));
