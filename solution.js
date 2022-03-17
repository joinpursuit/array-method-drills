const { nums, words } = require("./data/data.js");

// Every

const isEveryNumGreaterThan2 = (nums) => {
	return nums.every((e) => e >= 2);
};

const isEveryWordShorterThan7 = () => {
	return words.every((e) => e.length < 7);
};

console.log(isEveryWordShorterThan7(words));

// Filter
const arrayLessThan5 = (nums) => {
	return nums.filter((e) => e < 5);
};

const arrayOddLengthWords = () => {
	return words.filter((e) => e.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = (nums) => {
	return nums.find((e) => e % 2 === 0 && e !== 2);
};

const firstWordLongerThan4Char = (words) => {
	return words.find((e) => e.length > 4);
};

// For Each

const logValuesTimes3 = (nums) => {
	console.log(nums.forEach((e) => e * 3));
};

const logWordsWithExclamation = () => {
	console.log(words.forEach((e) => e.length - 1 === "!"));
};

// Map

const arrayValuesTimes100TimesIndex = (nums) => {
	return nums.map((e, i) => e * i * e);
};

const arrayWordsUpcased = () => {
	return words.map((e) => e.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = () => {
	return nums.some((e) => e % 2 === 1);
};

const doSomeWordsHaveAnA = () => {
	return words.some((e) => e.includes("a"));
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
