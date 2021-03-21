'use strict';

//  Задание 1

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + ' - это ноль')
    }
    if (i % 2 === 1) {
        console.log(i + ' - не четное число')
    }
    if (i % 2 === 0 && i !== 0) {
        console.log(i + ' - четное число')
    }
}

// Задание 2

const post = {
    author: "John",
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2
            }
        },
        {
            userId: 5,
            userName: "Jane",
            text: "lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product){
    console.log(product.price - (product.price * 0.15))
})

//  Задание 4

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8, price: 78,
    },
];

let resultArr = products2.filter(product => product.photos && product.photos.length > 0);


console.log(resultArr);

let sortArr = products2.sort(function (a, b) {
   if (a.price > b.price) {
       return 1
   } else {
       return -1
   }
})
console.log(sortArr);

//  Задание 5

for (let j = 0; j < 10; console.log(j++));

// Задание 6

let string = "x";

for (let i = 1; i <= 20; i++){
    console.log(string);
    string = 'x' + string;
}


