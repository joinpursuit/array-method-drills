const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num > 2)
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => num < 5)
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2 === 1)
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => num % 4 === 0)
};

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num) => num % 3 === 0)
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex((word) => word.length < 2)
};

// For Each

const logValuesTimes3 = (nums) => {
  return nums.forEach((num) => num * 3)
};

const logWordsWithExclamation = (words) => {
  return words.forEach((word) => word + "!")
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num) => (num * num) * nums.indexOf(num))
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  const divisibleBy7 = (num) => num % 7 === 0
  return nums.some(divisibleBy7)
};

const doSomeWordsHaveAnA = (words) => {
  const letterACheck = (word) => word.includes("a")
  return words.some(letterACheck)
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
