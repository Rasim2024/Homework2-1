// Задание 1

function comparison(a, b) {
    if (a < b) {
        return a
    } else {
        return b

    }

}
const result = comparison(8, 4)
console.log(result);


// Задание 2

//  const evenOdd = number=>number%2 ==0 ? "Число четное" : "Число нечетное"


function evenOdd() {
    let number = Number(prompt(`Ведите число`));
    if (number % 2 === 0) {
        return `Число четное`;
    } else {
        return `Число нечетное`;

    }
}
console.log(evenOdd());

// Задание 3.1

function calc1() {
let square1=Number(prompt(`Ведите число`))
console.log((square1 ** 2));

}
console.log(calc1());

// Задание 3.2

function calc2() {
    let square2 = Number(prompt(`Ведите число что бы найти корень `))
    return Math.sqrt(square2);

}
console.log(calc2());

// Задание 4


function option() {
    let age = Number(prompt(`Сколько вам лет?`));
    if (age <= 0 || isNaN(age)) {
        return `Вы ввели неправильное значение`
    }

    if (age > 0 && age <= 12) {
        return `Привет, друг!`
    }

    else {
        return `Добро пожаловать!`
    }

}
console.log(option());

// Задание 5


function action() {
    let numOne = prompt(`Ведите первое число`)
let numTwo = prompt(`Ведите втрое число`)

    if (isNaN(numOne)  || isNaN(numTwo) || numOne==null || numTwo==null ) {
        return `Одно или оба значения не являются числом`;
    } else {
        return numOne * numTwo;
    }
}
console.log(action());

// Задание 6



function volume() {
    let m = Number(prompt(`Ведите число для расчета`))
    if (isNaN(m) || m==0 ) {
        return `Переданный параметр не является числом`;
    } else {
        return `${m},в кубе равняется, ${m**3}`;
    }
}
console.log(volume());


// Задание 7

function getCircleArea() {
    return Math.PI * this.radius ** 2
}
function getCirclePerimetr() {
    return 2 * Math.PI * this.radius
}

const circle1 = {
    radius: 19,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimetr,
}

const circle2 = {
    radius: 23,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimetr,
}


// Заадание 8


function getSeason() {
    let month = Number(prompt(`Ведите номер месяца`))

    if (month >= 3 && month <= 5) {
        alert (`Весна`) 

    }
    if (month >= 6 && month <= 8) {
        alert (`Лето`)
    }
    if (month >= 9 && month <= 11) {
        alert (`Осень`)
    }
    if (month == 1 || month == 2 || month == 12) {
       alert (`Зима` ); 
    }

    else {
        alert `Не правильный ввод `
    }

}
