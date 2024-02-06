"use strict";

const john = 45;
const melon = 60;

john > melon
	? console.log("John will eat the mango")
	: console.log("Melon will eat the mango");

const add = (value1, value2) =>
	!isNaN(value1 && value2)
		? Number(value1) + Number(value2)
		: "Please provide a valid number";

const subtract = (value1, value2) =>
	!isNaN(value1 && value2)
		? Number(value1) - Number(value2)
		: "Please provide a valid number";

const multiply = (value1, value2) =>
	!isNaN(value1 && value2)
		? Number(value1) * Number(value2)
		: "Please provide a valid number";

const divide = (value1, value2) =>
	!isNaN(value1 && value2)
		? Number(value1) / Number(value2)
		: "Please provide a valid number";

const calculation = (num1, num2, fn) => "Value: " + fn(num1, num2);

console.log(calculation(2, "34", add));
console.log(calculation(2, 4, multiply));
console.log(calculation(4, 2, divide));
console.log(calculation(10, 5, subtract));

const greater = (num2, num3) => (num2 > num3 ? num2 : num3);

console.log(greater(4, 5));
console.log(greater(6, 3));

const maximum = (...args) => Math.max(...args);
console.log(maximum(5, 6, 3, 7));

const maxMin = function (list) {
	const max = list.reduce((acc, num) => (num > acc ? num : acc), list[0]);
	const min = list.reduce((acc, num) => (num < acc ? num : acc), list[0]);
	return { max, min };
};

console.log(maxMin([9, 11, 8, 9, 45]));

const furniture = (
	chair = 1,
	table = 1,
	bed = 1,
	chairWood = chair * 3,
	tableWood = table * 10,
	bedWood = bed * 50
) => chairWood + tableWood + bedWood + " Woods";

console.log(furniture(4, 3, 4));
console.log(furniture());
console.log(furniture(0, 0));
console.log(furniture(1, 0, 0));

const phones = [
	{ phone: "Samsung", price: 500 },
	{ phone: "Iphone", price: 300 },
	{ phone: "Redmi", price: 400 },
	{ phone: "Nord", price: 500 },
];

const lowPrice = function (products) {
	const prices = products.map(({ price }) => price);
	return products[prices.indexOf(Math.min(...prices))].phone;
};

console.log(lowPrice(phones));

const products = [
	{ product: "shampoo", price: 200, quantity: 1, discount: 10 / 100 },
	{ product: "shoe", price: 100, quantity: 2, discount: 20 / 100 },
	{ product: "pant", price: 300, quantity: 3, discount: 30 / 100 },
];

const totalPrice = function (products) {
	return products.reduce(
		(acc, { price, quantity, discount }) =>
			acc + (price > 100 ? price - price * discount : price) * quantity,
		0
	);
};

console.log(totalPrice(products));

console.log(typeof null);

const cubicFn = (num) =>
	!isNaN(Number(num)) ? Math.pow(num, 3) : "Wrong input";

console.log(cubicFn("h 45"));
console.log(cubicFn("2"));

const matchFinder = (str1, str2) =>
	[str1, str2].every((word) => typeof word === "string")
		? str2.split(" ").some((word) => str1.includes(word))
		: "Wrong input";

console.log(matchFinder("John Melon", "on"));

const sortMake = (list) =>
	typeof list === "object" && list.every((num) => !isNaN(Number(num)))
		? list.every((num) => num > 0)
			? list.every((num) => num === list[0])
				? "equal"
				: list.map((num) => Number(num)).sort((a, b) => b - a)
			: "Negative Number"
		: "Invalid data type";

console.log(sortMake([4, "4"]));

const findAddress = (obj) =>
	Object.values(obj)
		.map((value) => value)
		.join(", ");

const address = {
	house: "15A",
	society: "Earth Perfect",
	street: "DiluRoad",
};

console.log(findAddress(address));

const canPay = (list, num) =>
	list.length > 0
		? list.reduce((acc, number) => acc + number) > num
			? true
			: false
		: "Empty Array";

console.log(canPay([6, 7], 10));
