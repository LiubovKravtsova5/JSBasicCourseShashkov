"use strict"

const intNum = {};

while (!Number.isInteger(intNum.inputNum) || intNum.inputNum > 1000 || intNum.inputNum < 0) {
    if (!isNaN(intNum.inputNum)) {
        if (!Number.isInteger(intNum.inputNum) || intNum.inputNum == "") {
            alert("Вы ввели не число!");
            console.log(intNum);
        } else {
            alert("Вы выбрали чило не из диапазона [0, 999]")
        }

    }

    let inputN = prompt("введите число в диапазоне [0, 999]");
    if (inputN == "") {
        intNum.inputNum = inputN;
        continue;
    }
    intNum.inputNum = Math.round(inputN);
    console.log(intNum);
}
intNum.units = intNum.inputNum % 10; //это единицы
intNum.tens = (intNum.inputNum % 100 - intNum.units) / 10; //это десятки
intNum.hundreds = (intNum.inputNum - intNum.tens * 10 - intNum.units) / 100; //это сотни
console.log(intNum);