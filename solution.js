const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {

  return nums.every( num  => num >= 2)

}

const isEveryWordShorterThan7 = () => {
  return words.every(word => word.length < 7)
};
//


// Filter
const arrayLessThan5 = () => {
  return nums.filter(num => num < 5)

};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((num) => num % 4 === 0)
  
};

const firstWordLongerThan4Char = () => {
  return words.find((words)=> words.length > 4)
};

// For Each

const logValuesTimes3 = () => {
  nums.forEach(nums => nums * 3)
  console.log(nums)
};

const logWordsWithExclamation = () => {
  nums.forEach(nums => nums + '!')
  console.log(nums)
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  return nums.map((num, i) => num * i * 100)
 
};

const arrayWordsUpcased = () => {
  return words.map((word) => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((nums) => nums % 7 === 0)
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => word.toLowerCase().includes("a"))
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
