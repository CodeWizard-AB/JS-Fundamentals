"use strict";

class Product {
	constructor(chip, product, price, store) {
		this.processor = chip;
		this.productName = product;
		this.buyingStore = store;
		this.productPrice = price;
	}

	productDetail() {
		{
			this.processor, this.productName, this.productPrice, this.buyingStore;
		}
	}
}

const product1 = new Product("m3", "macbook", 2500, "apple");

console.log(product1);

for (const key in product1) console.log(key, product1[key]);
