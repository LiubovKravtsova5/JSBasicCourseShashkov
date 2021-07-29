'use strict'
const settings = {
    rowCount: 10,
    colCount: 10,
    blackCellColor : '#AA3333',
    whiteCellColor : '#eee' ,
}
const tableHeader = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
const tableSider = ['','1','2','3','4','5','6','7','8',''];
const render ={
    
settings,
    x: null,
    y: null,
    containerElement: null,
    cellElements: [],
    
    drawing(){
        this.initCells();
       
    },

    initCells() { //создаем строки от 0 до rowCount. В каждой из них – ячейки от 0 до colCount.
        this.containerElement = document.getElementById('chess');
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++) {
                const td = document.createElement('td');
                trElem.appendChild(td);
                this.cellElements.push(td);
                if(col==0||col==this.settings.colCount-1){
                    td.textContent=tableSider[row];
                }
                else if (row >0 &&
                       row < this.settings.colCount-1 &&
                       col > 0 &&
                       col < this.settings.rowCount-1 &&
                       row%2+col%2==1){
                        td.style.backgroundColor = this.settings.blackCellColor;
                }
                else{
                    td.style.backgroundColor = this.settings.whiteCellColor
                    if (row==0||row==this.settings.rowCount-1){
                        td.textContent=tableHeader[col];
                    }
                }                                  
            }
        }
    },
   
};

render.drawing();
