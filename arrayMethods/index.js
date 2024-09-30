// node --watch index.js
const people = ["Harry", "Ron", "Hermione"];

let result;

// result = people.push("Draco", "Luna");
// result = people.pop();
// result = people.slice(0, 3);
// result = people.splice(1, 0, "Cho");
// result = people.indexOf("Ron");
result = people.splice(result, 1);

console.log(result);
console.log(people);

// pop():-The pop() method removes the last element from an array and returns that element.
// Push():- The push() method, on the other hand, adds one or more elements to the end of an array.
// shift():-The shift() method removes the first element from an array and returns that element.
// unshift():-The unshift() method, on the other hand, adds one or more elements to the beginning of an array and returns the new length of the array.
// splice():-The splice() method is used to change the contents of an array by removing, replacing, or adding elements. It modifies the original array.
// slice():-The slice() method, on the other hand, returns a new array containing a copy of a portion of the original array. It does not modify the original array.

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// makes array from string
const letters = Array.from("abcdefghijlm");
console.log(letters);

// makes string from array
const word = letters.join("");
console.log(word);
