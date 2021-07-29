// Regular For loop

const num = 5;

for (let i = 0; i < num + 1; i++){
  console.log({i});
}

/* For IN Loop: The JavaScript for in statement loops through the properties of an Object*/

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x] + " " + " SPACE ";
};

console.log(text);

// For OF Loop

