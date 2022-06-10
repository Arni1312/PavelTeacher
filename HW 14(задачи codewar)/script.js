// `use strict`;

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("Asdfasd asdasd"));

function noSpace(x) {
  const arr = x.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      delete arr[i];
    }
  }
  return arr.join("");
}

console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));

function sumTwoSmallestNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 || !Number.isInteger(numbers[i])) {
      delete numbers[i];
    }
  }
  return numbers
    .slice()
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22, -1, 0.2222]));

// Fighting

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  const first = firstAttacker === fighter1.name ? fighter1 : fighter2;
  const second = firstAttacker === fighter2.name ? fighter1 : fighter2;
  let index = 1;
  let winer = "";
  while (true) {
    if (index % 2) {
      second.health = second.health - first.damagePerAttack;
      console.log(
        `${first.name} attacks ${second.name}; ${second.name} now has ${second.health} health.`
      );
      index++;
    } else {
      first.health = first.health - second.damagePerAttack;
      console.log(
        `${second.name} attacks ${first.name}; ${first.name} now has ${first.health} health.`
      );
      index++;
    }
    if (first.health <= 0 || second.health <= 0) {
      winer = second.health > 0 ? second.name : first.name;
      break;
    }
  }

  return winer;
}

console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harald"
  )
);

function findUniq(arr) {
  arr.sort((a, b) => b - a);
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  } else return arr[0];
}

const arrray = [1, 3, 3];

console.log(findUniq(arrray));

function findOdd(arr) {
  const result = [];
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else obj[arr[i]] += 1;
  }
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] % 2) {
      result.push(+keys[i]);
    }
  }
  return result;
}

console.log(findOdd([1, 1, 2, 2, 3, 3, 4, 2, 3, 4]));
