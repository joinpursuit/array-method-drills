const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every(el => el > 2)
};

const isEveryWordShorterThan7 = () => {
  //
  return words.every(el => el.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter(el => el < 5)
};

const arrayOddLengthWords = () => {
  return words.filter(el => el.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find(el => el % 4 === 0)
};

const firstWordLongerThan4Char = () => {
  return words.find(el => el.length > 4)
};

// For Each

const logValuesTimes3 = () => {
  return nums.forEach(el => console.log(el*3))
};

const logWordsWithExclamation = () => {
  return words.forEach(el => console.log(el, "!"))
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  return nums.map((el, i) => el*el*i)
};

const arrayWordsUpcased = () => {
  return words.map(el => el.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some(el => el % 7 === 0)
};

const doSomeWordsHaveAnA = () => {
  return words.some(el => el.includes("a"))
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
