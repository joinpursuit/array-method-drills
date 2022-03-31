const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  //
  return arr.every(num => num >= 2);
};

const isEveryWordShorterThan7 = (arr) => {
  //
  return arr.every(word => word.length < 7);
};

// Filter

const arrayLessThan5 = (arr) => {
  //
  return arr.filter(num => num < 5);
};

const arrayOddLengthWords = (arr) => {
  //
  return arr.filter(word => word.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = (arr) => {
  //
  return arr.find(num => num % 4 === 0);
};

const firstWordLongerThan4Char = (arr) => {
  //
  return arr.find(word => word.length > 4);
};

// For Each

const logValuesTimes3 = (arr) => {
  //
  arr.forEach(num => console.log(num * 3));
};

const logWordsWithExclamation = (arr) => {
  //
  arr.forEach(word => console.log(`${word}!`));
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  //
  return arr.map((num, i) => (num * num) * i);
};

const arrayWordsUpcased = (arr) => {
  //
  return arr.map(word => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  //
  return arr.some(num => num % 7 === 0);
};

const doSomeWordsHaveAnA = (arr) => {
  //
  return arr.some(word => word.includes("a"));
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
