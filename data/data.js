const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// nums.every(isEveryNumGreaterThan2())
const isEveryNumGreaterThan2 = (number) =>{
  return number >= 2
}

nums.every(isEveryNumGreaterThan2);


function arrayLessThan5(){
  nums.filter(num =>{
    return num < 5
  })
}

console.log(arrayLessThan5(nums))



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

module.exports = {
  nums,
  words,
};
