const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((num) => {
    return num > 2;
  });
};

// console.log(isEveryNumGreaterThan2(nums));

const isEveryWordShorterThan7 = () => words.every((word) => word.length < 7);

// console.log(isEveryWordShorterThan7(words));
// Filter

const arrayLessThan5 = () => {
  return nums.filter((num) => {
    return num < 5;
  });
};

const arrayOddLengthWords = () => {
  return words.filter((word) => {
    return word.length % 2 === 1;
  });
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((num) => {
    return num % 4 === 0;
  });
};

const firstWordLongerThan4Char = () => words.find((word) => word.length > 4);

// For Each

const logValuesTimes3 = () => {
  nums.forEach((num) => {
    num * 3;
  });
};

const logWordsWithExclamation = () => {
  words.forEach((word) => {
    word + "!";
  });
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  return nums.map((num, i) => {
    return num * i * num;
  });
};

const arrayWordsUpcased = () => {
  return words.map((word) => {
    return word.toUpperCase();
  });
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((num) => {
    return num % 7 === 0;
  });
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => {
    return word.includes("a");
  });
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
