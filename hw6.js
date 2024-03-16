// Задание 1
const arr = [1, 5, 4, 10, 0, 3]

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    if (arr[index] == 10) {
        break;
    }

}

// Задание 2

console.log(arr.indexOf(4))

//  Задание 3

const numbs = [1, 3, 5, 10, 20]

console.log(numbs.join(' '));

// Задание 4

let newArr = []                             //создаем массив
for (let i = 0; i < 3; i++) {               //цикл с 3 повторениями 
    let innerArr = [];                     // создаем подмассив по циклу выше = Итого 3 подмассива
    for (let j = 0; j < 3; j++) {          // снова повт 3 цикла
        innerArr.push(1)                  //  добавление в массив значения 1 по циклу выше 3 раза в данном случае можно unshift() вместо push()
    }
    newArr.push(innerArr)                // вкладываем подмассивы в массив 
}

console.log(newArr);

// Задание 5

const box = [1, 1, 1]
for (let index = 2; index < 4; index++) {
    box.push(2);

}
console.log(box);

// Задание 6

const mixedArr = [9, 8, 7, 'a', 6, 5]

let l = mixedArr.sort();
l.pop()
console.log(l);

//  Задание 7

const puzzleArr = [9, 8, 7, 6, 5]
let ans = prompt('Угадай число')
if (puzzleArr.includes(Number(ans))) {
    alert('Угадал')
} else {
    alert('Не угадал')
}

// Задание 8

let letters = 'abcdef';
let pArr = letters.split('').reverse().join('');
console.log(pArr);

//  Задание 9

let tabsArr = [[1, 2, 3], [4, 5, 6]];
let simpleArr = tabsArr.flat();
console.log(simpleArr);

//  Задание 10

let randomArr = [5, 4, 2, 6, 1, 8, 9, 7, 3];
for (let index = 0; index < randomArr.length - 1; index++) {
    console.log(randomArr[index] + randomArr[index + 1]);
};

// Задание 11

function calc(numArr) {
    return numArr.map(num=>num**2);
} 

console.log(calc([5, 7, 11, 22]));

// Задание 12

function calc2(srtingArr) {
    return srtingArr.map(item => item.length);
}
console.log(calc2(['инструмент', 'ящик']));

// Задание 13

function filterPositive(numArr) {
    return numArr.filter(num => num<0 );
}
console.log(filterPositive([-5, 7, -11, 22]));

// Задание 14

const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );
  const numbers = generateArray(10, 10);
  const evenOnly = numbers.filter(function (n) {
    const j = n % 2
  
    return j === 0
  })

  console.log(numbers);
  console.log(evenOnly);

//    Задание 15

const  moreArr= generateArray(6, 10);
  console.log(moreArr.reduce(function (currentSum, currentNumber) {
    return (currentSum + currentNumber)
  } )/moreArr.length);