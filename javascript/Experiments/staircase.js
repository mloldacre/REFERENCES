const staircaseRec = (n) => {
  if (n === 1) {
    return '#';
  } else {
    let step = '#';
    step = step.repeat(n) + '\n' + (staircaseRec(n - 1));
    return step;
  }
};

const staircase = (n) => {
  let step = '#';
  let space = ' ';
  let stairs = [];
  let i = 0;
  while (n !== 0){
    stairs.push(space.repeat(i) + step.repeat(n));
    n--;
    i++;
  }
  let stairStr = '';
  while (stairs.length !== 0){
    stairStr += stairs.pop()  + '\n';
  }
  return stairStr;
};

console.log(staircase(6));