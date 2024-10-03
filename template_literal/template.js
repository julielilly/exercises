console.log("My name is Klaus. I have a dog called Mona");

const name = "Julie";
const animalType = "Cat";
const animalName = "Xenia";

console.log(`My name is ${name}. \nI have a ${animalType} called ${animalName}`);

console.log(`${name} is ${name.length} characters long`);
console.log(`The first letter of ${name} is ${name[0]}`);

const fullName = "Julie Lilly Gyldenløve";
const firstName = fullName.substring(0, 5);
const middleName = fullName.substring(6, 11);
const lastName = fullName.substring(12);
console.log(`.${firstName}.${middleName}.${lastName}.`);
