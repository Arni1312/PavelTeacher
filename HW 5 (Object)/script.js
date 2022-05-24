`use strict`;

// OBJECT

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
const user = {};
// Добавьте свойство name со значением John.
user.name = "John";
// Добавьте свойство surname со значением Smith.
user.surname = "Smith";
// Измените значение свойства name на Pete.
user.name = "Pete";
// Удалите свойство name из объекта.
delete user.name;
console.log(user);

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let salaries1 = {
  John: 0,
  Ann: 0,
  Pete: 0,
};

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

function sumObj(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}
console.log(sumObj(salaries));
console.log(sumObj(salaries1));

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(multiplyNumeric(menu));
