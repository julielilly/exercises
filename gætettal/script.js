const answerText = document.querySelector(".answer");
const button = document.querySelector(".button");

let number = Math.round(Math.random() * 100);
console.log(number);

button.addEventListener("click", checkNumber);

function checkNumber() {
  const input = document.getElementById("guess").valueAsNumber;
  console.log(input);

  if (number === input) {
    answerText.classList.add("animation");
    answerText.innerText = "You guessed the number";
  } else if (number > input) {
    answerText.innerText = "Your number is to low";
  } else {
    answerText.innerText = "Your number is to high";
  }
}
