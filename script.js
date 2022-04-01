'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const today = new Date().getDay();

week.forEach(function (item, index) {
    let div = document.createElement('div');
    if (index === today - 1 && (index === 5 || index === 6)) {
        div.innerHTML = `<b><i>${item}</i></b>`
    } else if (index === (today - 1)) {
        div.innerHTML = `<b>${item}</b>`
    } else if (index === 5 || index === 6) {
        div.innerHTML = `<i>${item}</i>`
    } else {
        div.innerHTML = item
    }
    document.body.append(div)
})