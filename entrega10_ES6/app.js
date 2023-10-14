const sampleObject = [
  {
    id: 43,
    name: "Javi",
    age: 36,
  },
];
console.log(sampleObject);

const hasId = elements => elements.some(element => element.id);

console.log(hasId(sampleObject));

console.log("--------------");
const head = ([firstItem, ...restItems]) => firstItem;

const sampleArray = ["uno", 2, true];
console.log(sampleArray);
console.log(head(sampleArray));

console.log("--------------");
const tail = ([firstItem, ...restItems]) => [, ...restItems];
console.log(tail(sampleArray));

console.log("--------------");
const swapFirstToLast = ([firstItem, ...restItems]) => [
  ...restItems,
  firstItem,
];
console.log(swapFirstToLast(sampleArray));

console.log("--------------");
const excludeId = ([{ id, ...restItems }]) => [{ ...restItems }];
console.log(excludeId(sampleObject));

console.log("--------------");
const sampleWords = ["avion", "planta", "alpargata"];
// const wordsStartingWithA = arr => arr.filter(arr[0][0] === "a");
const wordsStartingWithA = arr => arr.filter(a => a[0] === "a");
console.log(wordsStartingWithA(sampleWords));
// console.log(sampleWords[0][0]);

console.log("--------------");
const concat = str => str.join(" | ");
console.log(concat(sampleWords));

console.log("--------------");
const multArray = (arr, x) => arr.map(a => a * x);
const sampleNumbers = [1, 2, 3, 4];
console.log(multArray(sampleNumbers, 2));

console.log("--------------");
const calcMult = arr => arr.reduce((a, b) => a * b);
console.log(calcMult(sampleNumbers));
