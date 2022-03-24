const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  let greatThan = nums.every((el, ind)=>{
   return el > 2
 })
return greatThan
}


const isEveryWordShorterThan7 = () => {
 let shortWord = words.every((el, ind)=>{
  return el.length < 7 
})
return shortWord
};

// Filter

const arrayLessThan5 = () => {
 let lessThan = nums.filter((element)=>{
  return element < 5
  })
  return lessThan
};

const arrayOddLengthWords = () => {
  let odd = words.filter((el)=>{
    return el.length % 2 === 1
  })
  return odd
};

// Find

const firstValDivisibleBy4 = () => {
  let val = nums.find((el)=>{
    return el >= 4
  })
  return val
};

const firstWordLongerThan4Char = () => {
  let four= words.find((el)=>{
   return el.length > 4
 })
 return four
}

// For Each

const logValuesTimes3 = () => {
 let logIn =  nums.forEach((el)=>{
   return el * 3
  })
  return logIn
};

const logWordsWithExclamation = () => {
  // let newArr = []
  let exc = words.forEach((el)=>{
    return el += "!"
    // return newArr.push(el += "!")
  })
  return exc
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  let newNum = nums.map((el,i )=>{
    return el * el * i
  })
   return newNum
};

const arrayWordsUpcased = () => {
  let newW = words.map((el)=>{
    return el.toUpperCase()
  })
  return newW
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  let bySev = nums.some((el)=>{
    return el /7
  })
  return bySev
};

const doSomeWordsHaveAnA = () => {
  let word = words.some((el)=>{
    return el === "a"
  })
  return word

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
