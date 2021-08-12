//? Replace Mapping Objects
const CURRENCY_MAP = new Map([
  ['United States', 'USD'],
  ['India', 'Rupee'],
  ['Britain', 'Sterling']
])

console.log("Before: ", CURRENCY_MAP);


CURRENCY_MAP.set('China', 'Yuan')
CURRENCY_MAP.set('Japan', 'Yen')


console.log("After1: ", CURRENCY_MAP);


let russia = {name: 'Russia'}
CURRENCY_MAP.set(russia, 'Ruble')

console.log("After2: ", CURRENCY_MAP);



console.log('Get:', CURRENCY_MAP.get(russia));