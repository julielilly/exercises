"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header h1" },
      { text: "Das Ro-Bot", location: ".footer h2" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header h1" },
      { text: "Robotten", location: ".footer h2" },
    ],
  },
};

// Funktion til at sætte sproget dynamisk med lang
function setLanguage(lang) {
  // Itererer gennem tekstobjekterne for det valgte sprog og opdaterer indholdet i DOM'en
  texts[lang].texts.forEach((elm) => (document.querySelector(elm.location).innerText = elm.text));
}

setLanguage("da"); // Sætter standardteksten til dansk

// Funktion, der kaldes, når brugeren ændrer sproget i dropdown-menuen
function updateValue(e) {
  const locale = e.target.value; // Henter det valgte sprog fra dropdown'en
  setLanguage(locale); // Opdaterer teksten til det valgte sprog
}

// Når brugeren vælger et nyt sprog, kaldes 'updateValue' funktionen
document.querySelector("select").addEventListener("change", updateValue);
