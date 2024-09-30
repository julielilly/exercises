export function displayResult(user, computer, result, selector) {
  const resultDiv = document.querySelector(selector);
  resultDiv.textContent = `You chose ${user}, computer chose ${computer}. ${result}`;
}

// Be careful with using data-choice in cases like this, because as of right now, the array isn't dynamic (?)
// Also remember to use return twice in the function
export function createButtons(array) {
  return array.map((btn) => {
    return `<button class="btn" data-choice="${btn}">${btn}</button>`;
  });
}
