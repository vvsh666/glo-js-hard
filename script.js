'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const today = new Date().getDay();

week.forEach(function (item, index) {
    if (index === today - 1 && (index === 5 || index === 6)) {
        console.log('%c' + item, 'font-weight: bold; font-style: italic');
    } else if (index === (today - 1)) {
        console.log('%c' + item, 'font-weight: bold');
    } else if (index === 5 || index === 6) {
        console.log('%c' + item, 'font-style: italic');
    } else {
        console.log(item);
    }
})