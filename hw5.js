// Задание 1
let c=0
function comparison(a,b) {
    if (a<=b) {
        c=a
    } else {
        c=b
    }
    return c
};

comparison(8,4);

console.log(c);

// Задание 2

//  const evenOdd = number=>number%2 ==0 ? "Число четное" : "Число нечетное"

function evenOdd() {
    let number=prompt(`Ведите число`)

    if (number% 2 == 0) {
        console.log(`Число четное`);
        return
    } else {
        
        console.log(`Число нечетное`);
    
    }
}
evenOdd()

// Задание 3.1

function calc1() {
    let square1=prompt(`Ведите число для возведения в кавадрат`)
    return square1**2
    
}
console.log(calc1());

// Задание 3.2

function calc2() {
    let square2=prompt(`Ведите число что бы найти корень `)
    return Math.sqrt(square2);
    
}
console.log(calc2());

// Задание 4

let age=Number(prompt(`Сколько вам лет?`)) ;
function option() {
    if (age<0) {
        return `Вы ввели неправильное значение`
    }

    if (age>=0 && age<=12) {
        return `Привет, друг!`
    } 
    
    else {
        return `Добро пожаловать!`
    }
    
}
console.log(option());

// Задание 5

let n1=prompt(`Ведите первое число`)
let n2=prompt(`Ведите втрое число`)
function or(n1,n2) {
    
        if (isNaN(n1) || isNaN(n2)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return n1*n2;
    }
}
console.log(or(n1,n2));

// Задание 6


let m=prompt(`Ведите число для расчета`)
function volume(m) {
    if (isNaN(m)) {
        return `Переданный параметр не является числом`;
    } else {
        return m**3
    }
}
console.log(`${m},в кубе равняется, ${volume(m)}`);

// Задание 7

function getCircleArea() {
    return Math.PI*this.radius**2
}
function getCirclePerimetr() {
    return  2*Math.PI*this.radius
}

const circle1 = {
radius:19,
getArea: getCircleArea,
getPerimetr:getCirclePerimetr, 
}

const circle2 = {
    radius:23,
    getArea: getCircleArea,
    getPerimetr:getCirclePerimetr, 
    }


// Заадание 8


function getSeason() {
    let month=Number(prompt(`Ведите номер месяца`))
    if (month>=3 && month<=5) {
        return `Весна`
               
    } 
    if (month>=6 && month<=8) {
        return `Лето`
    }
    if (month>=9 && month<=11) {
        return `Осень`
    }
    if (month==1 || month==2 || month==12) {
        return `Зима`
    }

    else {
        return `Не правильный ввод `
    }
    
}
