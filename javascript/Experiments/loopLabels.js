outerLoop: for (let i = 0; i < 15; i++){
  innerLoop: for (let j = 0; j < 10; j++){
    if (i === 1 || i === 7){
      continue outerLoop;
    }
    console.log(
      `%ci=%c${i}%c, j=%c${j}`,
      "color: #693",
      "font-weight: bold",
      "color: #670",
      "font-weight: bold"
    );
  }
}

outerLoop2: for (let k = 0; k < 15; k++){
  innerLoop2: for (let l = 0; l < 10; l++){
    if (k === 7){
      break outerLoop2;
    }
    console.log(
      `%ck=%c${k}%c, l=%c${l}`,
      "color: #F46",
      "font-weight: bold",
      "color: #E49",
      "font-weight: bold"
    );
  }
}