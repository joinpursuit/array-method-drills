const { nums, words } = require("./data/data.js");

// Every returns all instances
const isEveryNumGreaterThan2 = (nums) => {
 return nums.every(num => num > 2)
  //
};

const isEveryWordShorterThan7 = (words) => {
  return words.every(word => word.length < 7)

  //
};

// Filter array by a condition
const arrayLessThan5 = (nums) => {
  return nums.filter(num => num < 5)
  //
};

const arrayOddLengthWords = (words) => {
  return words.filter(word => word.length % 2 > 0)
  //
};

// Find the first instance of a condition
const firstValDivisibleBy4 = (nums) => {
  return nums.find(num => num % 4 === 0)
  //
};

const firstWordLongerThan4Char = (words) => {
  return words.find(word => word.length > 4)
  //
};

// Find Index first index that matches criteria
const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex(num => num % 3 === 0)
  //
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex(word => word.length < 2)
  //
};

// For Each applies criteria to each element
const logValuesTimes3 = (nums) => {
  return nums.forEach(num => num * 3)
  //
};

const logWordsWithExclamation = (words) => {
  return words.forEach(word => word + "!")
  //
};

// Map return a new array with a mutation applied
const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index)=> num * num * index)

  //
};

const arrayWordsUpcased = (words) => {
  return words.map(word => word.toUpperCase())
  //
};

// Some returns all one instance of criteria
const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some(num => num % 7 === 0)
  //
};

const doSomeWordsHaveAnA = (words) => {
  return words.some(word => word.toLowerCase().includes("a"))
  //
};

const totalOfNumbersInArray = (nums) => {
  return nums.reduce((acc, num) => acc + num, 0)
};
totalOfNumbersInArray(nums)

const concatenateAllTheWords = (words) => {
  return words.reduce((acc, word) => acc + word, "");
};

const sortNumbersWithNoArgument = (nums) => {
  return nums.sort(num => num)
  
}

const sortWordsWithNoArgument = (words) => {
  return words.sort(word => word)

};

const sortNumbersAscendingOrder = (nums) => {
  return nums.sort((a, b)=> a - b)

};

const sortNumbersDescendingOrder = (nums) => {
  return nums.sort((a, b) => b - a)

};

const sortWordsAscendingOrder = (words) => {
  return words.sort((a, b) = a.localCompare(b))

};

const sortWordsDescendingOrder = (words) => {
  return words.sort((a, b) => b.localCompare(a))

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
