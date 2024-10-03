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
  if (parameter === undefined) return "-";
  if (parameter === true) return "X";
  return parameter;
}

// Filters for specific vehicle categories
const filters = {
  onlyIsElectric: vehicles.filter((vehicle) => vehicle.isElectric),
  onlySeveralSeats: vehicles.filter((vehicle) => vehicle.passengers >= 2),
  onlyJonasIsElectric: vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas" && vehicle.isElectric),
  onlyRugbrod: vehicles.filter((vehicle) => vehicle.passengers >= 2 && vehicle.fuel === "Rugbrød"),
  all: vehicles,
};

// Initially display all vehicles when the page loads
showTheseVehicles(vehicles);

document.querySelector("#buttons").addEventListener("click", (e) => {
  const buttons = document.querySelectorAll("#buttons button");
  buttons.forEach((button) => button.classList.remove("active")); // Clear active state from all buttons

  e.target.classList.add("active"); // Set the clicked button as active

  const filterName = e.target.dataset.filter;
  showTheseVehicles(filters[filterName]); // Show table with relevant filters
});
