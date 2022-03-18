const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((number) => number >= 2)
  //
};

const isEveryWordShorterThan7 = () => {
  //
  return words.every((word)=> word.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  //
  return nums.filter(number => number < 5)
};

const arrayOddLengthWords = () => {
  //
  return words.filter(word => word.length % 2 === 1)
};

// Find

const firstValDivisibleBy4 = () => {
  //
  return nums.find(number => number % 4 === 0)
};

const firstWordLongerThan4Char = () => {
  //
  return words.find(word => word.length > 4)
};

// For Each

const logValuesTimes3 = () => {
  //
  nums.forEach(number => console.log(number*3))
};

const logWordsWithExclamation = () => {
  //
  words.forEach(word => console.log(word + "!"))
};

// Map

const arrayValuesTimes100TimesIndex = (array) => {
  //
  console.log("Array ", array)
  return nums.map((number, i) => (number**2) * i)
};

const arrayWordsUpcased = () => {
  //
  return words.map(word => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
  return nums.some(number => number % 7 === 0)
};

const doSomeWordsHaveAnA = () => {
  //
  return words.some(word => word.toLocaleLowerCase().includes("a"))
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
