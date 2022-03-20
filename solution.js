const { nums, words } = require("./data/data.js");

// Every
function isEveryNumGreaterThan2(nums){
  let result = '';
  result = nums.every(num => num >= 2);
  if (result) {
    return true;
  } else {
    return false;
  }
};

const isEveryWordShorterThan7 = () => {
  let result = '';
  result = words.every(word => word.length < 7);
  return result;
};

// Filter

const arrayLessThan5 = (nums) => {
  let result = '';
 result = nums.filter(num => num < 5);
 return result;
};

const arrayOddLengthWords = (words) => {
  let result = '';
  result = words.filter(word => word.length % 2 === 1);
  return result;
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let result = '';
 result = nums.find(num => num % 4 === 0);
 return result;
};

const firstWordLongerThan4Char = (words) => {
  let result = '';
  result = words.find(word => word.length > 4);
  return result;
};

// For Each

const logValuesTimes3 = (nums) => {
  let result = '';
  result = nums.forEach(num => num * 3);
  return console.log(result);
};

const logWordsWithExclamation = (words) => {
  let result = '';
  result = words.forEach(word => `${word}!`);
  return console.log(result);
};

// Map

const arrayValuesTimes100TimesIndex = (nums) => {
  let result = '';
  result = nums.map((num,index) => (num * num) * index);
  return result;
};

const arrayWordsUpcased = (words) => {
  let result = '';
  result = words.map(word => word.toUpperCase());
  return result;
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  let result = '';
  result = nums.some(num => num % 7);
  return result;
};

const doSomeWordsHaveAnA = (words) => {
  let result = '';
  result = words.some(word => word.includes('a'));
  return result;
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
