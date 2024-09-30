import { determineWinner, getComputerChoice, optionsArray } from "./gameLogic.js";
import { displayResult, createButtons } from "./ui.js";

const buttonsContainer = document.querySelector(".btns");

// join("") fjerner punktum mellem knapperne, og space giver dem gap
buttonsContainer.innerHTML = createButtons(optionsArray).join(" ");

// Hvis det button jeg klikker på ikke har option/data choice, så stopper vi. "!e" betyder hvis noget ikke er sant/rigtigt.
buttonsContainer.addEventListener("click", (e) => {
  if (!e.target.dataset.choice) {
    return;
  }

  playGame(e.target.dataset.choice);
});

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  displayResult(userChoice, computerChoice, result, ".result");
}
