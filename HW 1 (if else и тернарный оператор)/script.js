`use strict`

// IF and ?

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let number = +prompt(`Number`)
if (number===0){
    alert(`0`)
}else if(number>0){
    alert(`1`)
}else{
    alert(`-1`)
}

// Перепишите конструкцию if с использованием условного оператора '?':

// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// console.log(result)

let a = +prompt(``)
let b = +prompt(``)
let result = (a + b < 4) ? 'Мало': 'Много'
console.log(result)

// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.


// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = 'error';
// }
// console.log(message)

let login =prompt(``)
let message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор')? 'Здравствуйте':
(login == '') ? 'Нет логина':'error';
console.log(message)

