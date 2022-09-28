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

const firstWordLongerThan4Char = (words) => {
  return words.find(w => w.length > 4);
};

/***************************************************
 * Find Index
 * The findIndex() method returns the index of the first element in an array 
 * that satisfies the provided testing function. If no elements satisfy the testing 
 * function, -1 is returned.
 ***************************************************/
const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex(n => n % 3 === 0);
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex(w => w.length < 2);
};

/***************************************************
 * For Each
 * The forEach() method executes a provided function once for each array element.
 * forEach expects a synchronous function.
 * forEach does not wait for promises. Make sure you are aware of the implications 
 * while using promises (or async functions) as forEach callback.
 ***************************************************/
const logValuesTimes3 = (nums) => {
  return nums.forEach(n => n * 3);
};

const logWordsWithExclamation = (words) => {
  return words.forEach(w => `${w}!`)
};

/***************************************************
 * Map
 ***************************************************/
const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((n,i) => (Math.pow(n,2)*i));
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
