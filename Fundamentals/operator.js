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