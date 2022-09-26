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

const arrayLessThan5 = (nums) => {
  const result = nums.filter(num => num < 5);
return result
  //
};

const arrayOddLengthWords = (arr) => {
    return arr.filter((e) => e.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = (arr) => {
  return arr.find((e) => e % 4 === 0);
};

const firstWordLongerThan4Char = (arr) => {
  return arr.find((e) => e.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  return arr.findIndex((e) => e % 3 === 0);
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((e) => e.length < 2);
};

// For Each

const logValuesTimes3 = (arr) => {
  arr.forEach((e) => {
    console.log(e * 3);
  });
};

const logWordsWithExclamation = (arr) => {
  arr.forEach((e) => {
    console.log(`${e}!`);
  });
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  return arr.map((e, i) => Math.pow(e, 2) * i);
};

const arrayWordsUpcased = (arr) => {
  return arr.map((e) => e.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
return arr.some((e) => e % 7 === 0);
};

const doSomeWordsHaveAnA = (arr) => {
  return arr.some((e) => e.includes("a"));
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
