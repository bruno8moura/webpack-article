import ITableElement from './ITableElement';

export default class Header extends ITableElement {

    build(value) {
        this._field = `<th>${value}</th>`;
        return this;
    }
}