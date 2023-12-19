const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = nums => nums.every((num) => {
  //
  return num >= 2;
});

const isEveryWordShorterThan7 = words => words.every((word) => {
  //
    return word.length < 7
});

// Filter

const arrayLessThan5 = nums => nums.filter((num) => {
  //
  return num < 5
});

const arrayOddLengthWords = words => words.filter((word) => {
  //
  const oddLength = word.length % 2 === 1
  return word.length === oddLength;
})

// Find

const firstValDivisibleBy4 = () => {
  //
};

const firstWordLongerThan4Char = () => {
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  //
};

const firstWordIndexLessThan2Char = () => {
  //
};

// For Each

const logValuesTimes3 = nums =>  nums.forEach((num) => {
  //
  const times3 = num * 3
  return console.log(times3);
});

const logWordsWithExclamation = words => words.forEach(word) => {
  //
    word.
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = words =>  words.map((word) => {
  //
    return word.toUpperCase()
}) 

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
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
