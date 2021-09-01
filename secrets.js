'use strict';

// Look, if you're going to this much trouble, why not just try to solve the puzzle as is?
const loneliness = "6c6f6e656c696e657373";

console.log(loneliness);
console.log(hex_to_ascii(loneliness));

function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
