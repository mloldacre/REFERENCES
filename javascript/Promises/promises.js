let thePromise = new Promise((resolve, reject) => {
  let sum = 1 + 3
  if (sum === 2) {
    resolve('This works')
  }
  else {
    reject('This failed')
  }
})

thePromise.then(message => {
  console.log("This is in the 'then' section " + message);
}).catch(message => {
  console.log("This is in the 'catch' section " + message);
})
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
function positiveSum(a, b) {
  return a + b;
}

function positivePromise(sum) {
  return new Promise((res, rej) => {
    if (sum >= 0) {
      res(' positive number')
    } else if (sum < 0) {
      rej('This is negative')
    }
  })
}

let answer = positiveSum(1, 2)

positivePromise(answer).then(message => {
  console.log(`Great, this is a ${message}`);
}).catch(error => {
  console.log(`Nooo, this is ${error}`);
})

console.log(positiveSum(1, 1));

//? Also look into .all and .race