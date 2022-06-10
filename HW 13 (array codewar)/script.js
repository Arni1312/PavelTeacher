// `use strict`;

// ARRAY

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

const narcissisticNumber = (number) => {
  const string = number.toString();
  const arr = string.split("");
  return (
    number ===
    arr.reduce((accumultor, currentValue) => {
      accumultor += Math.pow(currentValue, arr.length);
      return accumultor;
    }, 0)
  );
};

console.log(narcissisticNumber(153));

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

const arr3 = [1, 2312, 12, 23, 122, 4444];

const digitsNumber = (array) => {
  return array
    .map((element) => element.toString())
    .reduce((accumultor, currentValue) => {
      if (accumultor.length < currentValue.length) {
        return currentValue;
      }
      return accumultor;
    }, []);
};
console.log(digitsNumber(arr3));

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

const nameLike = [
  "Alex",
  "Jacob",
  "Mark",
  "Max",
  "Alex",
  "Jacob",
  "Mark",
  "Max",
  "Alex",
  "Jacob",
  "Mark",
  "Max",
];

const like = (array) => {
  switch (array.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${array[0]} likes this`;
    case 2:
      return `${array[0]} and ${array[1]} likes this`;
    case 3:
      return `${array[0]}, ${array[1]} and ${array[2]} likes this`;
    default:
      return `${array[0]}, ${array[1]} and ${
        array.length - 2
      } others like this`;
  }
};

console.log(like(nameLike));

// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

const capMe = (array) => {
  return array.map((currentValue) => {
    return currentValue
      .slice(0, 1)
      .toUpperCase()
      .concat(currentValue.slice(1).toLowerCase());
  });
};

console.log(capMe(["jo", "nelson", "jurie"])); // returns ['Jo', 'Nelson', 'Jurie']
console.log(capMe(["KARLY", "DANIEL", "KELSEY"])); // returns ['Karly', 'Daniel', 'Kelsey']
