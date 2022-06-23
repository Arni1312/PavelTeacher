// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

const sum = (number1) => {
  return function (number2) {
    return number1 + number2;
  };
};

console.log(sum(1)(2));
console.log(sum(5)(-1));

// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

const inBetween = (first, last) => {
  return function (x) {
    return x >= first && x <= last;
  };
};

const inArray = (arr) => {
  return function (x) {
    return arr.includes(x);
  };
};

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(2, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 7]))); // 1,2

// У нас есть массив объектов, который нужно отсортировать:
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Aeterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
const byField = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : -1);
};
console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
console.log(users.sort(byField("surname")));

// 1) Создайте функцию createBuffer(), которая создает локальную переменную text в виде пустой строки и возвращает функцию buffer, с которой можно работать следующим образом:
// Если в функцию buffer был передан строковый параметр – этот параметр записывается в переменную text. Иначе выведите ошибку в консоль.
// Если функция buffer вызывается без параметров – возвращается значение переменной text.
// Создайте переменную и запишите в нее результат выполнения функции createBuffer().
// Продемонстрируйте работу возвращаемой функции buffer с параметром и без.

const createBuffer = () => {
  let text = "";
  return function (value) {
    if (typeof value === "string") {
      text += value;
      return text;
    } else if (value === undefined) {
      return text;
    } else return "Error";
  };
};

let buffer = createBuffer();
buffer("A");
buffer("XYZ");
console.log(buffer()); // AXYZ

// 2) Создайте функцию signUp(), которая принимаем параметры userName, password и возвращает объект со свойством userName и методом signIn().
// Метод signIn() принимает параметр newPassword и сравнивает его значение со значением password.
// Если пароли совпадают – метод возвращает сообщение 'Sign in success for ${userName}' , иначе – 'Password is incorrect' .
// Создайте переменную user и запишите в нее результат вызова функции signUp().
// Результат работы функции выведите в консоль.

const signUp1 = (userName, password) => {
  return {
    userName,
    signIn: function (pass) {
      if (password === pass) {
        return `Sign in success for ${userName}`;
      } else return "Password is incorrect";
    },
  };
};

const signUp = (userName, password) => {
  return {
    userName,
    password,
    signIn(pass) {
      if (this.password === pass) {
        return `Sign in success for ${this.userName}`;
      } else return "Password is incorrect";
    },
  };
};

let user = signUp("billy", "123");
console.log(user.signIn("a")); // Password is incorrect
console.log(user.signIn("123")); // Sign in success for billy

let user2 = {
  userName: "Arsen",
  password: "123",
};

console.log(user.signIn.call(user2, "123"));
console.log(user.signIn.apply(user2, ["123"]));

// let hi = setInterval((name) => console.log(`hi ${name}`), 3000, Math.random());

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.

function printNumbers(from, to) {
  let start = from;
  let time = setInterval(() => {
    if (start <= to) {
      console.log(start);
    } else clearTimeout(time);
    start++;
  }, 1000);
}
printNumbers(0, 5);

// Используя рекурсивный setTimeout.

function printNumbers1(from, to) {
  let start = from;
  setTimeout(function func() {
    console.log(start);
    if (start < to) {
      setTimeout(func, 1000);
    }
    start++;
  }, 1000);
}
printNumbers1(5, 10);
