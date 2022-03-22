const { nums, words } = require("./data/data.js");

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// const words = [
//   "The",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over", 
//   "the",
//   "lazy", 
//   "dog",
// ];

// Every: returns a boolean that depends if all the elements in the array pass the conditional statement
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num >= 2)
};
// console.log(isEveryNumGreaterThan2(nums), false)

const isEveryWordShorterThan7 = (words) => {
  console.log(words)
  // guard clause to check if the argument comes to truthy
  if (!words) {
    return false
  } 

  return words.every((word) => word.length < 7);
};
// console.log("The".length)
// const fruit = ["Apple", "Grapes", "Watermelon"]
// console.log(isEveryWordShorterThan7(fruit), false)
// console.log(isEveryWordShorterThan7(words), true)
// console.log(isEveryWordShorterThan7(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog",]), true)

// Filter: returns a new array with all the elements that passes the conditional statement

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => num < 5)
};
// console.log(arrayLessThan5(nums), [1, 2, 3, 4, 0])

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2 === 1)
};
// console.log(arrayOddLengthWords(words), ["The","quick","brown","fox","jumps", "the", "dog"])

// Find: returns the first element in the array that passes the conditional statement

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => num % 4 === 0)
};
// console.log(firstValDivisibleBy4(nums), 4)

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4)
};
// console.log(firstWordLongerThan4Char(words), "quick")

// For Each: runs and applies the callback function to each element in the array 
// X does not return so it undefined but look in the console 

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => console.log(num*3))
};
// console.log(logValuesTimes3(nums), 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 0)

const logWordsWithExclamation = (words) => {
  words.forEach((word) => console.log(word+"!"))
};
// console.log(logWordsWithExclamation(words), "The!", "quick!","brown!","fox!","jumps!","over!", "the!","lazy!", "dog!")

// Map: returns a new array that runs and applies the callback function to each element in the array

// arrayValuesSquaredTimesIndex
const arrayValuesTimes100TimesIndex = (nums) => {
  return nums.map((num, i) => num*num*i)
};
// console.log(nums)
// console.log(arrayValuesTimes100TimesIndex(nums))
// console.log([ 0, 4, 18, 48, 100, 180, 294, 448, 648, 900, 0])

const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase())
};
// console.log(arrayWordsUpcased(words), ["THE", "QUICK", "BROWN", "FOX", "JUMPS", "OVER", "THE", "LAZY", "DOG"])

// Some: returns a boolean if at least one element in the array passes the conditional statement

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => num % 7 === 0)
};
// console.log(areSomeNumsDivisibleBy7(nums), true)

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => word.includes('a'))
};
// console.log(doSomeWordsHaveAnA(words), true)

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
