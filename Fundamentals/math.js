"use strict";

// console.log(Math.sqrt(4));
// console.log(Math.cbrt(125));
// console.log(Math.max(3, 5, 7));
// console.log(Math.min(3, 4, 7));
// console.log(Math.abs(-6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(6.7));
// console.log(Math.pow(2, 6));
// console.log(Math.trunc(9.9));
// console.log(Math.ceil(Math.random() * 6));
// console.log(Math.round(5.4));
// console.log(Math.round(5.6));

// const now = new Date();
// console.log(now.getDate());
// console.log(now.getTime());

let a = 4;
let b = 5;

console.log(a, b);
let c = a;
a = b;
b = c;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

const randomInt = function (min, max) {
	return Math.floor(Math.random() * Math.abs(max - min)) + min;
};

console.log(randomInt(3, 10));

for (let i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000);
}
