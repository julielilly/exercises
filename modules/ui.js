export function displayResult(user, computer, result, selector) {
  const resultDiv = document.querySelector(selector);
  resultDiv.textContent = `You chose ${user}, computer chose ${computer}. ${result}`;
}
