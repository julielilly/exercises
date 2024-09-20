import { determineWinner, getComputerChoice } from "./gameLogic.js";
import { displayResult } from "./ui.js";

const buttonsContainer = document.querySelector(".btns");

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
