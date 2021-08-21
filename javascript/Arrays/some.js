//* returns true/false if at least one element meets the condition

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

const hasInexpensiveItems = items.some(item => {
  return item.price <= 300
})

const freeItems = items.some(item => {
  return item.price <= 0
})

console.log(hasInexpensiveItems);
console.log(freeItems);