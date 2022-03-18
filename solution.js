const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (numsArr = nums) => {
  return numsArr.every((num) => num >= 2)
};

const isEveryWordShorterThan7 = (wordsArr = words) => {
  return wordsArr.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = (numsArr = nums) => {
  return numsArr.filter((num) => num < 5)
};

const arrayOddLengthWords = (wordsArr = words) => {
  return wordsArr.filter((word) => word.length % 2)
};

// Find

const firstValDivisibleBy4 = (numsArr = nums) => {
  return numsArr.find((num) => num % 4 === 0)
};

const firstWordLongerThan4Char = (wordsArr = words) => {
  return wordsArr.find((word) => word.length > 4)
};

// For Each

const logValuesTimes3 = (numsArr = nums) => {
  return numsArr.forEach((num) => console.log(num*3) )
};

const logWordsWithExclamation = (wordsArr = words) => {
  return wordsArr.forEach((word) => console.log(word+"!"))
};

// Map

const arrayValuesTimes100TimesIndex = (numsArr = nums) => {
  return numsArr.map((num, i) => i*100)
};

const arrayWordsUpcased = (wordsArr = words) => {
  return wordsArr.map((word) => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (numsArr = nums) => {
  return numsArr.some((num) => num % 7 === 0)
};

const doSomeWordsHaveAnA = (wordsArr = words) => {
  return wordsArr.some((word) => word.toLowerCase().includes("a"))
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
