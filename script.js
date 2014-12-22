var array_word = ['метр','литр','мт','ммт'];
var array_symbol = ['м','т'];

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function showTable(count_rows, count_cols) {
    var htmlcode = '';
    ROWS_SIZE = count_rows;
    COLS_SIZE = count_cols;
    for (var rows = 0; rows < count_rows; rows++) {
        htmlcode += '<tr>\n';
        for (var cols = 0; cols < count_cols; cols++) {
            htmlcode += '<td id="td' + rows + cols + '">' + array_word[getRandom(0,array_word.length-1)] + '</td>'
        }
        htmlcode += '</tr>\n';
    }
    document.getElementById("main_table").innerHTML = htmlcode;
}

function toMark() {
    for (var rows = 0; rows < ROWS_SIZE; rows++) {
        for (var cols = 0; cols < COLS_SIZE; cols++) {
            if (checkSymbol(array_symbol,document.getElementById("main_table").rows[rows].cells[cols].innerHTML)) {
                var elem = document.getElementById("td" + rows + cols);
                elem.setAttribute("class","selected");
            }
        }
    }
}

function checkSymbol(arraySymbol,str) {
    var checkArr = [];
    var sum = true;
    for (var i = 0; i < arraySymbol.length; i++) {
        for (var  j = 0; j < str.length; j++) {
            if (arraySymbol[i]==str[j]) {
                checkArr[i] = true;
            }
        }
        sum = sum && checkArr[i];
    }
    return sum;
}


