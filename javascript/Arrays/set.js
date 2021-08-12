//? For Mapping Arrays

const uniqueNumbers = [1, 234, 234, 45]

//? Sets only allow unique data 
const numSet = new Set(uniqueNumbers)
console.log(numSet);

console.log(numSet.has(45));
console.log(numSet.has(9));

numSet.delete(234)

console.log(numSet);
