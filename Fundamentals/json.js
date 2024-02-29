"use strict";

const person = {
	age: 40,
	founder: "ola",
	location: "India",
	isRich: true,
	children: ["James", "Chris"],
	university: {
		year: 2012,
		uniName: "Harvard",
	},
};

const personJson = JSON.stringify(person);
const personParse = JSON.parse(personJson);

console.log(personJson);
console.log(personParse);

// * ASYNCHRONOUS VS SYNCHRONOUS

let [a, b, c] = [1, 2, 3];
const equation = (x) => a * Math.pow(x, 2) + b * x + c;

setTimeout(() => {
	console.log(c);
	console.log("Total calculation is " + equation(2));
}, 2000);

console.log(a);
console.log(b);

// * SETTIMEOUT | SETINTERVAL -

const timerApp = () => {
	let time = 1;
	const timer = setInterval(() => {
		console.log(time);
		time++;
		if (time > 5) clearInterval(timer);
	}, 2000);
};

// timerApp();

// * TRY | CATCH | FINALLY -

try {
	console.log(number);
} catch (error) {
	console.log(error.message);
} finally {
	console.log("all done");
}

console.log(7);
