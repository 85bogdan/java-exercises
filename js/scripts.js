// scripts.js

var a = 7;
var b = 134;
var value;
value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
	console.log('wynik dodatni')
} else if (value < 0) {
	console.log('wynik ujemny')
} else {console.log('wynik jest równy zero')
};