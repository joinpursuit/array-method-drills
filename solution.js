const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  // Use .every() method to test if numbers is greater than 2, returns boolean value 
  return nums.every(n => n >= 2)
};

const isEveryWordShorterThan7 = (words) => {
  // Use .filter() method to test if word length is shorter than 7
  // return words.every(w => w.length < 8)
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter(num => num < 5)
};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 === 1)

};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find(num => num % 4 === 0)
};

const firstWordLongerThan4Char = () => {
  return words.find(word => word.length > 4)
};

// For Each

const logValuesTimes3 = (nums) => {
  console.log(nums.forEach(num => num * 3))
};

const logWordsWithExclamation = (words) => {
  console.log(words.forEach(word => word + "!"))
};

// Map

const arrayValuesTimes100TimesIndex = (nums) => {
  return nums.map((num,index) => num * 100 * index)
};

const arrayWordsUpcased = (words) => {
  return words.map(w => w.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some(num => num % 7 === 0)
};

const doSomeWordsHaveAnA = () => {
  return words.some(w => w.includes("a"))
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
