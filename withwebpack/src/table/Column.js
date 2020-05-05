import ITableElement from './ITableElement';

export default class Column extends ITableElement{
    
    build(value) {
        this._field = `<td>${value}</td>`;
        return this;
    }
}