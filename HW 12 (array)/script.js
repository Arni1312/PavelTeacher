// `use strict`;

// ARRAY

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

let musics = ["«Джаз»", "«Блюз»"];
console.log(musics);
// Добавьте «Рок-н-ролл» в конец.
musics.push("Рок-н-ролл");
console.log(musics);
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
musics[Math.floor(musics.length / 2)] = "Классика";
console.log(musics);
// Удалите первый элемент массива и покажите его.
let firstElement = musics.shift();
console.log(musics);
console.log(firstElement);
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:
musics.unshift("Рэп", "Регги");
console.log(musics);

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let arr = [];
  let number;
  while (true) {
    number = prompt("Enter number");
    if (isNaN(number) || number === null || number === "") {
      break;
    } else arr.push(+number);
  }
  return arr.reduce(
    (accumulator, currentValue) => (accumulator += currentValue),
    0
  );
}

console.log(sumInput());

//  Дан массив с числами. Оставьте в нем только отрицательные числа.

let arr2 = [1, 2, 3, 4, 5, -6, -1, 1, 2, 4 - 95, -24, 123, 3, 0, -6];

console.log(
  arr2.reduce(function (accumulator, currentValue) {
    if (currentValue < 0) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, [])
);

Array.prototype.newMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

console.log(arr2.newMap((el) => el * 2));

//  Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

const arr3 = [1, 2, 3, 0, 4, 5, 6];

let indexNumber;
console.log(
  arr3.reduce((accumulator, currentValue, index) => {
    if (currentValue === 0) {
      indexNumber = index;
    }
    if (indexNumber === undefined) {
      accumulator += currentValue;
    }
    return accumulator;
  }, 0)
);

//  Дан массив с числами.Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10 - ти.

let arr4 = [1, 2, 1, 1, 4, 2, 0, 0, 15, 1];

// let amountElement = 0;

arr4.reduce((accumulator, currentValue, index) => {
  if (accumulator !== null) {
    accumulator += currentValue;
    if (accumulator > 10) {
      amountElement = index + 1;
      return null;
    }
  }
  return accumulator;
}, 0);

console.log(amountElement);

const getAmountElement = (arr) => {
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((accumulator += arr[i]) > 10) {
      return i + 1;
    }
  }
};

console.log(getAmountElement(arr4));

const getAmountElement1 = (arr) => {
  let accumulator = 0;
  for (i in arr) {
    if ((accumulator += arr[i]) > 10) {
      return +i + 1;
    }
  }
};

console.log(getAmountElement1(arr4));

// Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.
// Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

const fill = (arrLength, value) => {
  let newArr = [];
  for (let i = 0; i < arrLength; i++) {
    newArr.push(value);
  }
  return newArr;
};

console.log(fill(1, "qwerty"));

// Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

const array2 = ["arsen", "qwerty", "pavel", "skor"];

const reverse = (array) => {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    // console.log(array[i]);
    newArr.push(array[i]);
  }
  return newArr;
};
console.log(reverse(array2));

// // Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
// /**
//   * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
//   * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const array4 = [0, 1, false, 2, undefined, "", 3, null];

const compact = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    }
    // array[i] && newArr.push(array[i]); <----- Вместо IF
  }
  return newArr;
};

console.log(compact(array4));

// Intersection. Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов. Используйте примитивные типы данных.
// /**
//   * Описание задачи: Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
//   * Ожидаемый результат: ([1, 2], [2, 3]) => [2]

const array5 = [1, 2, 3, 4, 5, 6, 4, 5, 6];
const array6 = [4, 5, 6, 7, 8, 4];

const intersection = (firstArray, secondArray) => {
  let newArr = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (
      secondArray.includes(firstArray[i]) &&
      !newArr.includes(firstArray[i])
    ) {
      newArr.push(firstArray[i]);
    }
  }
  return newArr;
};

console.log(intersection(array5, array6));

// Chunk. Напишите функцию, которая разделяет массив на части заданного размера.
// /**
//   * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
//   * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4];

const chunk = (array, arrayLength) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const slice = array.slice(i * arrayLength, i * arrayLength + arrayLength);
    if (slice.length > 0) {
      newArr[i] = slice;
    } else break;
  }
  return newArr;
};
console.log(chunk(array1, 77));

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(
  array2.reduce((accumulator, currentValue, index) => {
    if (index === 0) {
      accumulator += `(${currentValue}`;
      return accumulator;
    }
    if (index === 2) {
      accumulator += `${currentValue}) `;
      return accumulator;
    }
    if (index === 6) {
      accumulator += `-${currentValue}`;
      return accumulator;
    }
    accumulator += currentValue;
    return accumulator;
  }, ``)
);
