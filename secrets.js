"use strict";

// Look, if you're going to this much trouble as to look here, sure, that's clever, but why not just try to solve the puzzle as is?
const codeLoneliness = "617574657572";
const codeMarvel = "796F757468";
const codeNether = "61636f726e";
const codeRUR = "647265616d";
const codeBSHMM = "73757065726865726f6573";
const codeDeinde = "6e6575726f657468696373";
const codeDogact = "73746f7279";
const codeFeathers = "6361727665";

const inputLoneliness = document.querySelector(".input-loneliness");
const buttonLoneliness = document.querySelector(".button-loneliness");
const correctLoneliness = document.querySelector(".correct-loneliness");
const incorrectLoneliness = document.querySelector(".incorrect-loneliness");
const inputMarvel = document.querySelector(".input-marvel");
const buttonMarvel = document.querySelector(".button-marvel");
const correctMarvel = document.querySelector(".correct-marvel");
const incorrectMarvel = document.querySelector(".incorrect-marvel");
const inputNether = document.querySelector(".input-nether");
const buttonNether = document.querySelector(".button-nether");
const correctNether = document.querySelector(".correct-nether");
const incorrectNether = document.querySelector(".incorrect-nether");
const inputRUR = document.querySelector(".input-rur");
const buttonRUR = document.querySelector(".button-rur");
const correctRUR = document.querySelector(".correct-rur");
const incorrectRUR = document.querySelector(".incorrect-rur");
const inputBSHMM = document.querySelector(".input-bshmm");
const buttonBSHMM = document.querySelector(".button-bshmm");
const correctBSHMM = document.querySelector(".correct-bshmm");
const incorrectBSHMM = document.querySelector(".incorrect-bshmm");
const inputDeinde = document.querySelector(".input-deinde");
const buttonDeinde = document.querySelector(".button-deinde");
const correctDeinde = document.querySelector(".correct-deinde");
const incorrectDeinde = document.querySelector(".incorrect-deinde");
const inputDogact = document.querySelector(".input-dogact");
const buttonDogact = document.querySelector(".button-dogact");
const correctDogact = document.querySelector(".correct-dogact");
const incorrectDogact = document.querySelector(".incorrect-dogact");
const inputFeathers = document.querySelector(".input-feathers");
const buttonFeathers = document.querySelector(".button-feathers");
const correctFeathers = document.querySelector(".correct-feathers");
const incorrectFeathers = document.querySelector(".incorrect-feathers");

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

buttonNether.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputNether.value.toLowerCase() == hex_to_ascii(codeNether)) {
    incorrectNether.style.display = "none";
    correctNether.style.display = "block";
  } else {
    correctNether.style.display = "none";
    incorrectNether.style.display = "block";
  }
});

buttonRUR.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputRUR.value.toLowerCase() == hex_to_ascii(codeRUR)) {
    incorrectRUR.style.display = "none";
    correctRUR.style.display = "block";
  } else {
    correctRUR.style.display = "none";
    incorrectRUR.style.display = "block";
  }
});

buttonBSHMM.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputBSHMM.value.toLowerCase() == hex_to_ascii(codeBSHMM)) {
    incorrectBSHMM.style.display = "none";
    correctBSHMM.style.display = "block";
  } else {
    correctBSHMM.style.display = "none";
    incorrectBSHMM.style.display = "block";
  }
});

buttonDeinde.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputDeinde.value.toLowerCase() == hex_to_ascii(codeDeinde)) {
    incorrectDeinde.style.display = "none";
    correctDeinde.style.display = "block";
  } else {
    correctDeinde.style.display = "none";
    incorrectDeinde.style.display = "block";
  }
});

buttonDogact.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputDogact.value.toLowerCase() == hex_to_ascii(codeDogact)) {
    incorrectDogact.style.display = "none";
    correctDogact.style.display = "block";
  } else {
    correctDogact.style.display = "none";
    incorrectDogact.style.display = "block";
  }
});

buttonFeathers.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputFeathers.value.toLowerCase() == hex_to_ascii(codeFeathers)) {
    incorrectFeathers.style.display = "none";
    correctFeathers.style.display = "block";
  } else {
    correctFeathers.style.display = "none";
    incorrectFeathers.style.display = "block";
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
