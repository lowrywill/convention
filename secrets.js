'use strict';

// Look, if you're going to this much trouble, why not just try to solve the puzzle as is?
const loneliness = "auteur";

console.log(loneliness);

function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
console.log(hex_to_ascii('6c 6f 6e 65 6c 69 6e 65 73 73'));
console.log(hex_to_ascii('6c'));
