console.log('Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад: sum(3) = 3, sum(5) = 8, sum(20) = 28');

let param = function () {
    let result = 0;
    return function (a) {
        result += a;
        return result;
    }
};

let sum = param();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));