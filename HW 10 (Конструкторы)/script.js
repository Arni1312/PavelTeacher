`use strict`;

// Конструкторы, создание объектов через "new"

function User(name, boolean) {
  this.name = name;
  this.isAdmin = boolean;
}

let user = new User("Вася", true);

console.log(user.name); // Вася
console.log(user.isAdmin); // false

// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

// Например:

function Calculator() {
  this.read = function () {
    this.firstArgument = +prompt("firstArgument");
    this.secondArgument = +prompt("secondArgument");
  };
  this.sum = function () {
    let sum = this.firstArgument + this.secondArgument;
    return sum;
  };
  this.mul = function () {
    let mul = this.firstArgument * this.secondArgument;
    return mul;
  };
}

let calculator = new Calculator();
calculator.read();
console.log(calculator);
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    const number = +prompt("number");
    this.value += number;
    return this.value;
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
