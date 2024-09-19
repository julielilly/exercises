// node --watch index.js

const firstName = "Julie";
const lastName = "Gyldenløve";

//1 sayHello(firstName);
function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

//2 sayHello(firstName);
//3 let firstName;
//4 sayHello();
//6 sayHello(firstName, lastName);
//5 sayHello(lastName, firstName);

const animalType = "kitty";
const animalName = "Speekz";

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName} I have a ${animalType} called ${animalName}`);
}

// presentPet(firstName, animalType, animalName);
// presentPet(one, two, three);
// presentPet("Kasper", "cat", "Xenia");
// presentPet(firstName, "cat", "Xenia");
