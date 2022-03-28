'use strict';

// Задание 1

let lang = prompt('Введите язык', 'ru');

// if else

if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
} else if (lang === 'en') {
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday')
} else {
    console.log('Вы ввели неверное значение')
}

// switch case

switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
        break;
    default:
        console.log('Вы ввели неверное значение');
}

// array

let myArray = [['ru', 'en'], ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье', 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday']];

console.log(myArray[1][myArray[0].indexOf(lang)]);

// Задание 2

let namePerson = prompt('Введите имя', 'Артем');

let result = namePerson === 'Артем' ? 'директор' : (namePerson === 'Александр') ? 'преподаватель' : 'студент';
console.log(result)