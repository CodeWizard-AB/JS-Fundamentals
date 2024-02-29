"use strict";

// class User {
// 	constructor(username, email) {
// 		this.username = username;
// 		this.email = email;
// 	}
// }

// const success = false;
// const promise = new Promise((resolve, reject) => {
// success ? resolve("Successful") : reject("Failed");
// });

// console.log(promise);

// const getInfo = (userId) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("Data is " + userId);
// 			userId ? resolve("success") : reject("failed");
// 		}, 3000);
// 	});
// };

// const result = getInfo(123);

// const getPromise = (username) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			username ? resolve("username found") : reject("username not found");
// 		}, 4000);
// 	});
// };

// const userPassword = (password) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			password ? resolve("password right") : reject("password wrong");
// 		}, 2000);
// 	});
// };

// getPromise(12)
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

// const getUsers = (userReq) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (userReq) {
// 				resolve([
// 					new User("david", "david@gmail.com"),
// 					new User("melon", "melon@gmail.com"),
// 				]);
// 			} else {
// 				reject("Failed to the user list!");
// 			}
// 		}, 2000);
// 	});
// };

// getUsers(true)
// 	.then((users) => console.log(users))
// 	.catch((error) => console.log(error));

const getUser = (userId) => {
	return new Promise((resolve, reject) => {
		console.log("Get user from the database.");
		setTimeout(() => {
			userId
				? resolve({
						userId,
						username: "john",
				  })
				: reject("userId not found!");
		}, 1000);
	});
};

const getServices = (user) => {
	return new Promise((resolve) => {
		console.log(`Get services of ${user.username} from the API.`);
		setTimeout(() => {
			resolve(["AC", "Table", "Oven"]);
		}, 2000);
	});
};

const getCost = (services) => {
	return new Promise((resolve) => {
		console.log(`Calculate service costs of ${services}.`);
		setTimeout(() => {
			resolve(services.length * 100);
		}, 3000);
	});
};

const showServicesCost = async () => {
	try {
		const user = await getUser(23);
		const services = await getServices(user);
		const cost = await getCost(services);
		console.log(`The total service cost is ${cost}.`);
	} catch (error) {
		console.log(error);
	} finally {
		console.log("Function excution is finished.");
	}
};

showServicesCost();
