

const cars = [
  { make: 'Jeep', model: 'Patriot' },
  { make: 'Honda', model: 'Civic' },
  { make: 'Chevy', model: 'Cobalt' },
  { make: 'Toyota', model: 'Tacoma' },
  { make: 'Jeep', model: 'Wrangler' }
];

console.log(cars);
console.table(cars);



let arrOne = [];

import("../Arrays/randomArrayGenerator.js").then(({ default: randomArrayGenerator }) => {
  debugger
  arrOne = randomArrayGenerator(arrOne)
  console.log(arrOne)
  console.table(arrOne)
});
