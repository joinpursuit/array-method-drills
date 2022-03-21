const { nums, words } = require("./data/data.js");

console.log(words);
// Every
const isEveryNumGreaterThan2 = (number) => {
  let greater = number.find((n) => n >= 2);
  return greater;
};
//

isEveryNumGreaterThan2(nums);

const isEveryWordShorterThan7 = (array) => {
  let filtered = array.filter((a) => a.length > 7);
  console.log(array);
  return filtered;
};

isEveryWordShorterThan7(words);

// isEveryWordShorterThan7(words);
//
// console.log(words.every(isEveryWordShorterThan7));

// Filter

const arrayLessThan5 = (array) => {
  let lessThan5 = array.filter((arr) => arr < 5);
  return lessThan5;
  //
};

arrayLessThan5(words);

const arrayOddLengthWords = (letters) => {
  let oddWords = letters.filter((letter) => letter.length % 2);
  return oddWords;
  //
};

// Find

const firstValDivisibleBy4 = (value) => {
  let firstVal = value.find((val) => val % 4 === 0);
  return firstVal;
  //
};

const firstWordLongerThan4Char = (character) => {
  let longChar = character.find((char) => char.length > 4);
  return longChar;
  //
};

// For Each

const logValuesTimes3 = (digits) => {
  let arr = digits.forEach((digs) => digs * 3);
  return arr;
  //
};

const logWordsWithExclamation = (words) => {
  return words.forEach((word) => word + "!");
  //
};

// Map

const arrayValuesTimes100TimesIndex = (values) => {
  //
  console.log(
    values.map((value) => {
      value * 3;
    })
  );
};

console.log(arrayValuesTimes100TimesIndex(nums));

const arrayWordsUpcased = (char) => {
  return char.map((c) => c.toUpperCase());
  //
};

// Some

const areSomeNumsDivisibleBy7 = (numbers) => {
  return numbers.some((num) => num % 7);
  //
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => word.includes("a"));
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
