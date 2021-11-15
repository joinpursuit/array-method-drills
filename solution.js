const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => {
    return num >= 2;
  });
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => {
    return word.length < 7;
  });
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => {
    return num < 5;
  });
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => {
    return word.length % 2 !== 0;
  });
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => {
    return num % 4 === 0;
  });
};

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => {
    return word.length > 4;
  });
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => {
    console.log(num * 3);
  });
};

const logWordsWithExclamation = (words) => {
  words.forEach((word) => {
    console.log(word + "!");
  });
};

// Map

const arrayValuesTimes100TimesIndex = (nums) => {
  nums.map((num, i) => {
    return num * i * 100;
  });
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => {
    return word.toUpperCase();
  });
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => {
    return num % 7 === 0;
  });
};

const doSomeWordsHaveAnA = (words) => {
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
