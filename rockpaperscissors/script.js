"use strict";

const player = document.querySelector("#player1");
const computer = document.querySelector("#player2");
const computerChoices = ["rock", "paper", "scissors"];

document.querySelectorAll("#buttons > *").forEach((btn) => {
  btn.addEventListener("click", () => {
    restart(btn.dataset.choice);
  });
});

function restart(userGuess) {
  player.addEventListener("animationend", () => {
    computer.classList.remove("shake", "rock", "paper", "scissors");
  });
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");

  userGuesses(userGuess);
}

function userGuesses(userGuess) {
  player.classList.add("shake");
  computer.classList.add("shake");

  player.addEventListener("animationend", () => {
    player.classList.remove("shake", "rock", "paper", "scissors");

    player.classList.add(userGuess);
  });

  computerGuesses(userGuess);
}

function computerGuesses(userGuess) {
  let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log("Computer Guess", computerGuess);
  console.log("User Guess", userGuess);

  computer.addEventListener("animationend", () => {
    computer.classList.remove("rock", "paper", "scissors");
    computer.classList.add(computerGuess);
  });

  determinWinner(computerGuess, userGuess);
}

function determinWinner(computerGuess, userGuess) {
  let result;

  if (userGuess === computerGuess) {
    result = "draw";
  } else if ((userGuess === "rock" && computerGuess === "paper") || (userGuess === "paper" && computerGuess === "scissors") || (userGuess === "scissors" && computerGuess === "rock")) {
    result = "computer";
  } else {
    result = "user";
  }

  showResult(result);
}

function showResult(result) {
  console.log("result ", result);

  player.addEventListener("animationend", () => {
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");

    if (result === "draw") {
      document.querySelector("#draw").classList.remove("hidden");
    } else if (result === "user") {
      document.querySelector("#win").classList.remove("hidden");
    } else if (result === "computer") {
      document.querySelector("#lose").classList.remove("hidden");
    }
  });
}
