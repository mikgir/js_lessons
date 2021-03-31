'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        return this.price -= this.price * 25 / 100;
    }
}

let product1 = new Product('coat', 456);
console.log(product1.make25PercentDiscount());