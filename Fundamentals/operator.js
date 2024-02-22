"use strict";

// * SPREAD OPERATOR - RIGHT SIDE

const nums = [4, 5];
const list1 = [1, 2, 3, ...nums];
const list2 = [...list1, 6, 7];
const nums1 = [9, 10, 11];
const list3 = [...nums, ...nums1];

console.log(list1);
console.log(list2);
console.log(list3);

const restaurant = {
	owner: "David Melon",
	items: ["soup", "chicken", "prawn"],
};

const restaurantCopy = { ...restaurant };
restaurantCopy.owner = "Dave Gray";

console.log(restaurant);
console.log(restaurantCopy);

const maxValue = Math.max(...list1);
const minValue = Math.min(...list1);
console.log(maxValue, minValue);

// * DESTRUCTURING -

const university = {
	owner: "David Gray",
	founded: 2000,
	studentsNo: 3000,
};

const { owner: founder, founded } = university;
console.log(founder, founded);

const numbers = [3, 6, 8, 9, 2];
const [three, six, ...others] = numbers;
console.log(three, six, others);

const list4 = [3, 4, 5];
const [first, , last] = list4;
console.log(last, first);

const coffee = ["milk", "powder"];
const [milk, powder] = coffee;

console.log(milk, powder);