const { nums, words, products } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every(num => num > 2);
};

const isEveryWordShorterThan7 = () => {
  return words.every(word => word.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter(num => num < 5);
};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length%2 !== 0);
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find(num => num%4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find(word => word.length > 4);
};

// For Each

const logValuesTimes3 = () => {
  return nums.forEach(num => console.log(num * 3));
};

const logWordsWithExclamation = () => {
  return words.forEach(word => console.log(word.includes("!")));
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  return nums.map((num, i) => (num**2) * i)
};

const arrayWordsUpcased = () => {
  return words.map(word => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some(num => num%7 === 0)
};

const doSomeWordsHaveAnA = () => {
  return words.some(word => word.includes("a"));
};


// Reduce
const sumAllNums = () => {
  return nums.reduce((total, amount) => total + amount);
};

const concatAllWords = () => {
  return words.reduce((concat, word) => concat + word);
};

console.log(sumAllNums(nums));
console.log(concatAllWords(words));


// Sort
const sortNumAscending = () => {
  return nums.sort((a, b) => a - b);
};

const sortNumDescending = () => {
  return nums.sort((a, b) => b - a);
};

console.log(sortNumAscending(nums));
console.log(sortNumDescending(nums));

const sortWordsAscending = () => {
  return words.map(word => word.toLowerCase()).sort();
}

const sortWordsDescending = () => {
  return words.map(word => word.toLowerCase()).sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  });
};

console.log(sortWordsAscending(words));
console.log(sortWordsDescending(words));


// Array Methods Challenge Problems

function isPanagram(sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letters = sentence.join("").split("");

  for(let i=0; i<alphabet.length; i++){
    if(!letters.includes(alphabet[i])){
      return false;
    }
  }
  return true;
};

console.log(isPanagram(words));

// Working with data

function productsFilteredLessThan10(products){
  return products.filter(product => product.price < 10);
};

console.log(productsFilteredLessThan10(products));

function sortProductsByName() {
  return products.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
};

console.log(sortProductsByName(products))

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
