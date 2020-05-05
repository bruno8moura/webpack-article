import Row from './Row.js';
import Column from './Column.js';
import Header from './Header.js';

export default class Table {
    constructor(tableHeader, tableData){
        this._rows = [];
        
        let headersRow = '';
        tableHeader.map( header => {
            headersRow += new Header().build(header).create();
        });
        this._rows.push(new Row().build(headersRow).create());

        tableData.map(data => {
            let dataRow = '';
            Object.keys(data).map( field => dataRow += new Column().build(data[field]).create());
            this._rows.push( new Row().build(dataRow).create() );
        });
    }

    create(){
        return `<table>
            ${this._rows.join('')}
        </table>`;
    }
}