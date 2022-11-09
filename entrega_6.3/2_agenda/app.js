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

// 1. Iterar por el array de myTeam y asignarle a cada array de
// availability true o false dependiendo de un boleano ✅
var randomAvailabilityHour = () => (Math.random() < 0.5 ? true : false);

console.log('------- 1. Generación aleatoria de la disponibilidad');

// 2. Mostrar cada rango horario con si o no de cada trabajador ✅
var showAvailabilityForHour = (obj, arr) => {
  var availabilityForPerson = '';

  for (var i = 0; i <= obj.length - 1; i++) {
    var availabilityForHour = '';
    var employee = obj[i]['name'];

    for (var j = 0; j <= arr.length - 1; j++) {
      availabilityForHour += arr[j] + ' → ' + randomAvailabilityHour() + '\n';
    }

    availabilityForPerson += employee + '\n' + availabilityForHour + '\n';
  }

  return availabilityForPerson;
};

console.log(showAvailabilityForHour(myTeam, workHours));

// 2. Recorer myTeam y ver cual rango horario está a true en los
// trabajadores y decir que ese rango horario es el que está libre

var meeting = (obj, arr) => {
  for (var i = 0; i <= obj.length - 1; i++) {
    for (var j = 0; j <= arr.length - 1; j++) {
      if (arr[j] === true) console.log('We have a time of meeting');
      else console.log('We have not time available');
    }
  }
};

meeting((myTeam, workHours));
