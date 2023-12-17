const { nums, words } = require("./data/data.js");
const products = [
  {
    name: "fairy lights",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
];
// Every
const isEveryNumGreaterThan2 = (input) => {
  // console.log(!nums.filter(num => num < 2).length > 0, nums)
  return input.every(num => num > 2)
};


const isEveryWordShorterThan7 = (input) => {
  return input.every(word => word.length < 7)
  };

// Filter

const arrayLessThan5 = (input) => {
  //
  return input.filter(num => num < 5)
};

const arrayOddLengthWords = (input) => {
  //
  return input.filter(word => word.length % 2 == 1)
};

// Find

const firstValDivisibleBy4 = (input) => {
  //
  return input.find(num => num % 4 == 0)
};

const firstWordLongerThan4Char = (input) => {
  //
  return input.find(word => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (input) => {
  return input.findIndex((num) => num % 3 == 0)
  //
};

const firstWordIndexLessThan2Char = (input) => {
  //
  return input.findIndex((word) => word.length < 2)
};

// For Each

const logValuesTimes3 = (input) => {
  //
  input.forEach(item => console.log(item))
};

const logWordsWithExclamation = (input) => {
  //
  input.forEach(item => item.includes('!')? console.log(item):null)
};

// Map

const arrayValuesSquaredTimesIndex = (input) => {
  //
  return input.map((value,index) => {
    return (value ** 2) * index})
};

const arrayWordsUpcased = (input) => {
  //
  return input.map((word) => {
    return word.toUpperCase()
  })
};

// Some

const areSomeNumsDivisibleBy7 = (input) => {
  //
  return input.some((num)=> {
    return num % 7 == 0
  })
};

const doSomeWordsHaveAnA = (input) => {
  //
  return input.some((word) => {
    return word.includes('a')
  })
};


const isPanagram = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return input.join('').includes(...alphabet)
}

const filterPrice = (input) => {
  return input.filter((item) => {
    return item.price < 10
  })
}


// 
isPanagram(words)
console.log(filterPrice(products))

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
