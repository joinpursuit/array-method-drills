const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((number) => {
    return number > 2;
  });
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] < 2) {
  //     return false;
  //   }
  // }
  // return true;
};

const isEveryWordShorterThan7 = () => {
  // console.log(words);
  // for (let i = 0; i < words.length; i++) {
  //   console.log(words[i]);
  //   if (words[i].length >= 7) {
  //     return false;
  //   }
  // }
  // return true;
  return words.every((word) => {
    return word.length < 7;
  });
};

// Filter

const arrayLessThan5 = () => {
  //
  return nums.filter((nums) => nums < 5);
};

const arrayOddLengthWords = () => {
  //
  return words.filter((word) => word.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = () => {
  //
  return nums.find((num) => num % 4 === 0);
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
  words.forEach((word) => console.log(word + "!"));
};

// Map

const arrayValuesTimes100TimesIndex = (array) => {
  //
  return array.map((num, i) => num * num * i);
};

const arrayWordsUpcased = (array) => {
  //
  return array.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
  return nums.some((num) => num % 7 === 0);
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
