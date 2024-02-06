"use strict";

// ? FUNCTIONS -

function mulitply(a, b) {
	return a * b;
}

const first = mulitply(3, 4);
const second = mulitply(4, 5);
const third = mulitply(5, 6);

console.log(first, second, third);

const square = (num) => Math.pow(num, 2);

const sq2 = square(2);
const sq3 = square(3);
const sq4 = square(4);
const sq5 = square(5);

console.log(sq2, sq3, sq4, sq5);

const half = (num) => Number((num / 3).toFixed(2));

const half1 = half(4);
const half2 = half(5);

console.log(half1, half2);

const sum = function (list) {
	return list.reduce((total, num) =>
		!isNaN(Number(num)) ? total + Number(num) : total
	);
};

const arr1 = sum([4, 6, 7, 7]);
const arr2 = sum([4, "6", "19", "hello 23"]);
console.log(arr1, arr2);

const multiplication = function (list) {
	return list.reduce((acc, num) => acc * num);
};

console.log(multiplication([4, 5, 4, 5]));

const inchToFeet = function (num) {
	const feet = parseInt(num / 12);
	const inch = num % 12;
	return `${feet} ft ${inch} inch`;
};

console.log(inchToFeet(67));

const mileToKm = (mile) => (mile * 1.6).toFixed(2);

console.log(mileToKm(4));

const calcLeap = (year) => {
	if (year % 4 === 0 && year % 100 !== 0) {
		return "Leap Year";
	} else {
		return "Not A Leap Year";
	}
};

console.log(calcLeap(2024));

const average = function (list) {
	const evens = [];
	const odds = [];
	list.forEach((num) => {
		num % 2 === 0 ? evens.push(num) : odds.push(num);
	});
	const oddsTotal = odds.reduce((acc, num) => num + acc) / odds.length;
	const evensTotal = evens.reduce((acc, num) => num + acc) / evens.length;
	return { oddsTotal, evensTotal };
};

console.log(average([4, 6, 7, 9, 23]));

const removeDup = function (list) {
	const set = new Set(list);
	return [...set];
};

const fruits = ["orange", "apple", "orange", "apple"];

console.log(removeDup([2, 2, 2, 4, 5]));
console.log(removeDup(fruits));

const string = "python";
console.log([...string]);
