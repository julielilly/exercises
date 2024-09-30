const list = document.querySelector("ul");
let costumers = [];

window.setInterval(generateNumber, 1000);

function generateNumber() {
  let number = Math.round(Math.random() * 100);

  const li = document.createElement("li");
  li.style.setProperty("--height", number);

  if (costumers.length >= 20) {
    costumers.shift();
    list.removeChild(list.firstElementChild);
  }

  costumers.push(number);
  console.log(costumers);

  list.appendChild(li);
}
