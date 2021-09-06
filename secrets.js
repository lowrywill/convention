"use strict";

// Look, if you're going to this much trouble as to look here, sure, that's clever, but why not just try to solve the puzzle as is?
const codeLoneliness = "617574657572";
const codeMarvel = "796F757468";

const inputLoneliness = document.querySelector(".input-loneliness");
const buttonLoneliness = document.querySelector(".button-loneliness");
const correctLoneliness = document.querySelector(".correct-loneliness");
const incorrectLoneliness = document.querySelector(".incorrect-loneliness");
const inputMarvel = document.querySelector(".input-marvel");
const buttonMarvel = document.querySelector(".button-marvel");
const correctMarvel = document.querySelector(".correct-marvel");
const incorrectMarvel = document.querySelector(".incorrect-marvel");

buttonLoneliness.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputLoneliness.value.toLowerCase() == hex_to_ascii(codeLoneliness)) {
    incorrectLoneliness.style.display = "none";
    correctLoneliness.style.display = "block";
  } else {
    correctLoneliness.style.display = "none";
    incorrectLoneliness.style.display = "block";
  }
});

buttonMarvel.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputMarvel.value.toLowerCase() == hex_to_ascii(codeMarvel)) {
    incorrectMarvel.style.display = "none";
    correctMarvel.style.display = "block";
  } else {
    correctMarvel.style.display = "none";
    incorrectMarvel.style.display = "block";
  }
});

function hex_to_ascii(str1) {
  var hex = str1.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
