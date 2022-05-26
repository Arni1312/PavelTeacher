`use strict`;

// // THIS

// // Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//   },
// };

// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// // Такой подход широко используется в библиотеках JavaScript.

// // Hillel

// // 1) Создайте объект triangle со следующими свойствами: aSide, bSide, cSide.

// // Создайте метод setValues(), который вызывает функцию prompt и заполняет свойства aSide, bSide, cSide значениями.

// // Создайте в объекте triangle метод для расчета периметра треугольника.
// // Создайте в объекте triangle метод, который проверяет является ли треугольник
// // равносторонним:

// // Выведите информацию о созданном треугольнике (включая результат выполнения

// // всех методов) в консоль.

// /* Initial object */
// let triangle = {
//   aSide: 0,
//   bSide: 0,
//   cSide: 0,
//   setValues: function () {
//     this.aSide = +prompt(`side a`);
//     this.bSide = +prompt(`side b`);
//     this.cSide = +prompt(`side c`);
//   },
//   getPerimeter: function () {
//     let perimetr = this.aSide + this.bSide + this.cSide;
//     return perimetr;
//   },
//   isEqualSides: function () {
//     return this.aSide === this.bSide && this.aSide === this.cSide;
//   },
// };
// // В консоли ожидаю увидеть:

// triangle.setValues(); // for examle 3 3 3
// console.log(triangle.getPerimeter()); // 9
// console.log(triangle.isEqualSides()); // true

// // 2) Создайте объект calculator с методами:

// // read() запрашивает prompt() для двух значений и сохраняет их как свойства объекта x, y
// // sum() возвращает сумму этих двух значений
// // multi() возвращает произведение этих двух значений
// // diff() возвращает разницу
// // div() возвращает частное
// // В консоли ожидаю увидеть:

// let calculator = {
//   read() {
//     this.a = 12;
//     this.b = 12;
//   },
//   sum() {
//     let sum = this.a + this.b;
//     return sum;
//   },
//   multi() {
//     let multi = this.a * this.b;
//     return multi;
//   },
//   diff() {
//     let diff = this.a - this.b;
//     return diff;
//   },
//   div() {
//     let div = this.a / this.b;
//     return div;
//   },
// };

// calculator.read(); // for example 5 2
// console.log(` Sum ${calculator.sum()}`); // 7
// console.log(` multi ${calculator.multi()}`);
// console.log(` diff ${calculator.diff()}`);
// console.log(` div ${calculator.div()}`);

// 3)* (опциональная) Дан объект country и функция format():

var country = {
  name: "Ukraine",
  language: "ukrainian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66,
  },
};

function format(start, end) {
  console.log(start + this.name + end);
}

// Допишите код так, чтобы в консоли появились строки указанные в комментариях.

format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]); // Kyiv
format.apply(country.capitals, ["undef", "ined"]); // undefined   //  за то undefined))))

// 4) Что выведет данный код на экран и почему?

var text = "outside";
function logIt() {
  console.log(text);
  let text = "inside";
}
logIt();
