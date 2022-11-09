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

// Disponibilidad asignada de manera aleatoria
let randomAvailabilityHour = () => (Math.random() < 0.5 ? true : false);

// Recorre cada hora dentro de la disponibilidad por persona y aplica randomAvailabilityHour
let showAvailabilityForHour = (array) => {
  var availabilityHour = '';
  for (element of array) {
    availabilityHour += element + ' → ' + randomAvailabilityHour() + '\n';
  }
  return availabilityHour;
};

var availabilityCalculator = (arr) => {
  // bucle externo i ---- acceder a cada empleado
  // bucle interno j ---- availability >>>> showAvailabilityForHour(workHours)
};

let myTeam = [
  {
    name: 'María',
    availability: new Array(8).fill(showAvailabilityForHour(workHours)),
    /*
08:00 - 09:00 → no
09:00 - 10:00 → no
10:00 - 11:00 → yes
11:00 - 12:00 → no
12:00 - 13:00 → yes
13:00 - 14:00 → no
15:00 - 16:00 → no
16:00 - 17:00 → no
*/
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

console.log('------- 1. Generación aleatoria de la disponibilidad');

const availabilityMaria =
  myTeam[0].name + ' availability: ' + '\n' + myTeam[0].availability;

// quiero quitar las comas pero no lo consigo
// const format = ([arr]) => arr.join('');

// No entiendo por qué hay que ponerele [0] después de availability
// console.log(myTeam[0].availability[]);

console.log(availabilityMaria);

console.log('------- 2. Buscar hueco libre');

let firstTimeIsAvailable = (obj) => {
  for (let i = 0; i <= obj.length; i++) {
    // console.log(obj[i].showAvailabilityForHour(myTeam[1].availability[0]));

    var firstTime = showAvailabilityForHour(myTeam[i].availability[0]);

    if (firstTime < 0.5) console.log('Firt time is available');
    else console.log('Sorry, firt time is not available');
    let n = obj[i].length;
    for (let j = 0; j <= n; j++) {
      console.log(j);
    }
  }
};

console.log(firstTimeIsAvailable(myTeam));
