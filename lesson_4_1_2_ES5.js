'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function () {
    return this.text = text;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    if (text.length > 75) {
        return this.highlighted = true;
    } else {
        return this.highlighted = false;
    }
}

let author = prompt('Как Вас зовут?');
let text = prompt('Введите ваш текст');
let post1 = new AttachedPost(author, text, new Date());

console.log(post1);
console.log(post1.makeTextHighlighted());
