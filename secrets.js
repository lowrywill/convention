'use strict';

// Look, if you're going to this much trouble as to look here, sure, that's clever, but why not just try to solve the puzzle as is?
const loneliness = "617574657572";

const inputLoneliness = document.querySelector('.input-loneliness');
const buttonLoneliness = document.querySelector('.button-loneliness');
const correctLoneliness = document.querySelector('.correct-loneliness');
const incorrectLoneliness = document.querySelector('.incorrect-loneliness');


console.log(hex_to_ascii(loneliness).toLowerCase());

buttonLoneliness.addEventListener('click', function (e) {
	e.preventDefault()
	if (inputLoneliness.value.toLowerCase() == hex_to_ascii(loneliness)) {
		incorrectLoneliness.style.display = "none";
		correctLoneliness.style.display = "block";
	} else {
		correctLoneliness.style.display = "none";
		incorrectLoneliness.style.display = "block";
	}
});


function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }


 