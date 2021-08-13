let x = 2;

// Error
if (x !== 1) {
  console.error('X not equal to 1')
}

x = x + 5;
console.log(x);
// Warning
if (x !== 1) {
  console.warn('X not equal to 1')
}

console.log(x);
x = x + 9;

// Assertion
console.assert(x === 1, 'X not equal to 1')

x = x - 15;
console.log(x);
console.assert(x !== 1, 'X is 1')
