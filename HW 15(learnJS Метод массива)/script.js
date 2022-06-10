// `use strict`;

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

const camelize = (str) => {
  const arr = str.split("-").map((curentValue, index) => {
    if (index !== 0) {
      return curentValue
        .slice(0, 1)
        .toUpperCase()
        .concat(curentValue.slice(1).toLowerCase());
    }
    return curentValue;
  });

  return arr.join("");
};

// rewtire using map method

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

let arr = [5, 3, 8, 1];

const filterRangeInPlace = (array, firstNumber, secondNumber) => {
  return array.filter((item) => firstNumber <= item && item <= secondNumber);
};

console.log(filterRangeInPlace(arr, 1, 4));

console.log(arr);

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

const filterRangeInPlace1 = (array, firstNumber, secondNumber) => {
  for (let i = 0; i < array.length; i++) {
    if (!(firstNumber <= array[i] && array[i] <= secondNumber)) {
      array.splice(i, 1);
    }
  }
};

console.log(filterRangeInPlace1(arr, 1, 4));

console.log(arr);

// Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

console.log(arr2); // 8, 5, 2, 1, -10

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr3 = ["HTML", "JavaScript", "CSS"];
const copySorted = (array) => {
  return [...array].sort();
};

let sorted = copySorted(arr3, ["React"]);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr3); // HTML, JavaScript, CSS (без изменений)

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = (str) => {
    const arr = str.split(" ");
    return this.methods[arr[1]](+arr[0], +arr[2]);
  };
  this.addMethod = (key, mathOperation) => {
    this.methods[key] = mathOperation;
  };
}

let calc = new Calculator();
console.log(calc);

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("3 * 7"));
console.log(calc.calculate("9 ** 2"));

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:
let users = [
  { name: "Вася", age: 25 },
  { name: "Петя", age: 15 },
  { name: "Мbша", age: 28 },
  { name: "Мfffаша", age: 99 },
];

let names = users.map((curentValue) => curentValue.name);

const names1 = users.reduce((accumulator, curentValue, index, array) => {
  if (index < array.length - 1) {
    accumulator += `${curentValue.name}, `;
  } else accumulator += `${curentValue.name}`;
  return accumulator;
}, "");

console.log(names); // Вася, Петя, Маша <----- array
console.log(names1); //<----- string

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.
// Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let user = [vasya, petya, masha];

let usersMapped = user.map(({ name, surname, id }) => ({
  fullName: `${name} ${surname}`,
  id,
}));

console.log(usersMapped); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

const sortByAge = (array) => {
  return [...array].sort((a, b) => a.age - b.age);
};

console.log(sortByAge(users));
console.log(users);

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

const getAverageAge = (array) => {
  return Math.round(
    array.reduce((accumulator, curentValue, index, arr) => {
      accumulator += curentValue.age;
      // console.log(curentValue.age, accumulator);
      if (index === arr.length - 1) {
        return accumulator / arr.length;
      }
      return accumulator;
    }, 0)
  );
};

console.log(getAverageAge(users));

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
  1,
  "&&",
];

console.log(unique(strings)); // кришна, харе, :-O
