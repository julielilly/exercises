import options from "./options.js";

// const gameOptions = {
//   rock: "scissors",
//   paper: "rock",
//   scissors: "paper",
// };

export function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

export function determineWinner(user, computer) {
  if (user === computer) {
    return "Draw";
  } else if (gameOptions[user] === computer) {
    return "User wins";
  } else {
    return "Computer wins";
  }
}
