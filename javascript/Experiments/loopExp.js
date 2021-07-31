// an example of the accumulator pattern
let colors = ["red", "white", "blue"];
let statement = "My favorite colors are ";

for (let i = 0; i < colors.length; i++) {
  // what could you write here?
  
  if( i === (colors.length - 1)){
    statement += `and ${colors[i]}` ;
  }
  else{
    statement += colors[i] + ' ';
  }
}

// challenge 1 - make the statement say:
// 'My favorite colors are red, white, blue,'

// challenge 2 - make the statement say:
// 'My favorite colors are red, white and blue.'

console.log(statement);