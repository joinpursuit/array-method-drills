const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((eachElement) => eachElement > 2);
};

const isEveryWordShorterThan7 = (Words) => {
  return words.every((eachElement) => eachElement.length < 7);
};

// Filter
const arrayLessThan5 = (nums) => {
  return nums.filter((eachElement) => eachElement < 5);
  //
};

const arrayOddLengthWords = (words) => {
  return words.filter((eachElement) => eachElement.length % 2 === 1);
  //
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((eachElement) => eachElement % 4 === 0);
  //
};

const firstWordLongerThan4Char = (words) => {
  return words.find((eachElement) => eachElement.length > 4);
};

// For Each
const logValuesTimes3 = (nums) => {
  return nums.forEach((eachElement) => console.log(eachElement * 3));
  //
};

const logWordsWithExclamation = (words) => {
  return words.forEach((eachElement) => eachElement.includes("!"));
  //
};

// Map

const arrayValuesTimes100TimesIndex = (nums) => {
  return nums.map((eachElement, index) => eachElement * index * eachElement);
  //
};

const arrayWordsUpcased = (words) => {
  return words.map((eachElement) => eachElement.toUpperCase());
  //
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((eachElement) => eachElement % 7 === 0);
  //
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((eachElement) => eachElement.includes("a"));
  //
};

//Reduce
const addAllTheNumbers = (nums) => {
  return nums.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

const concatAllTheWords = (words) => {
  return words.reduce((previousValue, currentValue) =>
    previousValue.concat(currentValue)
  );
};

//sort no arguments
//sorted in ascending order
const sortTheNumbersArray1 = (nums) => {
  return nums.sort();
};

//sorts alphabetically but the capital The is first in binary
const sortTheWordsArray1 = (words) => {
  return words.sort();
};

//sort numbers array in ascending order
const sortTheNumbersArray2 = (nums) => {
  return nums.sort((a, b) => a - b);
};

//sort numbers array in descending order
const sortTheNumbersArray3 = (nums) => {
  return nums.sort((a, b) => b - a);
};
//sort the words array alphabetically correctly, putting the The in right place
//increasing alphabetically
const sortTheWordsArray2 = (words) => {
  return words.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase) {
      return 1;
    }
  });
};

//decreasing alphabetically
const sortTheWordsArray3 = (words) => {
  return words.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return 1;
    }
    if (a.toLowerCase() > b.toLowerCase) {
      return -1;
    }
  });
};

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

const verifyLetterInclusion = (words) => {
  //turn all separate index into one value by using reduce or join
  //split it so each character is individualized
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let verifyingString = [];
  let splitWords = words.join("").toLowerCase().split("");
  for (const eachLetter of splitWords) {
    if (!verifyingString.includes(eachLetter)) {
      verifyingString.push(eachLetter);
    }
  }
  return alphabet === verifyingString.sort().join("");
  //
};

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

const priceLessThan10 = (products) => {
  return products.filter((eachProduct) => eachProduct.price < 10.0);
};

const sortByProductName = (products) => {
  return products.sort((productA, productB) => {
    if (productA.name > productB.name) {
      return 1;
    }
    if (productA.name < productB.name) {
      return -1;
    }
  });
};

console.log(sortByProductName(products));

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
