const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
return nums.every(num => num >= 2)
};

const isEveryWordShorterThan7 = () => {
  return words.every(word => word.length <=7)
};

// Filter

const arrayLessThan5 = () => {
return nums.filter( num => num < 5)
};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 === 1 )
};

// Find

const firstValDivisibleBy4 = () => {
 return nums.find(num => num%4 === 0)

};

const firstWordLongerThan4Char = () => {
return words.find(word => word.length >= 4)
};

// For Each

const logValuesTimes3 = () => {
  return nums.forEach(x =>x*3)
};

const logWordsWithExclamation = () => {
  return words.forEach(word => word === "!")
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  return nums.map((num,i) => num*num * i )
};

const arrayWordsUpcased = () => {
  return words.map(x => x.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some(x => x%7 === 0)
};

const doSomeWordsHaveAnA = () => {
  return words.some(x => 'a')
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
