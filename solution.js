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
  const firstWord = words.find(words => words.length > 4)

  return firstWord
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((element) => element % 3 === 0);
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((element) => element.length < 2);
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((element) => {
    console.log(element * 3);
  });
};

const logWordsWithExclamation = () => {
  words.forEach((element) => {
    console.log(`${element}!`);
  });
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((element, index) => Math.pow(element, 2) * index);
};

const arrayWordsUpcased = () => {
  return words.map((e) => e.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((element) => element % 7 === 0);
};

const doSomeWordsHaveAnA = () => {
  return words.some((element) => element.includes("a"));
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
