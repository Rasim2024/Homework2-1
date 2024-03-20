//  Задание 1

let z = 'js'
console.log(z.toUpperCase());

//  Задание 2

function getSearch(arr, str) {
    return arr.filter(el => el.toLowerCase(str).startsWith(str));
}

// Задание 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//  Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//  Задание 5

function getRandom() {
    return Math.round(Math.random() * 10)
}

// Задание 6

function getRandomNubers(n) {
    let arr = []
    const length = Math.floor(n / 2);
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));

    }
    return arr;
}
console.log(getRandomNubers(20));

//  Задание 7

function getTwoRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(getTwoRandomNum(7, 23));

//  Задание 8

let now = new Date();
console.log(now.toLocaleDateString('ru-RU'));

// Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10

function getRuDate(fullDate) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let myDate = new Date();
    return `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}  
Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
}

// console.log(getRuDate());

//  Задание 11

function getPlayRemember() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
    fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let firstVar = prompt(`Ведите третий элемент массива`);
    let secondVar = prompt(`Ведите последний элемент массива`);

    if (firstVar && secondVar) {
        if (firstVar.toLowerCase() === fruits[2].toLowerCase() && secondVar.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
            alert("Вы молодец! Оба ответа ведены верно!")
        }
        else if (firstVar.toLowerCase() === fruits[2].toLowerCase() || secondVar.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
            alert("Почти угадали! Один из ответов не верный!")
        }
        else {
            alert("Вы не угадали!")
        }
    }
    else {
        alert('Не корректный вод')
    }
}
// console.log(getPlayRemember());
