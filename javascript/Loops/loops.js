let peopleManager = require('../Classes/people');

// Regular For loop

// const num = 5;

// for (let i = 0; i < num + 1; i++){
//   console.log({i});
// }

/* For IN Loop: The JavaScript for in statement loops through the properties of
an Object*/

const people = ['John', 'Sally', 'Tim', 'Pamela'];

const employee = [
	{ firstName: 'Jane', listName: 'Doe', age: 25 },
	{ firstName: 'Pig', listName: 'Rider', age: 26 },
	{ firstName: 'Cat', listName: 'Licker', age: 27 },
	{ firstName: 'Dog', listName: 'Walker', age: 28 },
];

let friends = new peopleManager(people);

console.log('This is before items are added: ', friends);

friends.addPeople('Jake');
friends.addPeople('Leon');
friends.addPeople('Rider Mcghee');

for (let person of friends.people) {
	console.log('IN:', person);
}

for (let worker of employee) {
	console.log(worker['firstName']);
}

// For OF Loop

for (let person of people) {
	console.log('OF:', person);
}

//While loop

//? Generator function that requires *
function* idGenerator() {
	let id = 1;

	while (true) {
		yield id;
		id++;
	}
}
