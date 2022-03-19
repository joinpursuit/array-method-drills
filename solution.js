const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((eachElement) => eachElement > 2);
};

const isEveryWordShorterThan7 = (Words) => {
  return words.every((eachElement) => eachElement.length < 7);
};

// Filter
const arrayLessThan5 = (nums) => {
  return nums.filter((eachElement) => eachElement < 5);
  //
};

const arrayOddLengthWords = (words) => {
  return words.filter((eachElement) => eachElement.length % 2 === 1);
  //
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((eachElement) => eachElement % 4 === 0);
  //
};

const firstWordLongerThan4Char = (words) => {
  return words.find((eachElement) => eachElement.length > 4);
};

// For Each
const logValuesTimes3 = (nums) => {
  return nums.forEach((eachElement) => console.log(eachElement * 3));
  //
};

const logWordsWithExclamation = (words) => {
  return words.forEach((eachElement) => eachElement.includes("!"));
  //
};

// Map


const arrayValuesSquaredTimesIndex = () => {
  return nums.map((eachElement, index) => eachElement * index * eachElement);
  //
};

const arrayWordsUpcased = (words) => {
  return words.map((eachElement) => eachElement.toUpperCase());
  //
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((eachElement) => eachElement % 7 === 0);
  //
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((eachElement) => eachElement.includes("a"));
  //
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
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
