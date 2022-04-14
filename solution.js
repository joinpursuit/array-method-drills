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
  return words.find((word) => word.length > 4)
};

// For Each

//remember this is a log not a return 
const logValuesTimes3 = () => {
  console.log(words.forEach((number) => number * 3))
};

const logWordsWithExclamation = () => {
  console.log(words.forEach((word) => word + "!"))
};

// Map
//Back to return

const arrayValuesTimes100TimesIndex = () => {
  return nums.map((number, i) => number * number * i)
};

const arrayWordsUpcased = () => {
  return words.map((word) => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((number) => number / 7)
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => word.includes("a"))
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
