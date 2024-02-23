"use strict";

// * SPREAD || REST OPERATOR

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

// * DESTRUCTURING

const university = {
	owner: "David Gray",
	founded: 2000,
	studentsNo: 3000,
};

const { owner: founder, founded } = university;
console.log(founder, founded);

const cars = {
	color: "white",
	brand: "BMW",
	price: 30000,
};

const { color, ...carData } = cars;
console.log(carData);

const numbers = [3, 6, 8, 9, 2];
const [three, six, ...others] = numbers;
console.log(three, six, others);

const list4 = [3, 4, 5];
const [first, , last] = list4;
console.log(last, first);

const coffee = ["milk", "powder"];
const [milk, powder] = coffee;

console.log(milk, powder);

const mathOperation = function (value1, value2) {
	const cubic1 = Math.pow(value1, 3);
	const cubic2 = Math.pow(value2, 3);
	return [cubic1, cubic2];
};

const [cubicOf2, cubicOf3] = mathOperation(2, 3);
console.log(cubicOf2, cubicOf3);

const keyValue = [
	["students", 4000],
	["branch", 5],
];

const [[, studentNo], [, branchNo]] = keyValue;

console.log(studentNo, branchNo);

keyValue.forEach(([key, value]) => {
	console.log(`Key: ${key} || value: ${value}`);
});

// * ES6 FEATURE -

// * OPTIONAL CHAINING

const product = {
	productName: "Macbook",
	productData: {
		price: 2500,
		chip: "M3pro",
		series: "M3",
		store: "apple",
	},
};

console.log(product.productDetail?.price);

// * COMPARISON OPERATOR -

const one = 1;
const oneString = "1";

console.log(one == oneString);
console.log(one === oneString);