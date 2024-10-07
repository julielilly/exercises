function capitalizeName(name) {
  // Ensure the entire string is lowercase, then capitalize only the first letter
  const lowerName = name.toLowerCase();
  const firstLetter = lowerName.charAt(0).toUpperCase(); // First letter capitalized
  const restOfName = lowerName.slice(1); // Rest of the name remains lowercase

  // Concatenate the first letter with the rest of the name
  const capitalizedName = firstLetter + restOfName;

  return capitalizedName;
}

// Test with various names of different lengths and cases
console.log(capitalizeName("julie")); // Output: Julie
console.log(capitalizeName("ALEXANDER")); // Output: Alexander
console.log(capitalizeName("christopher")); // Output: Christopher
console.log(capitalizeName("ELISABETH")); // Output: Elisabeth
