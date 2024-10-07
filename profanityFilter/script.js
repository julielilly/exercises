// Define the curse words array with bad and good words
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Get references to DOM elements
const textElement = document.getElementById("text");
const filterButton = document.getElementById("filterBtn");
const dialogElement = document.getElementById("dialog");
const closeDialogButton = document.getElementById("closeDialogBtn");

// Function to replace bad words with good ones
function replaceBadWords() {
  let text = textElement.innerHTML;
  let hasBadWords = false;

  // Iterate through each curse word and replace bad words
  curseWords.forEach((word) => {
    const badWordRegex = new RegExp(`\\b${word.bad}\\b`, "gi");
    if (badWordRegex.test(text)) {
      hasBadWords = true; // Flag to check if replacement happened
      text = text.replace(badWordRegex, `<span class="good-word">${word.good}</span>`);
    }
  });

  // Check if bad words were found and replaced
  if (hasBadWords) textElement.innerHTML = text;
  else dialogElement.showModal(); // Show dialog if no bad words are found
}

// Event listener for the filter button
filterButton.addEventListener("click", replaceBadWords);

// Event listener for closing the dialog
closeDialogButton.addEventListener("click", () => {
  dialogElement.close();
});
