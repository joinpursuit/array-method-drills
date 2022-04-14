const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((number) => number >= 2)
};

const isEveryWordShorterThan7 = () => {
  return words.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter((arrEl) => arrEl < 5)
};

const arrayOddLengthWords = () => {
  return words.filter((word) => word.length % 2 === 1) //modulo remainder 1 for odd - or !== 0 (does not equal 0)
};
// Find

const firstValDivisibleBy4 = () => {
  //
  return nums.find((number) => number % 4 === 0)
};

const firstWordLongerThan4Char = () => {
  //
};

// For Each

const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
};

// Map

const arrayValuesTimes100TimesIndex = () => {
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
  arrayValuesTimes100TimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
