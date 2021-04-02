'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    return this.price -= this.price * 25 / 100;
}

let product1 = new Product('shirt', 35);
console.log(product1.make25PercentDiscount());