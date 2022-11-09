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
];

const filterItems = items.filter( item => {
  return item.price <= 500;
} );

console.log( filterItems );

const numbers = [ 1, 2, 3, 4, 5, 56, 1, 123, 23423, 34545, 2 ];
const filterNumbers = numbers.filter( num => {
  return num >= 100;
} );

console.log( filterNumbers.length );