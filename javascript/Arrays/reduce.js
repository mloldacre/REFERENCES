//* Used to do a cumulative operation

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

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)

console.log(total);