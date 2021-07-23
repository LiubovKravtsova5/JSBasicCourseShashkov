"use strict"

var inputN;
class decDiv {
    constructor(inputN) {
        this.units = inputN % 10; //это единицы
        this.tens = (inputN % 100 - this.units) / 10; //это десятки
        this.hundreds = (inputN - this.tens * 10 - this.units) / 100; //это сотни  
    }

}

while (!Number.isInteger(inputN) || inputN > 1000 || inputN < 0) {
    if (!isNaN(inputN)) {
        if (!Number.isInteger(inputN) || inputN == "") {
            alert("Вы ввели не число!");
            console.log(inputN);
        } else {
            alert("Вы выбрали чило не из диапазона [0, 999]")
        }

    }

    inputN = prompt("введите число в диапазоне [0, 999]");
    if (inputN == "") {
        continue;
    }
    inputN = Math.round(inputN);
    console.log(inputN);
}
let decimalDivision = new decDiv(inputN);

console.log(decimalDivision);