const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  let greaterThanTwo = nums.every((num)=> {
    num >= 2;
  })
  return greaterThanTwo;
};

const isEveryWordShorterThan7 = () => {
  let short = words.every((word)=>{
    return word.length < 7;
  })
  return short;
};

// Filter

const arrayLessThan5 = () => {
  let filteredNums = nums.filter((num)=>{
    return num < 5;
  })
  return filteredNums;
};

const arrayOddLengthWords = () => {
  let filteredWords = words.filter((word)=>{
    return word.length % 2 === 1;
  })
  return filteredWords;
};

// Find

const firstValDivisibleBy4 = () => {
  //
};

const firstWordLongerThan4Char = () => {
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

const arrayValuesTimes100TimesIndex = () => {
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
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesTimes100TimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
