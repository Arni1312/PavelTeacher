// Fighting
let fighter1 = prompt(`Enter name fighter one`);
let fighter2 = prompt(`Enter name fighter two`);

const randomHealth = () => {
  return Math.round(Math.random() * 100);
};
const randomDemage = () => {
  return Math.round(Math.random() * 10);
};

const randomName = (firstName, secondName) => {
  let firstRandomNumber = Math.round(Math.random() * 100);
  let secondRandomNumber = Math.round(Math.random() * 100);
  return firstRandomNumber > secondRandomNumber ? firstName : secondName;
};

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  console.log(
    `${fighter1.name} have ${fighter1.health} health and ${fighter1.damagePerAttack} damage`
  );
  console.log(
    `${fighter2.name} have ${fighter2.health} health and ${fighter2.damagePerAttack} damage`
  );

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

  return `Winer is ${winer}`;
}
console.log(
  declareWinner(
    new Fighter(fighter1, randomHealth(), randomDemage()),
    new Fighter(fighter2, randomHealth(), randomDemage()),
    randomName(fighter1, fighter2)
  )
);
