export default class Person{
  constructor(name, age, profession){
    this.name = name
    this.age = age
    this.job = profession
  }
}

class Profession {
  constructor(title){
    this.title = title
  }
} 


export function printMessage(){
  console.log("Hey, this is a message");
};

export function printName(person){
  console.log(`This person is ${person.name}`);
}

function printAge(person){
  console.log(`This person is ${person.age} old`);
}

function printJob(person){
  console.log(`This person is ${person.job} old`);
}


export {Profession, printJob, printAge};
