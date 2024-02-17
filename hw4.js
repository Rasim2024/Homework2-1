// Задание 1

for (let i=0; i<2; i++ ) {
    alert(`Привет`)
}

// Задиние 2

for (let index = 1; index <=5 ; index++) {
    console.log (index);
    
}

// Задиние 3

for (let index = 7; index <=72 ; index++) {
    console.log(index);
    
    
}
// Задание 4

const obj={
    Коля: `200`,
    Вася: `300` ,
    Петя: `400`
}

for ( let employee in obj ) {
    console.log(`${employee} — зарплата ${obj[employee]} долларов` );
}

// Задание 5

let num=0
let n
for (n=1000; n>=50; n/=2) {
    num++
}
console.log(n);
console.log(num);

// Задание 6

let friday=3
for ( let day=friday; day<=31; day+=7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}