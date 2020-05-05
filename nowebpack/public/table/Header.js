import ITableElement from './ITableElement.js';

export default class Header extends ITableElement {

    constructor(){
        super();
    }

    build(value) {
        this._field = `<th>${value}</th>`;
        return this;
    }
}