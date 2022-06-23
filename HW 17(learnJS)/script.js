// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

const sumSalaries = (array) =>
  Object.values(array).reduce((acc, cv) => (acc += cv), 0);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

const count = (obj) => Object.keys(obj).length;

let user = {
  name: "John",
  years: 30,
};

console.log(count(user)); // 2

// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// ваш код должен быть с левой стороны:
// ... = user
let { name } = user;
let { years: age } = user;
let { isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

const topSalary = (obj) => {
  const newArr = Object.entries(obj);
  let maxCash = 0;
  let maxName;
  if (newArr.length > 0) {
    for (let [name, cash] of newArr) {
      if (maxCash < cash) {
        maxCash = cash;
        maxName = name;
      }
    }
    return `${maxName}: ${maxCash},`;
  } else return null;
};

console.log(topSalary(salaries));

function pow(x, n) {
  return n === 1 ? x : x * pow(x, n - 1);
}

console.log(BigInt(pow(3, 3)));


