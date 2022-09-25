const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// WHILE 
// let i = 0;
// while (i < nums.length) {
//   console.log(nums[i]);
//   i++;
// }

// FOR LOOP
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i])
// }

// FOR... OF
// for (let num of nums) {
//   console.log(num)
// }

// .forEach
// nums.forEach((num, i) => console.log("element:", num, "index: ", i))
    // More than ONE PARAMETER needs to be wrapped in parenthesis
// nums.forEach(num => console.log(num))

// .MAP


const words = [
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


// Finding Indexes in an Array (Case-Sensitive; Only EXACT Matches)

const findTheIndex = (shaolinArray, target) => {
  if (shaolinArray.length < 1) return -1;
  for (let i = 0; i < shaolinArray.length; i++) {
    if (shaolinArray[i] === target) {
      return i;
    }
  }
  return -1;
}

Array.prototype.spencerFoundIndex = function (targetValue){
  for (let i = 0; i < this.length; i++){
    if (this[i] === targetValue){
      return i;
    }
  } return -1;
}


module.exports = {
  nums,
  words,
  products,
};
