"use strict";

const person = {
	age: 40,
	founder: "ola",
	location: "India",
	isRich: true,
	childs: ["James", "Chris"],
	university: {
		year: 2012,
		uniName: "Harvard",
	},
};

const personJson = JSON.stringify(person);
const personParse = JSON.parse(personJson);

console.log(personJson);
console.log(personParse);
