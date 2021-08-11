function printValue(value){
  console.log('This is your value :>> ', value);
} 

function useCallback(callbackFunction){
  callbackFunction("'sup dawg")
}

// Using named function
useCallback(printValue)

//! Using anonymous function
useCallback(value => console.log('Arrow function :>> ', value));