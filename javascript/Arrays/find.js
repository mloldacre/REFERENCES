//*Finds the first item that returns true

const items = [
  { name: 'A', price: 100 },
  { name: 'B', price: 900 },
  { name: 'C', price: 150 },
  { name: 'D', price: 200 },
  { name: 'E', price: 355 },
  { name: 'G', price: 700 },
  { name: 'H', price: 840 },
  { name: 'I', price: 499 },
  { name: 'J', price: 525 },
]

const findItemOne = items.find(item => {
  return item.price === 200
})
const findItemTwo = items.find(item => {
  return item.price === 525
})
const findItemThree = items.find(item => {
  return item.name === 'A'
})

console.log(findItemOne);
console.log(findItemTwo);
console.log(findItemThree);