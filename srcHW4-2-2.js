"use strict"
class ES6Post {
    constructor(es6Author, es6Text, es6Date) {
        this.es6Author = es6Author;
        this.es6Text = es6Text;
        this.es6Date = es6Date;
    }

    es6edit() {
        this.es6Text = prompt(this.es6Author + ' ' + this.es6Date);
    }
}
let exampleES6 = new ES6Post('Ремарк', '', 1929);
exampleES6.es6edit();