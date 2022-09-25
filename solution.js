const { nums, words } = require("./data/data.js");

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// const panagram = [
//   "The",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every(num => num > 2)
};

const isEveryWordShorterThan7 = (panagram) => {
  return panagram.every(word => word.length < 7)
};

// Filter
const arrayLessThan5 = (nums) => {
  return nums.filter(num => num < 5)
};

const arrayOddLengthWords = (panagram) => {
  return panagram.filter(word => word.length % 2 === 1)
};

// Find
const firstValDivisibleBy4 = (nums) => {
  return nums.find(num => num % 4 === 0)
};

const firstWordLongerThan4Char = (panagram) => {
  return panagram.find(word => word.length > 4)
};

// Find Index
const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex(num => num % 3 === 0)
};

const firstWordIndexLessThan2Char = (panagram) => {
  return panagram.findIndex(word => word.length < 2)
};

// For Each
const logValuesTimes3 = (nums) => {
  nums.forEach(num => console.log(num * 3))
};

const logWordsWithExclamation = (panagram) => {
  panagram.forEach(word => console.log(word + "!"))
};

// Map
const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index) => (num ** 2) * index)
};

const arrayWordsUpcased = (panagram) => {
  return panagram.map(word => word.toUpperCase())
};

// Some
const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some(num => num % 7 === 0)
};

const doSomeWordsHaveAnA = (panagram) => {
  return panagram.some(word => word.includes("a"))
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
