//* Generator Function
/!*Purpose is to run code and return multiple values */
function* simpleGenerator() {
  yield 1
  yield 2
  yield 3
}

const generatorObject = simpleGenerator();
console.log(generatorObject);

const obj = generatorObject.next();
console.log(obj);

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

//? Use Case: Infinite Loop
function* idGenerator() {
  let id = 1;

  while (true) {
    yield id;
    id++;
  }
}

const newId = idGenerator();
console.log(newId.next());
console.log(newId.next());
console.log(newId.next());
console.log(newId.next());
console.log(newId.next());

//? Use Case: Array iterator
function* arrayIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

//Random number generator b/w 5-50
const randomNum = (min = 5, max = Math.floor(Math.random() * 50)) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

function randomArrayGen(arr) {
  let i = 0;
  while (i <= randomNum()) {
    arr.push(randomNum());
    i++;
  }
  return arr;
}

//Create new random array
let randomArray = randomArrayGen([]);

const newArrayObject = arrayIterator(randomArray);

console.log('newArrayObject :>> ', newArrayObject.next());
console.log('newArrayObject :>> ', newArrayObject.next());
console.log('newArrayObject :>> ', newArrayObject.next());
console.log('newArrayObject :>> ', newArrayObject.next());
console.log('newArrayObject :>> ', newArrayObject.next());
console.log('newArrayObject :>> ', newArrayObject.next());
