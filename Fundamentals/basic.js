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

const myFunction = function () {};
console.log(myFunction());

const bar = (a) => {
	return;
};
console.log(bar());

const player = {
	owner: "Virat",
	type: "Batsman",
};
console.log(player.salary);

delete player.type;
console.log(player.type);

const list = ["Chris", "Pell", "Nomal"];
console.log(list[4]);

// * NON-PRIMITIVE | REFERENCE DATA TYPE -

const obj = { roll: 40, class: 10 };
const arr = [3, 4, 5];

const objFun = function () {
	obj.roll = 45;
	obj.name = "Jane";
	arr[0] = 1;
};

console.log(arr, obj);

objFun();
console.log(arr, obj);

const person1 = { job: "Teacher", salary: 2000 };
const person2 = person1;

person2.job = "Artist";
console.log(person1, person2);

// * TRUTHY AND FALSY VALUES -

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));

console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(4));
console.log(Boolean("") === false);

if (Boolean("") === false) {
	console.log("It is a false value");
}
