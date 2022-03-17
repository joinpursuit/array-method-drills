const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  let greaterThanTwo = nums.every((num)=> {
    num >= 2;
  })
  return greaterThanTwo;
};

const isEveryWordShorterThan7 = () => {
  let short = words.every((word)=>{
    return word.length < 7;
  })
  return short;
};

// Filter

const arrayLessThan5 = () => {
  let filteredNums = nums.filter((num)=>{
    return num < 5;
  })
  return filteredNums;
};

const arrayOddLengthWords = () => {
  let filteredWords = words.filter((word)=>{
    return word.length % 2 === 1;
  })
  return filteredWords;
};

// Find

const firstValDivisibleBy4 = () => {
  let findFirstDivisibleByFour = nums.find((num)=>{
    return num % 4 === 0;
  })
  return findFirstDivisibleByFour;
};

const firstWordLongerThan4Char = () => {
  let firstLongerThanFourChar = words.find((word)=>{
    return word.length > 4;
  })
  return firstLongerThanFourChar;
};

// For Each
const logValuesTimes3 = () => {
  // for (let num of nums){
  //   console.log(num * 3)
  // }
  nums.forEach(num => console.log(num * 3));
};

const logWordsWithExclamation = () => {
  words.forEach((word)=>{
    console.log(word + "!");
  })
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  let answer = nums.map((num, index)=>{
    return (num * num) * index;
  })
  return answer;
};

const arrayWordsUpcased = () => {
  let arrayUpperCase = words.map((word)=>{
    return word.toUpperCase();
  })
  return arrayUpperCase;
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  let areSomeNumsDivisibleSeven = nums.some((num)=>{
    if (num % 7 === 0){
      return true;
    } else {
      return false;
    }
  })
  return areSomeNumsDivisibleSeven;
};

const doSomeWordsHaveAnA = () => {
  let doSomeWordsHaveA = words.some((word)=>{
    return word.includes("a");
  })
  return doSomeWordsHaveA;
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
