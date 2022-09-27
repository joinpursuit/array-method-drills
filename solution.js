const { nums, words } = require("./data/data.js");

/***************************************************
 * Every
 * The every() method tests whether all elements in the array pass the test implemented
 * by the provided function. 
 * It returns a Boolean value.
 ***************************************************/ 
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every(n => n >= 2);
};

const isEveryWordShorterThan7 = (words) => {
  return words.every(w => w.length < 7);
};

/***************************************************
 * Filter
 * The filter() method creates a shallow copy of a portion of a given array, filtered 
 * down to just the elements from the given array that pass the test implemented 
 * by the provided function.
 ***************************************************/
const arrayLessThan5 = (nums) => {
  return nums.filter(n => n < 5);  
};

const arrayOddLengthWords = (words) => {
  return words.filter(w => (w.length % 2 !== 0));
};

/***************************************************
 * Find
 * The find() method returns the first element in the provided array that satisfies 
 * the provided testing function. If no values satisfy the testing function, 
 * undefined is returned.
 ***************************************************/
const firstValDivisibleBy4 = (nums) => {
  return nums.find(n => n % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  //
};

/***************************************************
 * Find Index
 ***************************************************/
const firstNumIndexDivisibleBy3 = () => {
  //
};

const firstWordIndexLessThan2Char = () => {
  //
};

/***************************************************
 * For Each
 ***************************************************/
const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
};

/***************************************************
 * Map
 ***************************************************/
const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

/***************************************************
 * Some
 ***************************************************/
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
