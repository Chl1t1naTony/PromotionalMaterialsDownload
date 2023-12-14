let SHEET_ID = '1M2ZLgwyBQnva7nrKadQsLs8C-Sw-ZaKtoXrgGk5o7mQ';
let SHEET_TITLE = 'MaterialList';
let SHEET_RANGE = 'A:D';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_TITLE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
	console.log(rep)
})