let twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(twoDimensionalArray.length);

// Function that finds the difference btw the diagonally positioned values in a 2d array 
const diaDiff = (arr) => {
  let numOne = 0, numTwo = 0;

  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    numOne += arr[i][i];
    numTwo += arr[i][j];
    console.log("numOne: ", numOne, 'numTwo: ', numTwo);
  }

  return Math.abs(numOne - numTwo);
};

console.log(diaDiff(twoDimensionalArray));

