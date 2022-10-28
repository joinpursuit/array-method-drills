const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (array) => {
  //
  return array.every((a) => a > 2);
};

const isEveryWordShorterThan7 = (array) => {
  //
  return array.every((a) => a.length < 7);
};

// Filter
const arrayLessThan5 = (array) => {
  //
  return array.filter((a) => a < 5);
};

const arrayOddLengthWords = (array) => {
  //
  return array.filter((a) => a.length % 2 != 0);
};

// Find
const firstValDivisibleBy4 = (array) => {
  //
  return array.find((a) => a % 4 === 0);
};

const firstWordLongerThan4Char = (array) => {
  //
  return array.find((a) => a.length > 4);
};

// Find Index
const firstNumIndexDivisibleBy3 = (array) => {
  //
  return array.findIndex((a) => a % 3 === 0);
};

const firstWordIndexLessThan2Char = (array) => {
  //
  return array.findIndex((a) => a.length < 2);
};

// For Each
const logValuesTimes3 = (array) => {
  //
  array.forEach((a) => console.log(a * 3));
};

const logWordsWithExclamation = (array) => {
  //
  array.forEach((a) => console.log(a, "!"));
};

// Map
const arrayValuesSquaredTimesIndex = (array) => {
  //
  return array.map((a, index) => a ** 2 * index);
};

const arrayWordsUpcased = (array) => {
  //
  return array.map((a) => a.toUpperCase());
};

// Some
const areSomeNumsDivisibleBy7 = (array) => {
  //
  return array.some((a) => a % 7 === 0);
};

const doSomeWordsHaveAnA = (array) => {
  //
  return array.some((a) => a.includes("a"));
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
