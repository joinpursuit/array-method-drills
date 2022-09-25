const { nums, words, products } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((number) => number >= 2);
};

const isEveryWordShorterThan7 = () => {
  return words.every((word) => word.length < 7);
};

// Filter
const arrayLessThan5 = () => {
  return nums.filter((number) => number < 5);
};

const arrayOddLengthWords = () => {
  return words.filter((word) => word.length % 2 !== 0);
};

// Find
const firstValDivisibleBy4 = () => {
  return nums.find((number) => number % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find((word) => word.length > 4);
};

// Find Index
const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((number) => number / 3 === 1);
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((word) => word.length < 2);
};

// For Each
const logValuesTimes3 = () => {
  return nums.forEach((number) => {
    console.log(number * 3);
  });
};

// The original array is untouched/the same - forEach method does not mutate the array, ONLY reiterates over it

// You can store the values from a 'forEach' method in a new array: Declare a new array outside the loop (newArray = array(), and use newArray[] = __ to add items to the array.

const logWordsWithExclamation = () => {
  return words.forEach((word) => {
    console.log(`${word}!`);
  });
};

// Map
const arrayValuesSquaredTimesIndex = () => {
  return nums.map((number) => number * number * nums.indexOf(number));
};

const arrayWordsUpcased = () => {
  return words.map((word) => word.toUpperCase());
};

// The original array remains unchanged.

// .map is a non-mutating method that creates a new array. 

// Some
const areSomeNumsDivisibleBy7 = () => {
  return nums.some((number) => number % 7 === 0);
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => word.includes("a"));
};


// // HUNGRY FOR MORE:

// // Reduce
// const sumAllNums = () => {
//   return nums.reduce((total, amount) => total + amount);
// };

// const concatAllWords = () => {
//   return words.reduce((concat, word) => concat + word);
// };

// console.log(sumAllNums(nums));
// console.log(concatAllWords(words));

// .reduce does not change/modify/mutate the original array.


// // Sort
// const sortNumAscending = () => {
//   return nums.sort((a, b) => a - b);
// };

// const sortNumDescending = () => {
//   return nums.sort((a, b) => b - a);
// };

// console.log(sortNumAscending(nums));
// console.log(sortNumDescending(nums));

// sorting the numbers array without any arguments will sort the numbers via the indices - the array will show [10, 104, 11, 114, 15]
// the numbers array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

// sorting the words array without any arguments will result in the array being sorted lexicographically/alphabetically/in dictionary order.
// Use the spread syntax (...) to unpack the values of the array into a new array before calling the sort method - otherwise, the original array will be mutated


// const sortWordsAscending = () => {
//   return words.map((word) => word.toLowerCase()).sort();
// };

// const sortWordsDescending = () => {
//   return words
//     .map((word) => word.toLowerCase())
//     .sort((a, b) => {
//       if (a > b) {
//         return -1;
//       }
//       if (b > a) {
//         return 1;
//       }
//       return 0;
//     });
// };

// console.log(sortWordsAscending(words));
// console.log(sortWordsDescending(words));

// // Array Methods Challenge Problems:

// //isPanagram

// function isPanagram(sentence) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let letters = sentence.join("").split("");

//   for (let i = 0; i < alphabet.length; i++) {
//     if (!letters.includes(alphabet[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPanagram(words));

// // Working with data

// function productsFilteredLessThan10(products) {
//   return products.filter((product) => product.price < 10);
// }

// console.log(productsFilteredLessThan10(products));

// function sortProductsByName() {
//   return products.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (b.name > a.name) {
//       return -1;
//     }
//     return 0;
//   });
// }

// console.log(sortProductsByName(products));


module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
