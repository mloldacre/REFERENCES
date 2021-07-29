let randomArrOne = [];
let randomArrTwo = [];
let randomArrThree = [];
let setArrOne = [1,2,3];

let total = setArrOne.reduce(function (a,b){
  return a+b;
});

console.log('sONE:', total);

const randomNum = (min = 5, max = Math.floor(Math.random() * 50)) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

function randomArrayGen(arr) {
  let i = 0;
  while (i <= randomNum()) {
    arr.push(randomNum());
    i++;
  }
  return arr;
}

randomArrOne = randomArrayGen(randomArrOne);
randomArrTwo = randomArrayGen(randomArrTwo);
randomArrThree = [...randomArrOne, ...randomArrTwo];

//console.log('One:', ...randomArrOne, 'Two:', ...randomArrTwo, 'Three:', ...randomArrThree);



