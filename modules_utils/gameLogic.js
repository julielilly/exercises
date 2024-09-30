// import options from "./options.js"

// Since this is an array, one can try to add and/or remove items to see what happens.
const gameOptions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// We don't really want to mention the choices multiple times.

export const optionsArray = Object.keys(gameOptions); // ["rock", "paper", "scissors"]

export function getComputerChoice() {
  // const choices = ["rock", "paper", "scissors"];
  const choices = optionsArray;
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
