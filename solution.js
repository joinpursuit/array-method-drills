const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  // let result = false
  // for(let i = 0; i < nums.length; i++) {
  //   if(nums[i] > 2) {
  //     result = true
  //   }
  // }
  // return result

  return nums.every((num) => num >= 2);
};

console.log(isEveryNumGreaterThan2(nums));

const isEveryWordShorterThan7 = (words) => {
  let result = words.every((word)=>{
    return word.length < 7;
  })
  return result;
};
console.log(isEveryWordShorterThan7(words));

// Filter

const arrayLessThan5 = (nums) => {
  let result = [];
  for (let num of nums) {
    if (num < 5) {
      result.push(num);
    }
  }
  return result;
  // return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2);
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4);
};

// For Each

const logValuesTimes3 = (nums) => {
  return nums.forEach((num) => num * 3);
};

const logWordsWithExclamation = (words) => {
  return words.forEach((word) => word + "!");
};

// Map

const arrayValuesTimes100TimesIndex = (nums) => {
  let newArr = nums.map((num, index) => {
    return num * num * index;
  });
  return newArr;
};

const arrayWordsUpcased = (words) => {
  let newArr = words.map((word) => {
    return word.toUpperCase();
  });
  return newArr;
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  let result = nums.some((num) => num % 7 === 0);
  return result;
};

const doSomeWordsHaveAnA = (words) => {
  let result = words.some((word) => word.includes("a"));
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
