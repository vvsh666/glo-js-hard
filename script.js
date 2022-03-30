'use strict';

// Фильтр чисел из массива

const arr = ['34534', '4643', '145345', '234534', '42345', '56456', '45645'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(arr[i]);
    }
}


// Простые числа

const n = 100;
let result = [2]

for (let i = 3; i <= n; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) count++;
    }
    if (count === 0) result.push(i);
}

for (let i = 0; i < result.length; i++) {
    console.log(result[i] + ' Делители этого числа: 1 и ' + result[i])
}