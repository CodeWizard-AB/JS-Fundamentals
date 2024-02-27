"use strict";

const loadFunction = () => {
	const url = "https://jsonplaceholder.typicode.com/users";
	fetch(url)
		.then((response) => response.json())
		.then((json) => displayData(json));
};

const displayData = (data) => {
	const userContainer = document.getElementById("user_container");
	data.forEach((user) => {
		const li = `<li>${user.username}</li>`;
		userContainer.insertAdjacentHTML("beforeend", li);
	});
};

const loadPhotos = () => {
	const url = "https://jsonplaceholder.typicode.com/photos";
	fetch(url)
		.then((res) => res.json())
		.then((json) => displayPhotos(json));
};

const displayPhotos = (data) => {
	const photoContainer = document.getElementById("photos_container");
	data.slice(0, 2).forEach((photo) => {
		const image = `	<img src=${photo.url}>`;
		photoContainer.insertAdjacentHTML("beforeend", image);
	});
};

const loadAlbums = () => {
	const url = "https://jsonplaceholder.typicode.com/albums";
	fetch(url)
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((error) => console.log(error));
};

const loadAlbum = async () => {
	try {
		const url = "https://jsonplaceholder.typicode.com/albums";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.slice(0, 2));
	} catch (error) {
		console.log(error);
	}
};
