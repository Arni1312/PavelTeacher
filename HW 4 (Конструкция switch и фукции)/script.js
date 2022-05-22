`use strict`;

// // SWITCH CASE

// // Напишите if..else, соответствующий следующему switch:

// // switch (browser) {
// //   case "Edge":
// //     alert("You've got the Edge!");
// //     break;

// //   case "Chrome":
// //   case "Firefox":
// //   case "Safari":
// //   case "Opera":
// //     alert("Okay we support these browsers too");
// //     break;

// //   default:
// //     alert("We hope that this page looks ok!");
// // }

let browser = prompt(`Enter your browser`);

if (browser === `Edge`) {
  alert("You've got the Edge!");
} else if (
  browser === `Chrome` ||
  browser === `Firefox` ||
  browser === `Safari` ||
  browser === `Opera`
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// // Перепишите код с использованием одной конструкции switch:

// // const number = +prompt("Введите число между 0 и 3", "");

// // if (number === 0) {
// //   alert("Вы ввели число 0");
// // }

// // if (number === 1) {
// //   alert("Вы ввели число 1");
// // }

// // if (number === 2 || number === 3) {
// //   alert("Вы ввели число 2, а может и 3");
// // }

const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}

// FUNCTION

// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
console.log(checkAge(19));

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}
console.log(checkAge(19));

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  return a < b ? a : b;
}
console.log(min(11, 12));

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// Запустить демо

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

function pow(x, n) {
  let a = Math.pow(x, n);
  return a;
}
console.log(pow(3, 3));

function pow(x, n) {
  let a = x;
  for (let i = 1; i <= n; i++) {
    a = a * x;
  }
  return a;
}

let a = +prompt(`a`);
let b = +prompt(`b`);

if (a >= 1 && b >= 1) {
  console.log(pow(a, b));
} else {
  console.log(`Error`);
}
