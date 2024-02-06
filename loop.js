"use strict";

// let sum = 0;
// for (let i = 10; i <= 20; i += 2) {
// 	sum += i;
// 	console.log(i);
// 	console.log(sum);
// }

// console.log("Decrement");
// for (let i = 20; i >= 0; i--) console.log(i);

// let num = 50;
// while (num >= 40) {
// 	console.log(num);
// 	num--;
// }

// for (let i = 1; i <= 20; i++) {
// 	const text = i % 2 === 0 ? `Even: ${i}` : `Odd: ${i}`;
// 	console.log(text);
// }

// for (let i = 5; i <= 20; i++) {
// 	if (i > 15) {
// 		break;
// 	} else {
// 		console.log(i);
// 	}
// }

// for (let i = 1; i <= 10; i++) {
// 	if (i % 2 !== 0) continue;
// 	console.log(i);
// }

// const fruits = ["mango", "apple", "orange", "pear", "banana", "apple"];
// // console.log(fruits.reverse());
// console.log(fruits.includes("mango"));
// console.log(fruits.indexOf("apple"));
// console.log(fruits.lastIndexOf("apple"));

// for (let i = 0; i < fruits.length; i++) console.log(fruits[i]);

// for (let i = fruits.length - 1; i >= 0; i--) console.log(fruits[i]);

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) sum += num;
// console.log(sum);

// const list = [10, 20, 30, 40, 50];
// const num = list[1];
// const first = list[0];
// list[1] = list[3];
// list[3] = num;
// list[0] = list[list.length - 1];
// list[list.length - 1] = first;

// console.log(list);

// const nums = [34, 43, 12, 3, 8];
// console.log(Math.max(...nums), Math.min(...nums));

// let maxValue = nums[0];
// let minValue = nums[0];

// for (const num of nums) {
// 	num > maxValue ? (maxValue = num) : null;
// 	num < minValue ? (minValue = num) : null;
// }

// console.log(maxValue, minValue);

// const purchase = [100, 45, 56, 70];
// const filterValue = purchase.filter((num) => num < 100);
// console.log(filterValue);
// const multiple = purchase.map((num) => num * 2);
// console.log(multiple);

// const total = purchase.reduce((acc, num) => (acc += num), 0);
// console.log(total);

// // ? Frequency array -

// const frequency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const randomNumber = "0989823842722374810";

// for (let num of randomNumber) {
// 	frequency[num] += 1;
// }

// console.log(frequency);
// console.log(frequency.indexOf(Math.max(...frequency)));
// console.log(frequency.lastIndexOf(Math.max(...frequency)));

// const serial = [22, 33, 44, 55, 66, 77, 88];
// // for (const num of serial) {
// // 	if (num !== 55) {
// // 		serial.shift();
// // 		serial.push(num);
// // 	}
// // }

// while (true) {
// 	let firstNum = serial[0];
// 	if (firstNum !== 55) {
// 		serial.shift();
// 		serial.push(firstNum);
// 	} else {
// 		break;
// 	}
// }

// console.log(serial);

const genInt = function (num) {
	const list = [];
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		list.push(i);
		sum += i;
		i <= 5
			? console.log(
					`Number is: ${i} and cube of the ${i} is: ${Math.pow(i, 3)}`
			  )
			: null;
	}
	console.log(...list);
	console.log("Total:", sum);
	console.log("Average:", (sum / list.length).toFixed(2));
};

genInt(12);

const table = function (num) {
	for (let i = 1; i <= 10; i++) {
		console.log(`${num} X ${i} = ${i * num}`);
	}
};

table(15);

const multipleTable = function (num) {
	for (let i = 1; i <= 10; i++) {
		const row = [];
		for (let x = 1; x <= num; x++) {
			row.push(`${x}X${i} = ${i * x}`);
		}
		console.log(row.join(" | "));
	}
};

multipleTable(8);
