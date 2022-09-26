const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (numbers) => {
  return numbers.every(number => number>2)//the .Every method return a boolean
};
// console.log(isEveryNumGreaterThan2(nums))



const isEveryWordShorterThan7 = (wordss) => {
  return wordss.every(word => word.length<7)
};
console.log(isEveryWordShorterThan7(words))

// Filter
const arrayLessThan5 = (numbers) => {
  return numbers.filter(num => num<5)
};
console.log(arrayLessThan5(nums))

const arrayOddLengthWords = (words) => {
return words.filter(word => word.length % 2 !== 0 )
};
console.log(arrayOddLengthWords(words))

// Find
const firstValDivisibleBy4 = (nums) => {
return nums.find(num => num % 4 === 0)
};
console.log(firstValDivisibleBy4(nums))

const firstWordLongerThan4Char = (words) => {
  return words.find(word => word.length > 4)
};
console.log(firstWordLongerThan4Char(words))

// Find Index
const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex(num => num % 3 === 0 )
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex(word => word.length < 2 )
};

// For Each
const logValuesTimes3 = (nums) => {
  console.log(nums.forEach(num => num * 3))
};

const logWordsWithExclamation = (words) => {
  console.log(words.forEach(word => word.includes("!")))
};
// const logWordsWithExclamation = (words) => {
//   words.forEach(word => console.log(word[word.length-1] === "!"))
// };
// const logWordsWithExclamation = (words) => {
//   words.forEach(word => console.log(word + "!"))
// };
console.log(logWordsWithExclamation(words))

// Map
const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index) => (num ** 2) * index)
};

const arrayWordsUpcased = (words) => {
  return words.map(word => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some(num => num % 7 === 0)
};

const doSomeWordsHaveAnA = (words) => {
  return words.some(word => word.includes("a"))
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
