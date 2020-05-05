import ITableElement from './ITableElement.js';

export default class Row extends ITableElement {
    
    constructor(){
        super();
    }

    build(value) {
        this._field = `<tr>${value}</tr>`;
        return this;
    }
}