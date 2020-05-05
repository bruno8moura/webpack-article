import ITableElement from './ITableElement';

export default class Row extends ITableElement {
    
    build(value) {
        this._field = `<tr>${value}</tr>`;
        return this;
    }
}