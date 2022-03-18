const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  //
  return nums.every((num) => num > 2);
};

const isEveryWordShorterThan7 = () => {
  //console.log(words);
  return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = () => {
  //
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = () => {
  //
  return words.filter((word) => word.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = () => {
  //
  return nums.find((num) => num / 4 === 1);
};

const firstWordLongerThan4Char = () => {
  //
  return words.find((word) => word.length > 4);
};

// For Each

const logValuesTimes3 = () => {
  //
  nums.forEach((num) => console.log(num * 3));
};

const logWordsWithExclamation = () => {
  //
  words.forEach((word) => console.log(`${word}!`));
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  //
  return nums.map((num, i) => {
    // console.log(num * (nums.length - 1) * 100);
    // console.log(num, i);
    return num * i * 100;
  });
};

const arrayWordsUpcased = () => {
  //
  return words.map((word) => {
    console.log(word.toUpperCase());
    return word.toUpperCase();
  });
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
  return nums.some((num) => num / 7 === 1);
};

const doSomeWordsHaveAnA = () => {
  //
  return words.some((word) => word.includes("a"));
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
