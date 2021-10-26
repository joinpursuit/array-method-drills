const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (numsArr) => {
  return numsArr.every(num => num >= 2);
};

const isEveryWordShorterThan7 = (wordArr) => {
  return wordArr.every(word => word.length < 7);
};

// Filter

const arrayLessThan5 = (numArr) => {
  return numArr.filter(num => num < 5);
};

const arrayOddLengthWords = (wordArr) => {
  return wordArr.filter(word => word.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = (numArr) => {
  return numArr.find(num => num % 4 === 0);
};

const firstWordLongerThan4Char = (wordArr) => {
  return wordArr.find(word => word.length > 4);
};

// For Each

const logValuesTimes3 = (numArr) => {
  numArr.forEach(num => console.log(num *= 3));
};

const logWordsWithExclamation = (wordArr) => {
  wordArr.forEach(word => console.log(word += '!'));
};

// Map

const arrayValuesTimes100TimesIndex = (numArr) => {
  return numArr.map((num, i) => num * i * 100);
};

const arrayWordsUpcased = (wordArr) => {
  return wordArr.map(word => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (numArr) => {
  return numArr.some(num => num % 7 === 0);
};

const doSomeWordsHaveAnA = (wordArr) => {
  return wordArr.some(word => word.includes('a'));
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
