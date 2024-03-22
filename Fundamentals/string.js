"use strict";

// const country = "Canada";

// console.log(country.length);
// console.log(country.charAt(2));
// console.log(country.at(-1));

// const country2 = country.replaceAll("a", "i");
// console.log(country2);

// console.log(country.toUpperCase());
// console.log(country.toLowerCase());

// const country3 = "india";
// console.log(country3[0].toUpperCase() + country3.slice(1));

// const life1 = "water ";
// const life2 = " water";

// console.log(life1.trimEnd() === life2.trimStart());

// const text = "I want to be a developer";
// console.log(text.split(" ").join(" + "));

// console.log(country.concat(" ", country2));
// console.log(country.includes("a"));

// console.log(text.split("").reverse().join(""));

if (4 > 2) {
	var game = true;
	let playing = false;
	const isRich = true;
	console.log(game, playing, isRich);
}

// * PROMISE / ASYNC / AWAIT -

// const success = false;
// const promiseFun = () => {
// 	return new Promise((resolve, reject) => {
// 		success ? resolve(success) : reject(success);
// 	});
// };

// // promiseFun()
// // 	.then((data) => console.log(data))
// // 	.catch((error) => console.log(error));

const list = [3, 4, 5, 8];

const lastValue = list.forEach((num) => num);
console.log(lastValue);
