'use strict'
let exRowNum = 0;

class Product {
    constructor(id, qt, price) {
        this.id = id;
        this.qt = qt;
        this.price = price;
        this.sum = this.price * this.qt;
        exRowNum++;
    }
}

let basket = [];

basket[exRowNum] = new Product('apple', 2, 60);
//exampleES6.es6edit();
basket[exRowNum] = new Product('banana', 3, 70);
//exampleES6.es6edit();
basket[exRowNum] = new Product('pineapple', 3, 150);
//exampleES6.es6edit();
//console.log(basket);


const textStr = {
    textReturn(element) {
        return `<div><i> <p>Наименование: ${element.id} / Количествоp: ${element.qt} / Цена: ${element.price}/ Стоимость: ${element.sum}</p></i></div>`;
    },
}

const cart = {
    basket,
    total: null,
    el: null,


    init() {  //Позиционирование на HTML-странице
        this.el = document.querySelector('.myclass');
        this.cartRender();
    },

    wtf(element) {
        return `<div><i> <p>Наименование: ${element.id} / Количествоp: ${element.qt} / Цена: ${element.price}/ Стоимость: ${element.sum}</p></i></div>`;
    },

    cartRender() {
        if (this.basket.length) {
            this.basket.forEach((element) => {
                this.el.insertAdjacentHTML('beforeend', `<div><i><p>${textStr.textReturn(element)}</p></i></div>`);
            })
            this.el.insertAdjacentHTML('beforeend', `<div><i><p>В корзине: ${this.basket.length} товаров на сумму ${this.totalSum()} рублей</p></i></div>`);
        } else {
            this.el.insertAdjacentHTML('beforeend', 'Корзина пуста');
        }
    },

    totalSum() {
        return this.basket.reduce(function (sum, element) {
            return sum + element.sum;
        }, 0);
    },
};


cart.init();


//let sum = 0; console.log('total sum is: ' + sum);
