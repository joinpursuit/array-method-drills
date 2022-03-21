const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (currentNum) => {
  // console.log(nums.every((currentNum) => currentNum >= 2));
  return nums.every((currentNum) => currentNum >= 2);
};

const isEveryWordShorterThan7 = (currentWord) => {
  // console.log(words.every(currentWord.length < 7));
  return words.every((currentWord) => currentWord.length < 7);
};
// Filter

const arrayLessThan5 = (currentNum) => {
  return nums.filter((currentNum) => currentNum < 5);
};

const arrayOddLengthWords = (currentWord) => {
  return words.filter((currentWord) => currentWord.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = (currentNum) => {
  return nums.find((currentNum) => currentNum % 4 === 0);
};

const firstWordLongerThan4Char = (currentWord) => {
  return words.find((currentWord) => currentWord.length > 4);
};

// For Each

const logValuesTimes3 = (currentNum) => {
  console.log(nums.forEach((currentNum) => currentNum * 3));
};

const logWordsWithExclamation = (currentWord) => {
  console.log(words.forEach((currentWord) => currentWord + "!"));
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((currentNum, i) => currentNum * currentNum * i);
};

const arrayWordsUpcased = (currentWord) => {
  return words.map((currentWord) => currentWord.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (currentNum) => {
  return nums.some((currentNum) => currentNum % 7 === 0);
};

const doSomeWordsHaveAnA = (currentWord) => {
  return currentWord.some((currentWord) => currentWord.includes("a"));
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
