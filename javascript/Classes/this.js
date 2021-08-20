//* Using Bind method

function whoami(){
  console.log(this);
};

function whoDis(){
  console.log(this);
};

//! Can't use 'this' with arrow functions in strict mode
const whoDat = () => {
  console.log(this);
}

const mike = {
  age: '31',
  gender: 'male',
  face:'😶',
  whoDis,
  whoDat,
  thisMe: function(){
    console.log('👋🏾👋🏾👋🏾👋🏾');
    return this;
  }
};

const mikesName = whoami.bind(mike);
mikesName();

mike.whoDis();
mike.whoDat();
//* Can chain together method calls on an object by returning 'this' in function
mike.thisMe().thisMe().thisMe();

