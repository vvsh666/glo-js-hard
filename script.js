'use strict';

const full = document.querySelector('h1')
const short = document.querySelector('h2')

const getCurrentDate = function () {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const getWeekDay = function () {
        const weekIndex = date.getDay();
        let weekDay;
        switch (weekIndex) {
            case 0: weekDay = 'Воскресенье';
                break;
            case 1: weekDay = 'Понедельник'
                break;
            case 2: weekDay = 'Вторник'
                break;
            case 3: weekDay = 'Среда'
                break;
            case 4: weekDay = 'Четверг'
                break;
            case 5: weekDay = 'Пятница'
                break;
            case 6: weekDay = 'Суббота'
                break;
        }
        return weekDay
    }

    const getCurrentMonth = function () {
        const arrMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return arrMonths[month]
    }

    const declOfNum = function (n, arr) {
        let dec;
        return n + ' ' + ((((dec = n % 100) >= 11 && dec <= 19) || (dec = n % 10) >= 5 || dec == 0) ? arr[2] : (dec == 1 ? arr[0] : arr[1]))
    }

    const getCurrentHours = function () {
        const arr = ['час', 'часа', 'часов'];
        return declOfNum(hours, arr)
    }

    const getCurrentMinutes = function () {
        const arr = ['минута', 'минуты', 'минут'];
        return declOfNum(minutes, arr)
    }

    const getCurrentSeconds = function () {
        const arr = ['секунда', 'секунды', 'секунд'];
        return declOfNum(seconds, arr)
    }

    const getFullDate = function () {
        return `Сегодня ${getWeekDay()}, ${day} ${getCurrentMonth()} ${year} года, ${getCurrentHours()} ${getCurrentMinutes()} ${getCurrentSeconds()}`
    }

    const getShortDate = function () {
        const d = (day < 10) ? '0' + day : day;
        const m = (month < 10) ? '0' + month : month;
        const hh = (hours < 10) ? '0' + hours : hours;
        const mm = (minutes < 10) ? '0' + minutes : minutes;
        const ss = (seconds < 10) ? '0' + seconds : seconds;

        return `${d}.${m}.${year} - ${hh}:${mm}:${ss}`
    }


    full.textContent = getFullDate();
    short.textContent = getShortDate()
}


setInterval(() => {
    getCurrentDate()
}, 500)



