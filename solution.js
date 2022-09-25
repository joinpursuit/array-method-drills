const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
 function checkNumber(num) {
  return num >= 2
 }
 return nums.every(checkNumber)
};

const isEveryWordShorterThan7 = (words) => {
  function checkWord(word) {
    return word.length < 7
  }
  return words.every(checkWord)
};

// Filter

const arrayLessThan5 = () => {
  function checkArray(num) {
    return num < 5
  }
  return nums.filter(checkArray)
};

const arrayOddLengthWords = () => {
  function checkWords(words) {
    return words.length % 2
  }
  return words.filter(checkWords)
};

// Find

const firstValDivisibleBy4 = () => {
  const firstVal = nums.find(nums => nums % 4 === 0)

  return firstVal
};

const firstWordLongerThan4Char = () => {
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  //
};

const firstWordIndexLessThan2Char = () => {
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

const arrayValuesSquaredTimesIndex = () => {
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
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
