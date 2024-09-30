// cd loadJSON
// node --watch index.js

function init() {
  console.log("init");
  //load JSON
  loadJSON("https://raw.githubusercontent.com/julielilly/frontend-design/main/resources/json/employees.json", prepareData);
  //   loadJSON("https://raw.githubusercontent.com/julielilly/frontend-design/main/resources/json/employees.json", (data) => {
  //     console.log("prepare data");
  //     // Data received from JSON
  //     console.table(data);
  //   });
}

function prepareData(data) {
  console.log("prepare data");
  // Data received from JSON
  console.table(data);
}

//await kan kun blive brugt i en async function
async function loadJSON(url, callback) {
  //fetch er en async function = den kan loades mens resten af scriptet læses
  //await, gør at man venter på at filen loades inden man kører videre i scriptet
  const response = await fetch(url);
  const jsonData = await response.json();

  callback(jsonData);
}

init();
