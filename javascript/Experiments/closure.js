/* This displays 0,1,2. Why? Something to do with LET being block scope,
 creating a closure */
for (let i = 0; i < 3; i++){
  
  function logLet () {
    console.log('LET:',i);
  }
  
  setTimeout(logLet, 100);
}

// This displays 3, 3, 3. Why? Something to do with VAR being in the global scope
for (var i = 0; i < 3; i++){
  
  function logVar () {
    console.log('VAR: ',i);
  }
  
  setTimeout(logVar, 100);
}

//Outer Inner Closure Example
function outerFunction(outerVariable){
  return function innerFunction(innerVariable){
    console.log('Outer Variable: ' + outerVariable);
    console.log('Inner Variable: ' + innerVariable);
  }
};


const testFunction = outerFunction('outside passed variable')
testFunction('inner passed variable');
