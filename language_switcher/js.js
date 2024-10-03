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

function setLanguage(lang) {
  texts[lang].texts.forEach((elm) => (document.querySelector(elm.location).innerText = elm.text));
}

setLanguage("da");

function updateValue(e) {
  const locale = e.target.value;
  setLanguage(locale);
}

document.querySelector("select").addEventListener("change", updateValue);
