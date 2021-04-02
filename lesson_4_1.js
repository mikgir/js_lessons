'use strict';

function getUserNumber () {
    let userNumber = +prompt('Введите любое число в диапазоне от 0 до 999');
    if (isNaN(userNumber)) {
        alert('Вы ввели не число');
        getUserNumber();
    } else if (!Number.isInteger(userNumber)) {
        alert('Вы ввели не целое число');
        getUserNumber();
    } else {
        return userNumber;
    }
}

let number = getUserNumber();
let units = Math.floor(number % 10);
let tens = Math.floor((number / 10 ) % 10);
let hundreds = Math.floor(number / 100);

class Numbers {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

let numbersObj = new Numbers(units, tens, hundreds);

console.log(numbersObj);