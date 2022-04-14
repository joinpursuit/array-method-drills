const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (numbersArr) => {
return numbersArr.every(number => number > 2);
};

const isEveryWordShorterThan7 = (w) => {
  return w.every(word => word.length < 7);
};

// Filter

const arrayLessThan5 = (numbersArr) => {
  return numbersArr.filter(number => number < 5);
};

const arrayOddLengthWords = (wordsArr) => {
  return wordsArr.filter(word => word.length % 4);
};

// Find

const firstValDivisibleBy4 = (numbersArr) => {
  return numbersArr.find(number => number % 4 == 0);
};

const firstWordLongerThan4Char = (wordsArr) => {
  return wordsArr.find(word => word.length > 4);
};

// For Each

const logValuesTimes3 = (numbersArr) => {
  return numbersArr.forEach(number => {
    console.log(number, number, number)
  });
};

const logWordsWithExclamation = (wordsArr) => {
  return wordsArr.forEach(word => {
    console.log(word + "!")
  })
};

// Map

const arrayValuesSquaredTimesIndex = (numbersArr) => {
  return numbersArr.map((number, index) =>
     (Math.pow(number, 2)) * index)
};

const arrayWordsUpcased = (wordsArr) => {
  return wordsArr.map(word => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (numbersArr) => {
  return numbersArr.some(number => number % 7)
};

const doSomeWordsHaveAnA = (wordsArr) => {
  return wordsArr.some(word => word.includes("a"))
};


isEveryNumGreaterThan2(nums);
isEveryWordShorterThan7(words);
arrayLessThan5(nums);
arrayOddLengthWords(words);
firstValDivisibleBy4(nums);
firstWordLongerThan4Char(words);
logValuesTimes3(nums)
logWordsWithExclamation(words)
arrayValuesSquaredTimesIndex(nums)
arrayWordsUpcased(words)
areSomeNumsDivisibleBy7(nums)
doSomeWordsHaveAnA(words)

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
