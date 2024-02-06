"use strict";

const car = {
	brand: "Fiat",
	model: 500,
	weight: "800kg",
	color: "white",
	price: 10000,
	hasLicense: true,
	owners: ["Jessy", "Melon", "John"],
	drive() {
		console.log(
			`${this.brand} of ${this.weight} and ${this.color} color is moving forward.`
		);
	},
	stop: function () {
		console.log(`Car of ${this.model} model is stopping`);
	},
	brake: () => {
		console.log("Car needs to brake.");
	},
};

car.drive();
console.log(car.color);

car.color = "red";
console.log(car.color);

car.stop();
car.brake();

const { owners: buyers } = car;

console.log(buyers);

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

// for (const key in car) console.log(`${key}: ${car[key]}`);

const pencil = new Object({
	brand: "Matador",
	price: 5,
	store: "Dhaka",
});

console.log(Object.values(pencil).length);
console.log(pencil);

const person = {
	fullName: "John Doe",
	age: 25,
	city: "India",
	isStudent: true,
};

Object.values(person).forEach((value) =>
	console.log(`key:  ${value} | type: ${typeof value}`)
);
