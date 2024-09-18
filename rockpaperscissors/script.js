"use strict";

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const player = document.querySelector("#player1");
const computer = document.querySelector("#player2");
const buttons = [rockButton, paperButton, scissorsButton];

const computerChoices = ["rock", "paper", "scissors"];
let userGuess;

window.onload = restart();

function restart() {
  computer.classList.remove("rock", "paper", "scissors");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");

  rockButton.addEventListener("click", rock);
  paperButton.addEventListener("click", paper);
  scissorsButton.addEventListener("click", scissors);
}

function rock() {
  userGuess = "rock";
  userGuesses();
}

function paper() {
  userGuess = "paper";
  userGuesses();
}

function scissors() {
  userGuess = "scissors";
  userGuesses();
}

function userGuesses() {
  player.classList.add("shake");
  computer.classList.add("shake");

  player.addEventListener("animationend", () => {
    player.classList.remove("rock", "paper", "scissors");
    player.classList.remove("shake");

    if (userGuess === "rock") player.classList.add("rock");
    if (userGuess === "paper") player.classList.add("paper");
    if (userGuess === "scissors") player.classList.add("scissors");
  });

  computerGuesses();
}

function computerGuesses() {
  let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log("Computer Guess", computerGuess);
  console.log("User Guess", userGuess);

  computer.addEventListener("animationend", () => {
    computer.classList.remove("rock", "paper", "scissors");
    computer.classList.remove("shake");

    if (computerGuess === "rock") {
      computer.classList.add("rock");
    }
    if (computerGuess === "paper") {
      computer.classList.add("paper");
    }
    if (computerGuess === "scissors") {
      computer.classList.add("scissors");
    }
  });

  determinWinner(computerGuess);
}

function determinWinner(computerGuess) {
  let result;

  if (userGuess === computerGuess) {
    result = "draw";
  }

  if (userGuess === "rock" && computerGuess === "paper") {
    result = "computer";
  }
  if (userGuess === "rock" && computerGuess === "scissors") {
    result = "user";
  }

  if (userGuess === "paper" && computerGuess === "rock") {
    result = "user";
  }
  if (userGuess === "paper" && computerGuess === "scissors") {
    result = "computer";
  }

  if (userGuess === "scissors" && computerGuess === "rock") {
    result = "computer";
  }
  if (userGuess === "scissors" && computerGuess === "paper") {
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

  restart();
}
