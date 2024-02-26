"use strict";

const url = "https://jsonplaceholder.typicode.com/todos/1";

const loadFunction = () => {
	const data = fetch(url)
		.then((response) => response.json())
		.then((json) => console.log(json));
};
