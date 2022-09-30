const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  let arr = nums.every((num) => num >= 2);
  return arr;
  //
};

const isEveryWordShorterThan7 = (words) => {
  let shortWords = words.every((word) => word.length < 7);
  return shortWords;
  //
};

// Filter

const arrayLessThan5 = (nums) => {
  let lessThan5Arr = nums.filter((num) => num < 5);
  return lessThan5Arr;
  //
};

const arrayOddLengthWords = (words) => {
  let oddLetters = words.filter((word) => word.length % 2);
  return oddLetters;
  //
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let divisible4 = nums.find((num) => num % 4 === 0);
  return divisible4;
  //
};

const firstWordLongerThan4Char = (words) => {
  let firstWordLongerThan4 = words.find((word) => word.length > 4);
  return firstWordLongerThan4;
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  let divisible3 = nums.findIndex((num) => num % 3 === 0);
  return divisible3;
  //
};

const firstWordIndexLessThan2Char = (words) => {
  let firstWordLessThan2idx = words.findIndex((word) => word.length < 2);
  return firstWordLessThan2idx;
  //
};

// For Each

const logValuesTimes3 = (nums) => {
  let log3times = nums.forEach((num) => console.log(num * 3));
  return log3times;
  //
};

const logWordsWithExclamation = (words) => {
  let logExclamations = words.forEach((word) => console.log(word + "!"));
  return logExclamations;
  //
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  let valuesSquaredTimesIndex = nums.map((num, index) => num * num * index);
  return valuesSquaredTimesIndex;
  //
};

const arrayWordsUpcased = (words) => {
  let upperCased = words.map((word) => word.toUpperCase());
  return upperCased;
  //
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  let divisibleby7 = nums.some((num) => num % 7 === 0);
  return divisibleby7;
  //
};

const doSomeWordsHaveAnA = (words) => {
  let wordsContainingA = words.some((word) => word.search("a"));
  return wordsContainingA;
  //
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
