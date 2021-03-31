'use strict';
// Задание 1
/*
Пример 1
с = 2 т.к. префиксый инкремент увеличивает переменную "а"
на единицу получается 2 и перезаписывает ее, этот результат
присваевается переменной "с" соответственно с = 2
* */
// let a = 1, b = 1, c, d;
// c = ++a;
// alert(c);

/*
Пример 2
d = 1 т.к. постфиксый инкремент увеличивает переменную "b"
на единицу, но после вывода ее значения, соответственно
b = 1 и этот результат присваевается переменной "d"
соответственно d = 1
* */
// d = b++;
// alert(d);

/*
Пример 3
c = 5 т.к. префиксый инкремент увеличивает переменную "a"
еще на единицу, соответственно теперь a = 3 и этому результату
прибавляем 2, выражение 2 + 3  присваевается переменной "c"
соответственно c = 5
* */
// c = 2 + ++a;
// alert(c);

/*
Пример 4
d = 4 т.к. постфиксый инкремент увеличивает переменную "b"
на единицу, но после вывода ее значения, которое на этот
момент равно 2, соответственно получаем выражение 2 + 2,
которое и присваевается переменной "d"
соответственно d = 4
* */
// d = 2 + b++;
// alert(d);

/*
переменные a и b равны 3 т.к. мы их увеличили префиксным и постфиксным
инкрементом два раза, что увеличило их значение на две единицы и на момент
вывода в alert их значения равны 3
* */
// alert(a);
// alert(b);

// Задание 2
/*
x = 5 т.к. выражение (a *= 2) равно выражению a = a * 2, то
соответственно переменная а = 4, а х = 1 + 4 и переменной х
присваевается значение 5.
*/
// let a = 2;
// let x = 1 + (a *= 2);

// Задание 3

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

if (a >= 0 && b >=0) {
    alert(a - b)
}
if (a < 0 && b < 0) {
    alert(a * b)
}
if ((a < 0 && b > 0) || (a > 0 && b < 0 )) {
    alert(a + b)
}

// Задание 4

let sum = (num1, num2) => num1 + num2;
let dif = (num1, num2) => num1 - num2;
let mul = (num1, num2) => num1 * num2;
let div = (num1, num2) => num1 / num2;

console.log(sum(2, 5));
console.log(dif(10, 2));
console.log(mul(3, 6));
console.log(div(30, 5));

// Задние 5

function mathOperation(num1, num2, operation) {
    switch (operation) {
        case sum:
            return sum(num1, num2);
        case dif:
            return dif(num1, num2);
        case mul:
            return mul(num1, num2);
        case div:
            return div(num1, num2);
    }
}

console.log(mathOperation(10, 15, sum));
console.log(mathOperation(10, 15, dif));
console.log(mathOperation(10, 15, mul));
console.log(mathOperation(10, 15, div));

// Задание 6

/**
 * Функция принимает от пользователя сумму,
 * проверяет корректность ввода данных и возвращает
 * введенную сумму
 * @returns {number} sum
 */

function getSum() {
    let sum = +prompt('Введите сумму, которую Вы хотите положить на счет');
    if (isNaN(sum)) {
        alert('Вы ввели некорректные данные');
        getSum();
    } else if (sum <= 0) {
        alert('Вы ввели некорректные данные');
        getSum();
    } else {
        return sum;
    }
}

let userSum = String(getSum());
let lustNum = userSum.charAt(userSum.length - 1);

/**
 * Функция по последнему символу суммы
 * выберает какое слово необходимо вставить
 * @param lustNum последний символ в строке суммы
 * @returns {string} необходимое слово
 */

function definitionCurrency(lustNum) {
    switch (lustNum) {
        case '1':
            return 'рубль';
        case '2':
        case '3':
        case '4':
            return 'рубля';
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            return 'рублей';
    }
}

alert(`Ваша сумма в ${userSum} ${definitionCurrency(lustNum)} успешно зачислена`)