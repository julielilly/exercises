const buttons = document.querySelectorAll("button");
const startbutton = document.querySelector(".start");
const text = document.querySelector("h1");
const body = document.querySelector("body");

let currentMax = 0;
let currentMin = 0;
let guessedNumber = 50;
let guesses = 0;

document.querySelector(".start").addEventListener("click", () => {
  currentMax = 100;
  currentMin = 1;
  guesses = 0;
  guessNumber(50);

  body.classList.remove("winner-animation");
  text.classList.remove("scale-animation");
  buttons.forEach((button) => button.classList.toggle("display"));
});
document.querySelector(".low").addEventListener("click", () => {
  currentMin = guessedNumber;
  guessNumber(guessedNumber + Math.ceil((currentMax - currentMin) / 2));
});
document.querySelector(".high").addEventListener("click", () => {
  currentMax = guessedNumber;
  guessNumber(guessedNumber - Math.ceil((currentMax - currentMin) / 2));
});
document.querySelector(".correct").addEventListener("click", () => {
  text.innerText = `Wuhuu, I used just ${guesses} guesses!`;
  startbutton.innerText = "Start a new game";

  buttons.forEach((button) => button.classList.toggle("display"));
  body.classList.add("winner-animation");
  text.classList.add("scale-animation");
});

function guessNumber(number) {
  guessedNumber = number;
  guesses++;

  text.innerText = `Is ${guessedNumber} your number?`;

  // write guessed number
  console.log(guessedNumber);
  console.log(guesses);
}
