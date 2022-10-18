const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  let result = nums.every((e) => e > 2);
  return result;
};

const isEveryWordShorterThan7 = () => {
  let result = words.every((e) => e.length < 7);
  return result;
};

// Filter

const arrayLessThan5 = () => {
  let result = nums.filter((f) => f < 5);
  return result;
};

const arrayOddLengthWords = () => {
  let result = words.filter((f) => f.length % 2 !== 0);
  return result;
};

// Find

const firstValDivisibleBy4 = () => {
  let result = nums.find((f) => f % 4 === 0);
  return result;
};

const firstWordLongerThan4Char = () => {
  let result = words.find((f) => f.length > 4);
  return result;
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  let result = nums.findIndex((i) => i % 3 === 0);
  return result;
};

const firstWordIndexLessThan2Char = () => {
  let result = words.findIndex((i) => i.length < 2);
  return result;
};

// For Each

const logValuesTimes3 = () => {
  let result = nums.forEach((e) => e * 3);
  return result;
};

const logWordsWithExclamation = () => {
  let result = words.forEach((e) => e.includes("!"));
  return result;
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  let result = nums.map((m, i) => (m ** 2) * i);
  return result;
};

const arrayWordsUpcased = () => {
  let result = words.map((m) => m.toUpperCase());
  return result;
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  let result = nums.some((s) => s % 7 === 0);
  return result;
};

const doSomeWordsHaveAnA = () => {
  let result = words.some((s) => s.includes("a"));
  return result;
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
