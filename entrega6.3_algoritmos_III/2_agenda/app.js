var WORK_HOURS = [
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

console.log('1. Generación aleatoria de la disponibilidad');
// importante poner () => para que sera una función anónima pero que recibe algo y ejecuta la función
var random_availability = () => Math.random() < 0.5;

var availability_team = (obj, arr) => {
  var availability_person = ' ';

  for (i = 0; i < obj.length; i++) {
    // console.log(i); // imprime el numero de trabajadores
    var employee = obj[i]['name'];
    var availability_hours = '';

    for (j = 0; j < arr.length; j++) {
      // console.log(j); // imprime las 8 franjas de cada trabajador
      availability_hours += arr[j] + ' → ' + random_availability() + '\n';
      obj[i].availability[j] = random_availability();
    }
    availability_person += employee + '\n' + availability_hours + '\n';
  }
  return availability_person;
};

console.log(availability_team(myTeam, WORK_HOURS));
console.log(myTeam);

var meeting_time = (obj) => {
  var filtered_array = [];

  for (i = 0; i < obj.length; i++) {
    for (j = 0; j < obj[i].availability.length; j++) {
      if (obj[i].availability[j] === true) {
        filtered_array.push(j);
      }
    }
  }

  for (var k = 0; k < 8; k++) {
    const same_index = filtered_array.filter((element) => k === element);

    if (same_index.length === 4)
      return 'The meetting will be at ' + WORK_HOURS[k];
  }
  return 'There is not availability.';
};

console.log(meeting_time(myTeam));
