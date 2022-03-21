const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  // use every, is num greater than or equal to 2
  return nums.every((num) => num >= 2);
};

const isEveryWordShorterThan7 = () => {
  // is every word in words < 7 characters => .length
  return words.every((word) => word.length <= 7);
};

// Filter
const arrayLessThan5 = () => {
  // num < 5
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = () => {
  // filter words that have an odd length
  return words.filter((word) => word.length % 2 !== 0);
};

// Find
const firstValDivisibleBy4 = () => {
  // return 1st number that's divisible by 4
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  // return 1st word who's length is > 4
  return words.find((word) => word.length > 4);
};

// For Each
const logValuesTimes3 = () => {
  // log the product of each number multiplied by 3
  nums.forEach((num) => console.log(num * 3));
};

const logWordsWithExclamation = () => {
  // log each word with ! added to the end of the string
  words.forEach((word) => console.log(word + '!'));
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some
const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
  //
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
