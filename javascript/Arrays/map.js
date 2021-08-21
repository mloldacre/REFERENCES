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

const mapNames = items.map(item => {
  return item.name
})

const mapPrice = items.map(item => {
  return item.price
})

console.log(mapNames);
console.log(mapPrice);