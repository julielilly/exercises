// Get the dropdown element
const themeSelector = document.getElementById("themeSelector");

// Add an event listener to change the theme when the selection is changed
themeSelector.addEventListener("change", function () {
  // Change the data-theme attribute on the body element
  document.body.setAttribute("data-theme", themeSelector.value);
});
