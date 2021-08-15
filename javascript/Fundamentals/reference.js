const potatoOne = {
  type: 'baked'
}

// console.log('1st ', potatoOne);

const potatoTwo = potatoOne

// console.log('2nd ', potatoOne);

potatoTwo.type = 'mashed'

// console.log('3rd', potatoOne);




const nuggetsOne = [1,2,3]

const nuggetsTwo = [...nuggetsOne]

nuggetsTwo.push(4,5,6)

console.log('nuggetsOne :>> ', nuggetsOne);
console.log('nuggetsTwo :>> ', nuggetsTwo);
