// `use strict`;
// Нужній юзер по айди статус диактиивейтєд
const ACTIVATED_TYPE = "activated";
const DEACTIVATED_TYPE = "diactivated";

const initialState = {
  entities: [
    { name: "test", status: ACTIVATED_TYPE, id: 0 },
    { name: "test", status: ACTIVATED_TYPE, id: 1 },
    { name: "test", status: ACTIVATED_TYPE, id: 2 },
    { name: "test", status: ACTIVATED_TYPE, id: 3 },
    { name: "test", status: ACTIVATED_TYPE, id: 4 },
  ],
  loading: false,
  huynya: {},
};

const activateDeactivate = (state, action) => {
  const newArr = state.entities.map((el) => {
    if (el.id === action.payload.id) {
      return { ...el, status: action.type };
    }
    return el;
  });
  return { ...state, entities: newArr };
};

const newState = activateDeactivate(initialState, {
  type: DEACTIVATED_TYPE,
  payload: { id: 2 },
});
console.log(newState);
console.log(
  activateDeactivate(newState, { type: ACTIVATED_TYPE, payload: { id: 2 } })
);

var countBits = function (n) {
  const result = [];
  let number = n;
  do {
    result.unshift(number % 2);
    number = Math.floor(number / 2);
    // console.log(number % 2);
  } while (number >= 2);
  result.unshift(number);
  return result.reduce((acc, cv, index, arr) => (acc += cv), 0);
};

console.log(countBits(5));

const formatter = (number) => (number < 10 ? `0${number}` : `${number}`);

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  let second = seconds - hours * 3600 - minutes * 60;
  return `${formatter(hours)}:${formatter(minutes)}:${formatter(second)}`;
}

console.log(humanReadable(98));

const huita = (number) => {
  let n = number;
  do {
    n = n
      .toString()
      .split("")
      .reduce((acc, cur) => (acc += +cur), 0);
  } while (n > 9);
  return n;
};

console.log(huita(77));

const pairOfGloves = (arr) => {
  const obj = arr.reduce((acc, cv) => {
    if (acc[cv] === undefined) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
  let counter = 0;
  for (let key in obj) {
    counter += Math.floor(obj[key] / 2);
  }
  return counter;
};

function numberOfPairs(gloves) {
  pairsCounts = gloves.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});
  return Object.values(pairsCounts).reduce(
    (acc, current) => acc + parseInt(current / 2),
    0
  );
}

function rot13(message) {
  const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(
    /[a-z]/gi,
    (letter) => cipher[originalAlpha.indexOf(letter)]
  );
}

console.log(rot13("Hello my name is Arsen"));

// const array1 = [1, 2, 3, 1, 2, 1, 2, 3];

// function deleteNth(arr, n) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let y = 0; y < arr.length; y++)
//       if (arr[y] !== arr[i]) {
//         newArr.push(arr[i]);
//       }
//   }
//   return newArr;
// }

// console.log(deleteNth(array1, 1));

// diff([1,2,3], [2]) => [1,3]

const array2 = [1, 2, 3, 4, 5, 9];
const array3 = [4, 5, 6, false, NaN, undefined, 7, 8, 11];

// const diff = (array, array2) => {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let y = 0; y < array2.length; y++) {
//       if (array[i] !== array2[y]) {
//         newArr.push(array2[y]);
//       }
//     }
//   }
//   return newArr;
// };

const diff = (array, array2) => {
  let newArr = [...array, ...array2];
  let newArr2 = [...array, ...array2];
  newArr = newArr.filter((item) => array.indexOf(item) < 0);
  newArr2 = newArr2.filter((item) => array2.indexOf(item) < 0);
  return [...newArr2, ...newArr];
};

console.log(diff(array2, array3));
