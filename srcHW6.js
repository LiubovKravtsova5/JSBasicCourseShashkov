'use strict'
let exRowNum = 0;

const textStr = {
    textReturn(element) {
        return `<div><i> 
            <p>Наименование: ${element.id}</p>
            <p> Цена: ${element.price}</p>
            <button class="mybutton" data-id="${element.id}"> Добавить</button>
        </i></div>`;
    },
}

const cart = {
    total: null,
    el: null,
    idOfProduct: null,

    products: [
        { id: 'apple', price: 60 },
        { id: 'banana', price: 70 },
        { id: 'pineapplee', price: 150 }
    ],

    init() {  //Позиционирование на HTML-странице
        this.el = document.querySelector('.myclass');
        this.cartRender();
        this.eventHandlers();
    },
    cartRender() {
        if (this.products.length) {
            this.products.forEach((element) => {
                this.el.insertAdjacentHTML('beforeend', `${textStr.textReturn(element)}`);
            })
            // this.el.insertAdjacentHTML('beforeend', `<div><i><p>В корзине: ${this.basket.length} товаров на сумму ${this.totalSum()} рублей</p></i></div>`);
        }

    },

    eventHandlers() {
        this.el.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {//увеличение количества
        console.log('передаем элемент', event.target.dataset);
        this.idOfProduct = event.target.dataset.id;
        order.addToBasket(this.products.find((products) => products.id === this.idOfProduct))
    },
};


const totalPriceStr = {
    textReturn(product) {
        return `<div><i><p> ${product.qt} ${product.id}</p></i></div>`;
    }

};

const order = {
    basket: [],

    addToBasket(product) {
        const inBascket = this.basket.find((element) => product.id === element.id);
        if (!inBascket) {
            this.basket.push({ ...product, qt: 1 });
        } else {
            inBascket.qt += 1;
        }

        this.init();

    },

    init() {  //Позиционирование на HTML-странице
        this.el = document.querySelector('.mybasket');
        console.log('инициализируем bascket ', this.basket);
        this.basketRender();
        this.eventHandlers();
    },

    basketRender() {
        console.log('сейчас корзина такая:', this.basket);
        this.clrBasketRender();//очистка корзины
        this.el.insertAdjacentHTML('beforeend', `<div><i><h2> В корзине: </h2></i></div>`);
        this.basket.forEach((element) => {
            this.el.insertAdjacentHTML('beforeend', `${totalPriceStr.textReturn(element)}`);
        }
        );
        this.el.insertAdjacentHTML('beforeend', '<button class="mybuttonCLr" data-id="${product.id}"> Удалить</button>');
        //console.log(order.addToBasket(this.basket.find((basket) => products.id === this.basket[product.id])))

        /* if (this.basket.length) {*/
        //cart.el.insertAdjacentHTML('beforeend', `<div><i><p>${totalPriceStr()}</p></i></div>`);

        /* })
        this.el.insertAdjacentHTML('beforeend', `<div><i><p>В корзине: ${this.basket.length} товаров на сумму ${this.totalSum()} рублей</p></i></div>`);
    } else {
        this.el.insertAdjacentHTML('beforeend', 'Корзина пуста');
    */
    },
    clrBasketRender() {
        this.el.innerHTML = '';
    },
    eventHandlers() {
        this.el.addEventListener('click', event => this.clrBasket(event));
    },
    clrBasket() {
        this.basket = [];
        this.clrBasketRender();
    },


}


cart.init();
