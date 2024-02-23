"use strict";

// * PRIMITIVE DATA TYPES -

const number = 120;
const string = "JavaScript";
const boolean = false;
const nullValue = null;
let counter; // * undefined

console.log(nullValue == undefined);

console.log(counter);

const sub = (a, b, c) => {
	return a, b, c;
};

console.log(sub(3, 5));

const myFunction = function () {
	const sum = 3 + 6;
};
console.log(myFunction());

const add = (a, b) => {
	a + b;
	return;
};
console.log(add());

const player = {
	owner: "Virat",
	type: "Batsman",
};
console.log(player.salary);

const list = ["Chris", "Pell", "Nomal"];
console.log(list[4]);

// * NON-PRIMITIVE | REFERENCE DATA TYPE -

const obj = { roll: 40, class: 10 };
const arr = [3, 4, 5];

const person1 = { job: "Teacher", salary: 2000 };
const person2 = person1;

person2.job = "Artist";
console.log(person1, person2);
