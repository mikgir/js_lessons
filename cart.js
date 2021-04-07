'use strict';

class Product {
    constructor(name, id, price, color, size) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.color = color;
        this.size = size;
    }
    getQuantity() {
        return this.quantity = 1;
    }
    getProductAmount() {
        return this.amount = this.price * this.getQuantity();
    }
}

const cart = [];

const product = new Product(name, id, price, color, size);
let name = getElementByClassName();

cart.push(product);
cart.reduce(product.getProductAmount, 0);