import ITableElement from './ITableElement.js';

export default class Column extends ITableElement{
    
    constructor(){
        super();
    }

    build(value) {
        this._field = `<td>${value}</td>`;
        return this;
    }
}