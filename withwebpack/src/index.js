import Table from './table/Table.js';
import jquery from './jquery-3.5.0';

let tableHeader = ['Name', 'Age'];
let tableData = [
    {
        'name': 'Bruno',
        'age': 33
    },
    {
        'name': 'Daniela',
        'age': 32
    }
];

let table = new Table(tableHeader, tableData).create();
let app = document.querySelector('#app');

//jquery.filter('table');

app.innerHTML=table;
