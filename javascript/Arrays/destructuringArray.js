const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const number = ['1', '2', '3', '4', '5', '6', '7']

let old_a = letter[0]
let old_b = letter[1]

const [new_a, new_b] = letter
const [,,,new_d] = letter

console.log(old_a, old_b);
console.log(new_a, new_b, new_d);

// Spread operator
const [,...rest] = number

console.log(rest);

// Combining using spread operator
const comboNumAlpha = [...letter, ...number]
// * Concatenating arrays
const comboNumAlphaTwo = letter.concat(number)

console.table(comboNumAlpha)
console.table(comboNumAlphaTwo)

function sumMultiplyDiff(a, b){
  return [a+b, a*b, a-b]
}

const answer = sumMultiplyDiff(5,6)
const [sum, product, difference, quotient = "no division"] = sumMultiplyDiff(5, 6)

console.log('Answer :>> ', answer);
console.log('sum + product + difference :>> ', sum , product , difference, quotient);