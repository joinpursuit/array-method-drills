const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num >= 2);
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2);
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => !(num % 4));
};

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4);
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => console.log(num * 3));
};
//The original array won't be affected
//Yes we can use it to store in a new array, just like in for loop.
//we need to push to that new array
const logWordsWithExclamation = (words) => {
  words.forEach((word) => console.log(`${word}!`));
};

// Map
//The original array is not affected
//Map return a new array so we don't need to store
const arrayValuesTimes100TimesIndex = (nums) => {
  return nums.map((num, i) => num * num * i);
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => !(num % 7));
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => word.includes("a"));
};
//Additional parts
//nothing happens to the original array
const getNumsSum = (nums) => {
  return nums.reduce((a, b) => a + b, 0);
};
const concatWords = (words) => {
  return words.reduce((a, b) => a + b, "");
};
//1. Try to sort without any arguments, do you get what you'd expect with the numbers array?
//it will sort the array lexicographically

//2. Try to sort without any arguments, do you get what you'd expect with the words array?
//yes, array of strings are sorted in lexicographical order
//3. Sort the numbers in ascending order
const sortAscNums = (nums) => {
  nums.sort((a, b) => a - b);
  return nums;
};

//Sort the numbers in descending order
const sortDescNums = (nums) => {
  nums.sort((a, b) => b - a);
  return nums;
};
//Sort the words in ascending order
//Sort the words in descending order

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesTimes100TimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
