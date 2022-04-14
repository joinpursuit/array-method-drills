// const { nums, words } = require("./data/data.js");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const words = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num >= 2);
};

const isEveryWordShorterThan7 = (words) => {
  if (!words) {
    return false;
  }

  return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => num < 5);
  //
};

const arrayOddLengthWords = (words) => {
  //
  return words.filter((word) => word.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => num % 4 === 0);
  //
};

const firstWordLongerThan4Char = (words) => {
  //
  return words.find((word) => word.length > 4);
};

// For Each

const logValuesTimes3 = () => {
  //
  nums.forEach((num) => {
    console.log(num * 3);
  });
};

const logWordsWithExclamation = () => {
  words.forEach((num) => {
    console.log(num + "!");
  });
};

// Map

const arrayValuesTimes100TimesIndex = (nums) => {
  return nums.map((num, i) => num * num * i);
  //
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => {
    return word.toUpperCase();
  });
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => num % 7 === 0);
};

const doSomeWordsHaveAnA = (words) => {
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
