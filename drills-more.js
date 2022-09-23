const { nums, words } = require('./data/data.js');

const descendingSort = (nums) => {
  return nums.sort((a, b) => b - a);
};
console.log(
  'Descending from largest num to smallest num:',
  descendingSort(nums)
);

const ascendingSort = (nums) => {
  return nums.sort((a, b) => a - b);
};
console.log('Ascending from smallest num to largest num', ascendingSort(nums));

const descendingWords = (words) => {
  return words.sort((a, b) =>
    a.toLowerCase() === b.toLowerCase() ? 0 : a > b ? 1 : -1
  );
};
console.log('Sorting order:', descendingWords(words));

// const ascendingWords = (words) => {
//   return words.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? 1 : -1));
// };
// console.log(
//   'Ascending from shortest word to longest word:',
//   ascendingWords(words)
// );

module.exports = {
  descendingSort,
  ascendingSort,
  descendingWords,
  //ascendingSort,
};
