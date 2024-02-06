"use strict";

// // ? DEFAULT PARAMETERS -

// const bookings = [];

// const createBooking = function (
// 	flightNum,
// 	numPassengers = 1,
// 	price = 199 * numPassengers
// ) {
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	bookings.push(booking);
// };

// createBooking("32DGH");
// createBooking("890WER", 3);
// createBooking("234WEV", 5, 800);

// bookings.forEach((booking) => {
// 	console.log(booking);
// });

// // ? FUNCTION REST PARAMETER -

// const rest = function (...list) {
// 	list.forEach((value) => {
// 		console.log(value);
// 	});
// 	for (let value of list) console.log(value);
// 	for (let value in list) console.log(list[value]);
// 	console.log(list.at(-1));
// };

// rest(4, 9, 16, 25, 29, 100, 66, 77);

// // ? HOW FUNCTION WORKS: VALUES VS REFERENCE

// const flight = "LHT32";
// const flightPerson = {
// 	fullName: "David Melon",
// 	age: 40,
// };

// const checkIn = function (flight, passenger) {
// 	passenger.fullName = "Mr " + passenger.fullName;
// 	passenger.flightNum = flight;
// 	if (passenger.age) {
// 		console.log(passenger.age);
// 	}
// };

// checkIn(flight, flightPerson);
// console.log(flightPerson);

// // ? CALLBACKS -

// const oneWord = (str) =>
// 	str
// 		.split(" ")
// 		.map((word) => word[0].toUpperCase() + word.slice(1))
// 		.join("");

// const upperFirstWord = (str) => {
// 	const [first, ...others] = str.split(" ");
// 	return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = (str, fn) => {
// 	console.log(`Original string: ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);
// };

// transformer("Python is the simple language.", oneWord);
// transformer("Python is the simple language.", upperFirstWord);

// // ? FUNCTION RETURNING FUNCTIONS -

// const greet = (greeting) => (name) => (age) => (school) =>
// 	`${greeting}, ${name} age of ${age} from ${school}.`;

// console.log(greet("Good Morning")("James")(20)("Holy Cross"));

// ? DATA STRUCTURE OPERATORS -

// const weekdays = ["sun", "mon", "tues", "wed", "thrus", "fri", "sat"];
// const openingHours = {
// 	[weekdays[3]]: {
// 		open: 12,
// 		close: 22,
// 	},
// 	[weekdays.at(2)]: {
// 		open: 12,
// 		close: 21,
// 	},
// 	[weekdays.at(-1)]: {
// 		open: 10,
// 		close: 20,
// 	},
// };

// const restaurant = {
// 	restaurantName: "Canton",
// 	location: "Lisbon, Portugal",
// 	categories: ["Italian", "Indian", "Chineese", "Japaneese"],
// 	startMenu: ["Soup", "Fries", "Coffee"],
// 	mainMenu: ["Burger", "Pizza", "Noddles"],
// 	openingHours,
// 	order(startIndex, mainIndex) {
// 		return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
// 	},
// 	orderPizza(mainIng, ...othersIng) {
// 		console.log(mainIng);
// 		console.log(othersIng);
// 		const ingredients = [mainIng, ...othersIng];
// 		ingredients.forEach((ing) => {
// 			console.log(ing);
// 		});
// 	},
// };

// restaurant.orderPizza("Onion", "Spinach", "Chicken");
// console.log(restaurant.openingHours);
// console.log(restaurant.order(1, 1));

// ? DESTRUCTING - rest / spread

// const arr = [1, 2, 3, ...[4, 5, 6]];
// console.log(arr);

// const [one, two, ...nums] = arr;

// const [soup, fries, ...others] = [
// 	...restaurant.startMenu,
// 	...restaurant.mainMenu,
// ];

// console.log(soup, fries, others);

// const { tues, ...days } = restaurant.openingHours;

// console.log(tues, days);

// const add = (...numbers) => {
// 	let sum = 0;
// 	numbers.forEach((num) => {
// 		sum += num;
// 	});
// 	console.log(sum);
// };

// add(3, 5, 6);

// const foods = [...restaurant.mainMenu];
// foods.pop();
// console.log(foods);

// const ingredients = [
// 	prompt("Ingredient 1?"),
// 	prompt("Ingredient 2?"),
// 	prompt("Ingredient 3?"),
// ];

// restaurant.orderPizza(ingredients[0], ingredients[1], ingredients[2]);

// const newRestaurant = {
// 	foundedIn: 1998,
// 	...restaurant,
// 	founder: "Gupta",
// };
// console.log(newRestaurant);

// const newRestaurantCopy = { ...newRestaurant };
// newRestaurantCopy.freeDelivery = true;

// newRestaurant.deliveryCharge = false;

// console.log(newRestaurantCopy);

// restaurant.orderDelivery = function ({
// 	startIndex = 1,
// 	mainIndex = 0,
// 	time = "20:20",
// 	address,
// }) {
// 	console.log(
// 		`Order received! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 	);
// };

// console.log(restaurant);

// const [main, , , secondary] = restaurant.categories;

// console.log(main, secondary);

// console.log(restaurant.order(2, 1));

// const nested = [2, 3, [4, 5]];
// const [second, three, [four, five]] = nested;

// console.log(four, five);

// const { openingHours: opening, location: locate } = restaurant;

// console.log(opening, locate);

// let a = 20;
// let b = 30;
// const obj = {
// 	a: 21,
// 	b: 31,
// 	c: 40,
// };

// ({ a, b } = obj);

// console.log(a, b);

// // ? nested destructing -
// const {
// 	tues: { open: op, close: c },
// } = openingHours;

// console.log(op, c);

// const numbers = [1, 3, 4, 5, 6, 8, 9];
// const listing = [...numbers.slice(0, 2), ...numbers.slice(-2)];

// console.log(listing);

// ? TRUTHY AND FALSY VALUES -

// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// let height = 0;
// if (height) {
// 	console.log("Height is defined");
// } else {
// 	console.log("Height is undefined");
// }

// const day = "friday";

// switch (day) {
// 	case "monday":
// 		console.log("Plan course structure");
// 		break;
// 	case "tuesday":
// 		console.log("Prepare theory videos");
// 		break;
// 	case "friday":
// 		console.log("Off day");
// 		break;
// 	default:
// 		console.log("Not a valid day");
// }

// let hasDriverLiscense = false;
// const passTest = 1;

// if (passTest) hasDriverLiscense = true;
// console.log(hasDriverLiscense);

// const david = {
// 	fullName: "David Json",
// 	age: 23,
// 	friends: ["Joy", "Malan", "Chris"],
// 	hasDriverLiscense,
// 	getSummary() {
// 		const firstLast = this.fullName.split(" ");
// 		return `First name is ${firstLast[0]} and last name is ${firstLast.at(-1)}`;
// 	},
// 	height: 1.69,
// 	mass: 78,
// 	calcBMI() {
// 		return Number((this.mass / Math.pow(this.height, 2)).toFixed(2));
// 	},
// };

// if (david.hasDriverLiscense) console.log("David has liscense");

// console.log(david.getSummary());
// console.log(david.calcBMI());

// let num = 10;
// for (let i = num; i > 0; i--) console.log(i);

const fruits = ["mango", "apple", "pear", "orange", "jackfruit"];

for (const fruit of fruits) console.log(fruit);

const language = "Python";

for (const letter of language) console.log(letter);

let init = 0;
while (init < 5) {
	console.log(init);
	init++;
}

let num = 1;
while (num <= 10) {
	console.log(`2 X ${num} = ${2 * num}`);
	num++;
}

let sum = 0;
let initial = 1;

while (initial <= 10) {
	initial++;
	console.log(sum);
	sum += initial;
}
console.log(sum);

let number = 0;
while (number <= 20) {
	console.log(number);
	number += 2;
}

let odd = 1;
while (odd <= 10) {
	console.log(odd);
	odd += 2;
}

for (let i = 0; i < 10; i++) console.log(i);

