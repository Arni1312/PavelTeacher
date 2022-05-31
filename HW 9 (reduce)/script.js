`use strict`;

// REDUCE

// Вывести в консоль имя июзера и скилы через запятаю кроме поледнего через and

let user = {
  name: "Arsen",
  skils: ["react", "angular", "html", "css"],
};

let user1 = {
  name: "Pavel",
  skils: ["react", "angular", "html", "css", "NodeJS", "figma"],
};

function techSkils() {
  let reducer = this.skils.reduce(function (
    accumulator,
    currentValue,
    index,
    arr
  ) {
    if (index === arr.length - 1) {
      accumulator += `and ${currentValue}`;
    } else {
      accumulator += `${currentValue}, `;
    }
    return accumulator;
  },
  "");
  return `${this.name} has skils ${reducer}`;
}
console.log(techSkils.call(user));
console.log(techSkils.call(user1));

// [1.1, 2.4, 6.5, 2.8]

// На выходе хочу объект
// {
//  1: [1.1],
// 2: [2.4, 2.8]
// 6: [6.5]
// sum: сумма элементов
// }

let array = [1.1, 2.4, 6.5, 2.8, 2.7];

function arrayGroup(arr, someFuntion) {
  return arr.reduce(
    function (accumulator, currentValue) {
      accumulator.sum += currentValue;
      let mathFloor = someFuntion(currentValue);
      if (mathFloor in accumulator) {
        accumulator[mathFloor].push(currentValue);
      } else {
        accumulator[mathFloor] = [currentValue];
      }
      return accumulator;
    },
    { sum: 0 }
  );
}

console.log(arrayGroup(array, Math.round));
