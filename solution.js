const { nums, words } = require("./data/data.js");

// Every
// 1. Determine if every number is greater than or equal to 2
// const isEveryNumGreaterThan2 = (nums) => {
//   return nums.every((num) => {
//     return num >=2
//   })
// };

//Refactored Code (with implicit return)
const isEveryNumGreaterThan2 = (nums) => nums.every((num) => num >= 2);

// 2. Determine if every word is shorter than 7 characters
// const isEveryWordShorterThan7 = (words) => {
//   return words.every((word) => {
//     return word.length < 7
//   })
// };

//Refactored Code (with implicit return)
const isEveryWordShorterThan7 = (words) =>
  words.every((word) => word.length < 7);

// Filter
// 1. Filter the array for numbers less than 5
const arrayLessThan5 = (nums) => {
  return nums.filter((num) => {
    return num < 5;
  });
};

// 2. Filter words that have an odd length
const arrayOddLengthWords = (words) => {
  return words.filter((word) => {
    return word.length % 2 === 1;
  });
};

// Find
// 1. Find the first value divisible by 4
const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => {
    return num % 4 === 0;
  });
};

// 2. Find the first word that is longer than 4 characters
const firstWordLongerThan4Char = (word) => {
  return words.find((word) => {
    return word.length > 4;
  });
  //
};

// For Each
// 1. console.log each value of the nums array multiplied by 3
const logValuesTimes3 = (nums) => {
  nums.forEach((num) => {
    console.log(`${num} * 3 =`, num * 3);
  });
};

// 2. console.log each word with an exclamation point at the end of it
const logWordsWithExclamation = (words) => {
  words.forEach((words) => {
    console.log(`${words}!`);
  });
};

// Map
//I: 0, 1, 2, 3, 4, 5  6
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
// 0, 4, 18, 48, 100, 180, 294, 448, 648, 900, 0
// [100, 200, 300,...]
// 0, 200, 600, 1200, 20000, 30000, 42000, 56000, 72000, 90000, 0
// 0, 100, 200, 300, 400, 500, 600, 

// 1. Make a new array of each number multiplied by their index number and 100
const arrayValuesTimes100TimesIndex = (nums) => {
  return nums.map((num, i) => {
    console.log("i", i)
    console.log("NUM", num)
    return i * num * 100;
  });
};
// const arrayValuesTimes100TimesIndex = (nums) => {
//   nums.map((num) => {
//     console.log("NUM", num * 100);
//     return num * 100;
//   });
// };

// 2. Make a new array of all the words in all uppercase
const arrayWordsUpcased = (words) => {
  return words.map((word) => {
    return word.toUpperCase();
  });
};

// Some
// 1. Find out if some numbers are divisible by 7
const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => {
    return num % 7 === 0;
  });
  //
};

//2. Find out if some words have the letter a in them
const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => {
    return word.includes("a");
  });
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
  arrayValuesTimes100TimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
