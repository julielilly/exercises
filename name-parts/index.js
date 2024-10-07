const name = "Julie Lilly Gyldenløve";

// Find the index of the first and last space
const firstSpaceIndex = name.indexOf(" ");
const lastSpaceIndex = name.lastIndexOf(" ");

// Extract firstName, middleName, and lastName using substring
const firstName = name.substring(0, firstSpaceIndex);
const middleName = name.substring(firstSpaceIndex + 1, lastSpaceIndex);
const lastName = name.substring(lastSpaceIndex + 1);

// Log the variables
console.log("First Name:", firstName);
console.log("Middle Name:", middleName);
console.log("Last Name:", lastName);
