function formatName(name) {
  // Convert the entire string to lowercase first
  const lowerName = name.toLowerCase();

  // Extract the first two letters, third letter, and remaining part
  const firstPart = lowerName.substring(0, 2); // First two letters in lowercase
  const thirdLetter = lowerName.charAt(2).toUpperCase(); // Third letter capitalized
  const restOfString = lowerName.substring(3); // Rest of the string in lowercase

  // Concatenate the parts
  const formattedName = firstPart + thirdLetter + restOfString;

  return formattedName;
}

// Test with various names of different lengths
console.log(formatName("Julie")); // Output: juLie
console.log(formatName("Alexander")); // Output: alExander
console.log(formatName("Christopher")); // Output: chRistopher
console.log(formatName("Elisabeth")); // Output: elIsabeth
