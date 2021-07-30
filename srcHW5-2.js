'use strict'
let exRowNum = 0;

class Product {  
    constructor (id, qt, price) {
        this.id = id;
        this.qt = qt;
        this.price = price;
        this.sum = this.price*this.qt;     
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
 


const cart = {
    basket,
    textReturn: null,
    total :null,
   
    el: null,
    init() {  
        if(this.basket.length){
             this.basket.forEach((element) => {  
        cart.textStr(element);
        this.totalSum(element);            
        cart.cartRender(); })
        console.log(this.total);
        cart.totalStr();
        this.el.insertAdjacentHTML('beforeend', this.totalStr());
        }else{
            this.el.insertAdjacentHTML('beforeend', 'Корзина пуста');
        }   
       
    },
    totalSum(element){        
        this.total+=element.sum;
    },
    totalStr(){
        return `<div><i>
        <p>В корзине: ${this.basket.length} товаров на сумму ${this.total} рублей</p>
         </i></div>`;
    },
    textStr(element) {
        this.textReturn = `<div><i>
                   <p>Наименование: ${element.id}
                    / Количествоp: ${element.qt}
                    / Цена: ${element.price}
                    / Стоимость: ${element.sum}</p>
                    </i></div>`;
    },
    cartRender(){  //Позиционирование на HTML-странице
    this.el = document.querySelector('.myclass');    
    this.el.insertAdjacentHTML('beforeend', this.textReturn);
    },
}
cart.init();


//let sum = 0; console.log('total sum is: ' + sum);
