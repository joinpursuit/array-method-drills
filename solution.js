const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => nums.every(num => num >= 2 )
  //

const isEveryWordShorterThan7 = () =>  words.every(word => word.length < 7)
  //



// Filter
const arrayLessThan5 = () => nums.filter(num => num < 5)
  //

const arrayOddLengthWords = () => words.filter(word => word.length % 2 === 1)
  //

// Find
const firstValDivisibleBy4 = () => nums.find(num => num % 4 === 0)

const firstWordLongerThan4Char = () => words.find(word => word.length > 4)
  //
// const findFirstIndexDivisibleBy3 = () => nums.find(num => num % 4 === 0)

// const findIndexOfWordLessThan2Char = () => words.find(word => word.length > 4)
  //

// For Each
const logValuesTimes3 = () => nums.forEach(num => num * 3)

const logWordsWithExclamation = () => words.forEach(word => word + '!')
  //


// Map
const arrayValuesTimes100TimesIndex = () =>  nums.map((num, index )=> num ** 2 * index)

  //

const arrayWordsUpcased = () => words.map(word => word.toUpperCase())

// Some
const areSomeNumsDivisibleBy7 = () => nums.some(num => num % 7 === 0)

const doSomeWordsHaveAnA = () => words.some(word => word.includes('a'))

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
