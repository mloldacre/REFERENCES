var x = "cat"
const myFunVar = () =>{
  var x = "dog"
  return x;
}

y = myFunVar();

console.log('Var X: ' + x, 'Var Y: ' + y);


let z = "cat"
const myFunLet = () => {
  var z = "dog"
  return z;
}

w = myFunLet();

console.log('Let Z: ' + z, 'Let W: ' + w);