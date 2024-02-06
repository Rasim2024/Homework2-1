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

let monthNumber = String(prompt(`Ведите месяц`))
switch (monthNumber) {
    case `1`:
        alert(`Зима`)
        break;
    case `2`:
        alert(`Зима`)
        break;
    case `3`:
        alert(`Весна`)
        break;
    case `4`:
        alert(`Весна`)
        break;
    case `5`:
        alert(`Весна`)
        break;
    case `6`:
        alert(`Лето`)
        break;
    case `7`:
        alert(`Лето`)
        break;
    case `8`:
        alert(`Лето`)
        break;
    case `9`:
        alert(`Осень`)
        break;
    case `10`:
        alert(`Осень`)
        break;
    case `11`:
        alert(`Осень`)
        break;
    case `12`:
        alert(`Зима`)
        break;

    default:
        alert(`Не коректный вод`)
        break;
}


