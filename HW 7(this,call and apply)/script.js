`use strict`;

// THIS, CALL and APPLY

// 1) Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
// при вызове которого через 3 секунды в консоль выведется сообщение, записанное в свойстве message

let coffeeMachine = {
  message: "Your coffee is ready!",
  start: function () {
    setTimeout(() => console.log(this.message), 3000);
  },
};
coffeeMachine.start();

// 2.
// Создайте объект teaPlease со свойством message: 'Wanna some tea instead of coffee?'.
// Обновите методу start() контекст так, чтобы он выводил сообщение с нового объекта.

let teaPlease = {
  message: "Wanna some tea instead of coffee?",
};
coffeeMachine.start.call(teaPlease);

// 3) Напишите функцию concatStr(), которая соединяет две строки, разделенные каким-то символом:
// разделитель и строки передаются в параметрах функции. Используя привязку аргументов с помощью bind,

function concatStr(firstStr, separator, secondStr) {
  return `${firstStr} ${separator} ${secondStr}`;
}
let str1 = concatStr.bind(this, "asdasd", "$", "asdasd");
console.log(str1());

// создайте новую функцию hello(), которая которая выводит приветствие тому, кто передан в ее параметре

function hello(phrase, name) {
  return `${phrase} ${name}`;
}
let name2 = "Arsen";
let userRus = hello.bind(this, "Привет");
let userEng = hello.bind(this, "Hello");

console.log(userRus(name2));
console.log(userEng(name2));
