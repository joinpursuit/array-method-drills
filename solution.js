const { nums, words } = require("./data/data.js");


const isEveryNumGreaterThan2 = (nums) => {
  let results = nums.every((num)=>{
    if(num >= 2){
      return true;
    } else{
      return false;
    }
  });
  return results;
};

const isEveryWordShorterThan7 = (words) => {
  let results = words.every((word)=>{
    if(word.length < 7){
      return true;
    } else {
      return false;
    }
  });
  return results;
  //
};

// Filter

const arrayLessThan5 = (nums) => {
  let result = nums.filter((num)=>{
    if(num < 5){
      return true;
    } else{
      return false;
    }
    });
  return result;
};

const arrayOddLengthWords = (words) => {
  let result = words.filter((word)=>{
    if(word.length % 2){
      return true;
    } else {
      return false;
    }
  });
  return result;
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let results = nums.find((num)=>{
    if(num % 4 === 0){
      return true;
    } else{
      return false;
    }
  })
  return results;
  //
};

const firstWordLongerThan4Char = (words) => {
  let results = words.find((word) => {
    if(word.length > 4){
      return true;
    } else{
      return false;
    }
  });
  return results;
};

// For Each

const logValuesTimes3 = (nums) => {
  let results = nums.forEach((num)=>{
    return num * 3;
  });
  return results;
};

const logWordsWithExclamation = (words) => {
  let newWord = words.forEach((word)=>{
    return `${word}!`;
  });
  return newWord;
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  let squaredArr = nums.map((num, i)=>{
    return (num * num) * i;
  })
  return squaredArr;
};

const arrayWordsUpcased = (words) => {
  let upperCasedArr = words.map((word)=>{
    return word.toUpperCase();
  });
  return upperCasedArr;
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num)=>{
    if(num % 7 === 0){
      return true;
    } else{
      false;
    }
  });
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word)=>{
    if(word.includes("a")){
      return true;
    } else {
      return false;
    };
  });
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
