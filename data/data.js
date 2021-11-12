const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

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

function array() {
  for (let i = 0; i < words.length; i ++){
    console.log(words)
    if (words[i]) {
      console.log(words[i])
      return i
      console.log(words[i])
  }
  }
}
console.log(array(words))
module.exports = {
  nums,
  words,
};
