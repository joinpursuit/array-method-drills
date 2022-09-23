const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
 const numbersAbove2 = nums.every(
  (num) => { return num >= 2
 })
 return numbersAbove2
};

const isEveryWordShorterThan7 = () => {
  const shorterThan7Char = words.every(
    (word) => {
      if (word.length - 7) {
        return word
      }
   })
   return shorterThan7Char
  //
};

// Filter

const arrayLessThan5 = () => {
  const result = nums.filter(num => num < 5);
return result
  //
};

const arrayOddLengthWords = () => {
  //
};

// Find

const firstValDivisibleBy4 = () => {
  //
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
