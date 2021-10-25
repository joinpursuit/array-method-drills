const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (number) => {
 return  number.every(num => {
    return num >=2
  })
};

isEveryNumGreaterThan2(nums)

const isEveryWordShorterThan7 = () => {
  return words.every(word => {
    return word.length < 7
  })
};
isEveryWordShorterThan7(words)
// Filter

const arrayLessThan5 = () => {
  return nums.filter(num =>{
    return num < 5
  })
};

const arrayOddLengthWords = () => {
  return words.filter(word => {
    return word.length % 2 === 1
  })
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find(num =>{
    return num % 4 === 0
  })
};

const firstWordLongerThan4Char = () => {
  return words.find(word => {
    return word.length > 4
  })
};

// For Each

const logValuesTimes3 = () => {
  return nums.forEach(num =>{
    num * 3
  })
};

const logWordsWithExclamation = () => {
  return words.forEach(word =>{
    word + '!'
  })
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  return nums.map((num, i)=> {
    return num * i * num
  })
};

const arrayWordsUpcased = () => {
  return words.map(word => {
    return word.toUpperCase()
  })
};

// Some

const areSomeNumsDivisibleBy7 = () => {
return nums.some(num => {
  return num % 7 === 0
})
};

const doSomeWordsHaveAnA = () => {
  return words.some(word => {
    return word.indexOf('a')
  })
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
