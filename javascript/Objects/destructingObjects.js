const personOne = {
  name: 'Hank',
  age: 89,
  address: {
    city: 'Atlanta',
    state: "GA"
  },
  favoriteSport: 'Football'
}

const personTwo = {
  name: 'Betty',
  age: 32,
  address: {
    city: 'Tucson',
    state: "AZ"
  },
  favoriteFood: 'Snickers'
}

// Setting default value & renaming key
const {name: fName, age, hobby = 'Not Set', address: {city}} = personTwo;
//console.log(fName, age, hobby, city);

// Adding a new key/value pair
personTwo["hobby"] = "Archery"
//console.log(fName, age, personTwo.hobby, city);


// Spread operator
const { name: nickName, ...rest } = personOne;
// console.log('pOne :>> ', nickName, rest);


// ?  Combining objects, first argument is overwritten
const personThree = {...personOne, ...personTwo}
const personFour = {...personTwo, ...personOne}

// console.log('P3', personThree, 'P4', personFour);

// ? Modifies object in first parameter
const personFive = Object.assign(personOne, personTwo);

// console.log("p5", personFive);
// console.log("p1", personOne);


function printUser(user){
  console.log(user);
}
function printUserExtended(user){
  console.log(`Name: ${user.name} Age: ${user.age}`);
}
function printUserDestructed({name, age}){
  console.log(`Name: ${name} Age: ${age}`);
}

printUser(personOne)
printUserExtended(personOne)
printUserDestructed(personOne)