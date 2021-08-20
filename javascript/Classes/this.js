//* Using Bind method

function whoami(){
  console.log(this);
};

function whodis(){
  console.log(this);
};

//! Can't use 'this' with arrow functions
const whodat = () => {
  console.log(this);
}

const mike = {
  age: '31',
  gender: 'male',
  face:'😶',
  whodis,
  whodat
};

const mikesName = whoami.bind(mike);

mikesName();

mike.whodis();
mike.whodat();