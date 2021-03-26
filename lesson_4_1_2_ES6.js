'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(){
        return this.text = text;
    }
}

class AttachedPost extends Post{
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        if (text.length > 100) {
            return this.highlighted = true;
        } else {
            return this.highlighted = false;
        }
    }
}


let author = prompt('Как Вас зовут?');
let text = prompt('Введите ваш текст');
let post1 = new AttachedPost(author, text, new Date());

console.log(post1);
console.log(post1.makeTextHighlighted());
