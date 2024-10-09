"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let filteredAnimals = [];
let winners = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  favorite: false,
  winner: false,
};

function start() {
  console.log("ready");

  //filters
  document.querySelector("#buttons").addEventListener("click", addFilter);

  //sort
  document.querySelector("#sorting").addEventListener("click", sortAnimals);

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // Initialize filteredAnimals with allAnimals data
  filteredAnimals = [...allAnimals];

  displayList(filteredAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;
  animal.favorite = false;
  animal.winner = false;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  //winner
  const winnerElement = clone.querySelector("[data-field=winner]");
  winnerElement.innerHTML = "<span>🏆</span>";
  winnerElement.setAttribute("data-active", animal.winner ? "true" : "false");

  // Add event listener to toggle winner status
  winnerElement.addEventListener("click", () => {
    const currentWinners = allAnimals.filter((animal) => animal.winner); //check how many winners there are
    const sameTypeWinner = currentWinners.some((winner) => winner.type === animal.type); //check if the selected animals type is already a winner

    if (animal.winner) {
      //if animal is currently a winner, just toggle off
      animal.winner = false;
      winnerElement.setAttribute("data-active", "false");
    } else {
      //if animal is not a winner, check constraints
      if (currentWinners.length < 2 && !sameTypeWinner) {
        animal.winner = true;
        winnerElement.setAttribute("data-active", "true");
      } else {
        // Show dialog with current winners
        const dialogHeader = document.getElementById("dialog-header");
        const dialogMessege = document.getElementById("dialog-message");
        const winnerList = document.getElementById("winner-list");

        // Clear previous winners from the list
        winnerList.innerHTML = "";

        if (sameTypeWinner) {
          dialogHeader.innerText = "You can only have one winner of the same type!";
          dialogMessege.innerText = "Remove the other if you want to appoint a new one";
        } else {
          dialogHeader.innerText = "You can only have two winners!";
          dialogMessege.innerText = "Remove one before you appoint more";
        }

        // Add current winners to the dialog
        currentWinners.forEach((winner) => {
          const listItem = document.createElement("li");
          listItem.innerText = winner.name; // Show winner's name
          const removeButton = document.createElement("button");
          removeButton.innerText = "remove";

          // Remove winner functionality
          removeButton.onclick = () => {
            // Set the specific winner's status to false
            winner.winner = false;

            // Find the trophy element for this winner
            const winnerTrophy = Array.from(document.querySelectorAll("[data-field=winner]")).find((element) => {
              return element.closest("tr").querySelector("[data-field=name]").textContent === winner.name;
            });
            // Update trophy display
            if (winnerTrophy) {
              winnerTrophy.setAttribute("data-active", "false"); // Set data-active to false
            }

            dialogBox.style.display = "none"; // Hide dialog
          };

          listItem.appendChild(removeButton);
          winnerList.appendChild(listItem);
        });

        const dialogBox = document.getElementById("dialog");
        dialogBox.style.display = "block"; // Show dialog

        // Close dialog button
        document.getElementById("close-dialog").onclick = () => {
          dialogBox.style.display = "none"; // Hide dialog
        };
      }
    }
  });

  //favorite
  const starElement = clone.querySelector("[data-field=star]");
  starElement.innerHTML = "<span>⭐</span>";
  starElement.setAttribute("data-active", animal.favorite ? "true" : "false");

  // Add event listener to toggle favorite status
  starElement.addEventListener("click", () => {
    // Toggle the favorite property in the global allAnimals array
    animal.favorite = !animal.favorite;

    // Update the data-active attribute based on the new favorite status
    starElement.setAttribute("data-active", animal.favorite ? "true" : "false");
  });

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function addFilter(e) {
  const filterType = e.target.dataset.filter;

  // Filter animals based on the selected type
  if (filterType === "*") {
    // If filter is 'all', show all animals
    filteredAnimals = [...allAnimals];
  } else {
    // Otherwise, filter by the selected type
    filteredAnimals = allAnimals.filter((animal) => animal.type === filterType);
  }

  // visual
  const buttons = document.querySelectorAll("#buttons button");
  buttons.forEach((button) => button.classList.remove("active")); // Clear active state from all buttons

  e.target.classList.add("active"); // Set the clicked button as active

  // Display the filtered list
  displayList(filteredAnimals);
}

function sortAnimals(e) {
  const headers = document.querySelectorAll("#sorting th");
  const sortName = e.target.dataset.sort; // Get the property to sort by
  let sortDirection = e.target.dataset.sortDirection; // Get current sort direction from dataset

  // Reset other headers
  headers.forEach((header) => {
    header.classList.remove("sortby");
    header.dataset.sortDirection = "desc";
  });

  // Toggle sort direction
  sortDirection = sortDirection === "asc" ? "desc" : "asc";
  e.target.dataset.sortDirection = sortDirection;

  // Sort
  if (sortName === "star") {
    filteredAnimals.sort((a, b) => {
      // Sort by favorite property (0 or 1)
      if (sortDirection === "asc") return b.favorite - a.favorite;
      else return a.favorite - b.favorite;
    });
  } else if (sortName === "winner") {
    filteredAnimals.sort((a, b) => {
      // Sort by favorite property (0 or 1)
      if (sortDirection === "asc") return b.winner - a.winner;
      else return a.winner - b.winner;
    });
  } else {
    // Sort the filtered animals array based on the given property and direction
    filteredAnimals.sort((a, b) => {
      if (sortDirection === "asc") return a[sortName] < b[sortName] ? -1 : a[sortName] > b[sortName] ? 1 : 0;
      else return a[sortName] > b[sortName] ? -1 : a[sortName] < b[sortName] ? 1 : 0;
    });
  }

  // Toggle the sortby class on the clicked header
  e.target.classList.toggle("sortby");

  displayList(filteredAnimals);
}
