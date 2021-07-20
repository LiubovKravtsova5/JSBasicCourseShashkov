'use strict'
const products3 = [
    {
        id: 'apple',
        qt: 5,
        price: 200,
    },
    {
        id: 'banana',
        qt: 3,
        price: 900,
    },
    {
        id: 'pineapple',
        qt: 0,
        price: 1000,
    },
];

function countBasketPrice(products3) {
    let sum = 0;
    products3.forEach(function (item) {
        sum += item.price * item.qt;
        console.log(item.price);
    });
    return sum;
}
console.log(countBasketPrice(products3));