"use strict";

const fruits = ["orange", "apple", "pineapple", "banana"];
const business = {
	company: "Google",
	revenue: 4000,
};

fruits.sort();
console.log(fruits);

const listNums = [37, 54, 63, 92, 22, 82];
listNums.sort().reverse();
console.log(listNums);

const numList = [23, 12, 21, 26, 78, 83];
numList.sort();
console.log(numList);

// for (const fruit of fruits) console.log(fruit);
// for (const index in fruits) console.log(fruits.at(index).toUpperCase());

// for (const key in business) {
// 	console.log(`${key} == ${business[key]}`);
// }
// fruits.forEach((fruit) => console.log(fruit[0].toUpperCase() + fruit.slice(1)));

const nums = [1, 2, 3, 4, 5, 6];
const numsCopy = nums.slice(0);
const reversed = nums.reverse();
console.log(nums, reversed, numsCopy);

const empty = [];
for (let i = numsCopy.length - 1; i >= 0; i--) empty.push(numsCopy[i]);

console.log(empty);

const list = [];
numsCopy.forEach((num) => list.unshift(num));
console.log(list);

// * ARRAY METHODS -

const CalcArr = (list) =>
	(
		list.map((num) => Math.pow(num, 2)).reduce((total, num) => total + num, 0) /
		list.length
	).toFixed(2);

console.log(CalcArr(nums));

// * MAP METHOD

const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map((num) => Math.pow(num, 2));
const cubicArr = arr.map((num) => Math.pow(num, 3));

console.log(doubleArr);
console.log(cubicArr);
