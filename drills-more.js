const { nums, words } = require('./data/data.js');

//Sorting in descending order:
const descendingSort = (nums) => {
  return nums.sort((a, b) => b - a);
};
console.log('Descending from largest to smallest:', descendingSort(nums));

//Sorting in ascending order:
const ascendingSort = (nums) => {
  return nums.sort((a, b) => a - b);
};
console.log('Ascending from smallest to largest', ascendingSort(nums));

//Sorting in descending order:
const descendingWords = (words) => {
  return words.map((word) => word.toLowerCase()).sort((a, b) => b - a);
};
console.log(
  'Sorting by reverse alphabetical order (Z-A):',
  descendingWords(words)
);

//Sorting in ascending order:
const ascendingWords = (words) => {
  return words.map((word) => word.toLowerCase()).sort();
};
console.log('Sorting by alphabetical order (A-Z):', ascendingWords(words));

module.exports = {
  descendingSort,
  ascendingSort,
  descendingWords,
  ascendingSort,
};
