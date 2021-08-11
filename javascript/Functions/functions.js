// Regular Functions
function sum(a, b) {
  return a + b;
}

function isPositive(number) {
  return number >= 0;
}

function randomNumber() {
  return Math.random;
}

//? Event listeners don't need to be defined like this
let action = document.addEventListener
action.hi = ' hi 👋🏾'
action.sup = " 'sup 🙌🏾"

action('click', function () {
  console.log('I clicked in a normal function' + action.hi);
})

//* Arrow Function
let sum2 = (a, b) => a + b;

const isPositive2 = number => number >= 0;

let randomNumber2 = () => Math.random;

action('wheel', () => console.log('I wheeled in an arrow function' + action.sup))


//! Small class example
class Person {
  constructor(name) {
    this.name = name;
  }
  
  printNameArrow() {
    setInterval(() => {
      console.log('Arrow: ' + this.name)
    }, 2000);
  };

  printNameFunction() {
    console.log('IN PRINT FUNCTION', this.name);
    setInterval(function() {
      console.log('Function ' + this.name);
    }, 2000)
  }
};

let bro = new Person('Alpha');
bro.printNameArrow();
bro.printNameFunction();
