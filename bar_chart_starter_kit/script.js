const list = document.querySelector("ul");
let costumers = [];

window.setInterval(generateNumber, 1000); //kører funtionen generateNumber en gang i sekundet

function generateNumber() {
  let number = Math.round(Math.random() * 100); //laver et random tal mellem 1 og 100

  const li = document.createElement("li"); //laver et li element
  li.style.setProperty("--height", number); //styler højden på li elementet med det random tal

  if (costumers.length >= 20) {
    costumers.shift(); //fjerner det første tal i array-et når længden på array bliver 20
    list.removeChild(list.firstElementChild); //fjerne det første li element under samme omstændigheder
  }

  costumers.push(number); //tilføjer number til enden af array
  console.log(costumers);

  list.appendChild(li); //sætter li elementet ind i documentet
}
