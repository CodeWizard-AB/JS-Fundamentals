"use strict";

class Product {
	constructor(chip, product, price, store) {
		this.processor = chip;
		this.productName = product;
		this.buyingStore = store;
		this.productPrice = price;
	}
}

const product1 = new Product("m3", "macbook", 2500, "apple");

console.log(product1);

for (const key in product1) console.log(key, product1[key]);

class Person {
	constructor(name, age, position) {
		this.name = name;
		this.age = age;
		this.position = position;
	}
}

const teachers = [
	new Person("Nodi", 28, "Senior"),
	new Person("Akil", 26, "Junior"),
	new Person("Shobuj", 30, "Senior"),
];

const teacherNames = teachers
	.filter(({ position }) => position === "Senior")
	.map(({ name }) => name);

const totalAge = teachers.reduce((total, { age }) => total + age, 0);

console.log(totalAge);
console.log(teacherNames);

// * THIS KEYWORD -

const teacher = {
	firstName: "John",
	lastName: "Doe",
	age: 34,
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};
