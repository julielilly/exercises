"use strict";

// function greeting(firstName) {
//     return `Hello ${firstName}`;
// }

// const result = greeting("Any name");

// // console.log("result", result)
// console.log(greeting("sofkso"))

function greeting(firstName) {
  return `Hello ${firstName}`;
}

function whatDog(greeting) {
  return `They said: ${greeting}`;
}

console.log(whatDog(greeting("dawg")));
