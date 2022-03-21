const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
return nums.every(curr => curr >2)
  //
};

const isEveryWordShorterThan7 = () => {
  //
  return words.every(w => w.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  //
  return nums.filter(x=> x<5)
};

const arrayOddLengthWords = () => {
  //
  return words.filter(x => x.length%2)
};

// Find

const firstValDivisibleBy4 = () => {
  //
  return nums.find(x=> x%4===0)
};

const firstWordLongerThan4Char = () => {
  //
  return words.find(w=>w.length > 4)
};

// For Each

const logValuesTimes3 = () => {
  //
  return nums.forEach(x=>x *3)
};

const logWordsWithExclamation = () => {
  //
  return words.forEach(w=>w +'!')
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  //
  return nums.map((x,i) => x*x*i)
};

const arrayWordsUpcased = () => {
  // 
  return words.map(w=>w.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
  return nums.some(x=>x%7)
};

const doSomeWordsHaveAnA = () => {
  //
 return words.some(w=> w.includes('a'))
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
