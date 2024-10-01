// List of vehicle objects with various properties like type, fuel, passengers, etc.
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// Reference to the table body element in the HTML for displaying vehicles
const tbodyPointer = document.querySelector("tbody");

// Initially display all vehicles when the page loads
showTheseVehicles(vehicles);

// Function to display the array of vehicles in the table
function showTheseVehicles(arr) {
  // Clear existing table content
  tbodyPointer.innerHTML = "";

  // Iterate over each vehicle in the array and add a row to the table
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${removeExcess(each.type)}</td>
  <td>${removeExcess(each.fuel)}</td>
  <td>${removeExcess(each.passengers)}</td> 
  <td>${removeExcess(each.stops)}</td>
  <td>${removeExcess(each.ownedBy)}</td>
  <td>${removeExcess(each.isElectric)}</td>
  <td>${removeExcess(each.isTandem)}</td>
</tr>`;
  });
}

// Helper function to handle undefined or true values
function removeExcess(parameter) {
  if (parameter === undefined) return "";
  if (parameter === true) return "X";
  return parameter;
}

// Filters for specific vehicle categories

const onlyIsElectric = vehicles.filter((vehicle) => {
  if (vehicle.isElectric) return true;
});
const onlySeveralSeats = vehicles.filter((vehicle) => {
  if (vehicle.passengers >= 2) return true;
});
const onlyJonasIsElectric = vehicles.filter((vehicle) => {
  if (vehicle.ownedBy === "Jonas" && vehicle.isElectric) return true;
});
const onlyRugbrod = vehicles.filter((vehicle) => {
  if (vehicle.passengers >= 2 && vehicle.fuel === "Rugbrød") return true;
});

// Add event listeners to buttons to display filtered vehicle lists

document.querySelector("#button1").addEventListener("click", () => {
  showTheseVehicles(onlyIsElectric);
});
document.querySelector("#button2").addEventListener("click", () => {
  showTheseVehicles(onlySeveralSeats);
});
document.querySelector("#button3").addEventListener("click", () => {
  showTheseVehicles(onlyJonasIsElectric);
});
document.querySelector("#button4").addEventListener("click", () => {
  showTheseVehicles(onlyRugbrod);
});
document.querySelector("#button5").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

// PURE STYLING FOR BUTTON ACTIVE STATE

// Select all buttons inside the #buttons div
const buttons = document.querySelectorAll("#buttons button");

// Function to remove the 'active' class from all buttons
function clearActiveButtons() {
  buttons.forEach((button) => button.classList.remove("active"));
}

// Add event listeners for each button to toggle 'active' class
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    clearActiveButtons(); // Clear active state from all buttons
    e.target.classList.add("active"); // Set the clicked button as active
  });
});
