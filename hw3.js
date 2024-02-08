let password = `тест`
let passUser = prompt(`Введите пароль`)
if (password == passUser) {
    alert(`Пароль введен верно`)

} else {
    alert(`Пароль введен неправильно`)
}

let c = 2
if (c > 0 && c < 10) {
    alert(`Верно`)

} else {
    alert(`Неверно`)

}

let d = 300
let e = 99
if (d > 100 || e > 100) {
    alert(`Верно`)

} else {
    alert(`Неверно`)

}

let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);

let monthNumber = Number(prompt(`Ведите месяц`))
switch (monthNumber) {
    case 1:
    case 2:
        alert(`Зима`)
        break;
    case 3:
    case 4:
    case 5:
        alert(`Весна`)
        break;
    case 6:
    case 7:
    case 8:
        alert(`Лето`)
        break;
    case 9:
    case 10:
    case 11:
        alert(`Осень`)
        break;
    case 12:
        alert(`Зима`)
        break;

    default:
        alert(`Не коректный вод`)
        break;
}


