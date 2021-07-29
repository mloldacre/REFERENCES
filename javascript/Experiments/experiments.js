const thing = require('./thing.js');
const mlClamp = (number) => {
  let semaphore = false;
  while (number >= 0) {
    number--;
    semaphore = true;
  }
  return semaphore;
};


const clamp = (n) => {
  return n * (n >= 0);
};

const multipleConditions = (num) => {
  let count = 0;
  let semaphore = false;
  while (num >= 0 && count < 100 || count > 90) {
    num--;
    count++;
    semaphore = true;
  }
  return {semaphore, count};
};



//console.log('MK: ',multipleConditions(50));
let thingy = new thing({a:5});
thingy.addEventListener('onChange',(e)=>{
  console.trace(e.value);
});




//thingy.a.set(22);

let arry = [(n)=>{console.log(n);},(n)=>{console.log(n);},(n)=>{console.log(n);}, (n)=>{console.log(n);}];

//! FOR IN (Index) LOOP
for(const method in arry)
{
  arry[method](method);
}


//! FOR OF (Object) LOOP
let arr = [(n) => { console.log(n); }, (n) => { console.log(n); }, (n) => { console.log(n); }, (n) => { console.log(n); }];

let val = 0;
for (const method of arr) {
  method(val);
  val++;
}

function complimentPairs(arr) {
  let sortArr = arr.sort();
  let ansArr = [];

  for (let i = 0; i < sortArr.length; i++) {
    for (let j = i; i < sortArr.length; j++) {
      if (sortArr[i] + sortArr[j] === 0) {
        ansArr.push(sortArr[i]);
      }
    }
  }
  return ansArr;
}

const makePositive = (num) => {
  if (num < 0){
    num = (num * -1);
  }
  return num;
};

let answer = makePositive(-10000051154145145145);

console.log(answer);