const { nums, words, products } = require('./data/data.js');

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num >= 2);
};

const isEveryWordShorterThan7 = () => {
  return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = () => {
  return words.filter((word) => word.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num) => num % 3 === 0);
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => console.log(num * 3));
};

const logWordsWithExclamation = (words) => {
  words.forEach((word) => console.log(`${word}!`));
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index) => num ** 2 * index);
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((ele) => ele % 7 === 0);
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((ele) => ele.toLowerCase().includes('a'));
};

const addAllNumbers = (nums) => {
  return nums.reduce((acc, cur) => acc + cur, 0);
};

const concatAllWords = (words) => {
  return words.reduce((acc, cur) => acc + cur, '');
};

const sortNumsWithoutArguments = (nums) => {
  return nums.sort();
};

const sortWordsWithoutArgs = (words) => {
  return words.sort();
};

const sortNumsAsc = (nums) => {
  return nums.sort((a, b) => a - b);
};
const sortNumsDesc = (nums) => {
  return nums.sort((a, b) => b - a);
};

const sortWordsAsc = (words) => {
  return words.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
};
const sortWordsDesc = (words) => {
  return words.sort((a, b) => (b > a ? 1 : b < a ? -1 : 0));
};

const letterUsedOnce = (words) => {
  const str = [...'abcdefghijklmnopqrstuvwxyz'];
  const lower = words.join(' ').toLowerCase();
  returnstr.every((ele) => lower.includes(ele));
};

const filterProductPrice = (products) => {
  return products.filter((product) => product.price < 10);
};

const filterProductName = (products) => {
  return products.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );
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
  addAllNumbers,
  concatAllWords,
  sortWordsWithoutArgs,
  sortNumsWithoutArguments,
  sortWordsAsc,
  sortWordsDesc,
  sortNumsAsc,
  sortNumsDesc,
  letterUsedOnce,
  filterProductPrice,
  filterProductName,
};
