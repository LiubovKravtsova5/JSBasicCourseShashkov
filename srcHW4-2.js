'use strict'
let exRowNum = 0;
function lineСounter() {
    exRowNum += 1;
}
class ES6Post {
    constructor(id, qt, price) {
        this.id = id;
        this.qt = qt;
        this.price = price;
        lineСounter();
    }
    es6edit() {
        this.es6Text = console.log("you have " + this.qt + " kg of " + this.id + ". Its prise is " + this.es6Date);
    }
}
let exampleES6 = [];

exampleES6[exRowNum] = new ES6Post('apple', 2, 60);
//exampleES6.es6edit();
exampleES6[exRowNum] = new ES6Post('banana', 3, 70);
//exampleES6.es6edit();
exampleES6[exRowNum] = new ES6Post('pineapple', 3, 150);
//exampleES6.es6edit();
console.log(exampleES6);

let sum = 0;
exampleES6.forEach((element) => {
    sum += element.price * element.qt;

})
console.log('total sum is: ' + sum);
