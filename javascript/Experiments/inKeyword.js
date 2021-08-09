const personOne = {
  name: 'sup dawg',
  age: 11
}

const personTwo = {
  name: undefined,
  age: 26
}

if(personOne.name){
  console.log("One: A truthy value");
}

if(personTwo.name){
  console.log("Two: A truthy value");
}
// Using the 'in' keyword
if('name' in personOne){
  console.log("One has name");
}

if('name' in personTwo){
  console.log("Two has name");
}