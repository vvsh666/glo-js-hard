'use strict';

const dataInput = '   Это длинная строка больше 30-ти символов    ';

const processData = (data) => {
    if (typeof data != 'string') return 'Это не строка!';
    data = data.trim();
    return (data.length < 30) ? data : data.substr(0, 30) + '...'
}

console.log(processData(dataInput))