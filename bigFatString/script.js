// Add an event listener to the button with id "processButton"
document.getElementById("processButton").addEventListener("click", function () {
  const input = document.getElementById("inputBox").value; // Get the input value from the input box
  const option = document.getElementById("dropdown").value; // Get the selected option from the dropdown
  let output = ""; // Initialize an output variable to hold the processed result

  // Use a switch statement to determine which operation to perform based on the selected option
  switch (option) {
    case "capitalizeFirst":
      // Capitalize the first character and lowercase the rest
      output = input[0].toUpperCase() + input.slice(1).toLowerCase();
      break;

    case "findFirstName":
      // Split the input string by spaces and take the first element as the first name
      const firstName = input.split(" ")[0];
      output = firstName; // Assign the first name to output
      break;

    case "lengthOfFirstName":
      // Get the length of the first name by splitting and measuring its length
      const lengthOfFirstName = input.split(" ")[0].length;
      output = lengthOfFirstName; // Assign the length to output
      break;

    case "findMiddleName":
      // Split the input string into an array of names
      const names = input.split(" ");

      // Check if there are more than 2 names (first, middle, last)
      if (names.length > 2) {
        // Join all names except the first and last to get the middle name
        const middleName = names.slice(1, -1).join(" ");
        // Find the start and end position of the middle name in the original string
        const start = input.indexOf(middleName);
        const end = start + middleName.length - 1;

        // Construct the output string with middle name info
        output = `Middle Name: "${middleName}", Start: ${start}, End: ${end}`;
      } else {
        // If no middle name is found, inform the user
        output = "No middle name found.";
      }
      break;

    case "checkFileType":
      // Use a regular expression to check if the input is a .png or .jpg file
      const isPng = /\.png$/i.test(input); // Check if input is a .png file
      const isJpg = /\.jpg$/i.test(input); // Check if input is a .jpg file

      // Set output based on the type of image file
      output = isPng ? "This is a valid PNG file." : isJpg ? "This is a valid JPG file." : "This is not a valid image file.";
      break;

    case "hidePassword":
      // Create a string of stars with the same length as the input (password)
      output = "*".repeat(input.length);
      break;

    case "uppercaseThird":
      // Check if the input length is at least 3 characters
      if (input.length >= 3) {
        // Uppercase the third character and concatenate the rest
        output = input.substring(0, 2) + input[2].toUpperCase() + input.substring(3);
      } else {
        // Return the input as is if less than 3 characters
        output = input;
      }
      break;

    case "capitalizeAfterSpace":
      // Use regex to capitalize the first letter after a space or hyphen
      output = input.replace(/(?:\s|-)(\w)/g, (match, letter) => `${match[0]}${letter.toUpperCase()}`);
      break;

    default:
      // If no valid option is selected, prompt the user to select one
      output = "Please select an option.";
  }

  // Display the processed output in the output box
  document.getElementById("outputBox").value = output;
});
