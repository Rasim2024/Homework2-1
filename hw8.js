// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];


console.log(people.sort((user1, user2) => user1.age - user2.age));


// Задание 2

function isPositive(num) {
    return num > 0
}

function isMale(item) {
    return item.gender === "male"
}

function filter(array, callback) {
    const resultArray = []
    array.forEach(element => {
        if (callback(element)) {
            resultArray.push(element)
        }
    });
    return resultArray
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// Задание 3

function timer() {
    const timerId = setInterval(() => {
        alert(new Date());
    }, 3000);
    setTimeout(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 30000);
}
timer()


// Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
    callback();
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log('Привет, ${name}!');
}

delayForSecond(() => sayHi('Глеб'))