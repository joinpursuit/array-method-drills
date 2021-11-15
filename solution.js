const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((el) => {
    el > 2
  })
};

const isEveryWordShorterThan7 = () => {
  return words.every((el) => {
    return el.length < 7
  })
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter((el) => {
    return el < 5
  })
};

const arrayOddLengthWords = () => {
  return words.filter((el) => {
    return el.length % 2 !== 0
  })
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((el) => {
    return el % 4 === 0
  })
};

const firstWordLongerThan4Char = () => {
  return words.find((el) => {
    return el.length > 4
  })
};

// For Each

const logValuesTimes3 = () => {
  nums.forEach((el) => {
    return el * 3
  })
};

const logWordsWithExclamation = () => {
  words.forEach((el) => {
    el + "!"
  })
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  return nums.map((el, i) => {
    return el * el * i
  })
};

const arrayWordsUpcased = () => {
  return words.map((el) => {
    return el.toUpperCase()
  })
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((el) => {
    return el % 7 === 0
  })
};

const doSomeWordsHaveAnA = () => {
  return words.some((el) => {
    return el.includes("a")
  })
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
