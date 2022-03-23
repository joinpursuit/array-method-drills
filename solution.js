const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (numberArray) => {
  return numberArray.every((el) => el>=2);
};

const isEveryWordShorterThan7 = (wordArray) => {
  return wordArray.every((el) => el.length < 7);
};

// Filter

const arrayLessThan5 = (numberArray) => {
  return numberArray.filter((el) => el<5);
};

const arrayOddLengthWords = (wordArray) => {
  return wordArray.filter((el) => el.length % 2 !== 0 );
};

// Find

const firstValDivisibleBy4 = (numberArray) => {
  return numberArray.find((el) => el % 4 === 0);
};

const firstWordLongerThan4Char = (wordArray) => {
  return wordArray.find((el) => el.length>4);
};

// For Each

const logValuesTimes3 = (numberArray) => {
  return numberArray.forEach((el)=> el*3);
};

const logWordsWithExclamation = (wordArray) => {
  return wordArray.forEach((el) => el.includes('!'));
};

// Map

const arrayValuesSquaredTimesIndex = (numberArray) => {
  return numberArray.map((el, index) => Math.pow(el,2)*index)
};

const arrayWordsUpcased = (wordArray) => {
  return wordArray.map((el) => el.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (numberArray) => {
  return numberArray.some((el) => el % 7 === 0);
};

const doSomeWordsHaveAnA = (wordArray) => {
  return wordArray.some((el) => el.toLowerCase().includes('a'));
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
