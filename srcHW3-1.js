"use strict"
let prime = Array.from(Array(101).keys());//массив Array(101),  каждому элементу присваиваем его номер
prime.shift(); //удаляем нулевой элемент
for (let i = 99; i > 0; i--) {
    for (let j = 1; j < i; j++) {
        if (prime[i] % prime[j] == 0) {
            console.log(prime[i], "%", prime[j]);
            prime.splice(i, 1);

            break;
        }
    }
}
console.log(prime);


