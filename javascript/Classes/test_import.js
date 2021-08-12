import Person, { printMessage as message, printName, printAge, printJob, Profession } from "./test_export.js";

const dude = new Person('Jim', 39, 'Carpenter');
console.log('Dude :>> ', dude);

const work = new Profession('Pilot')
console.log('Work :>> ', work);

message();