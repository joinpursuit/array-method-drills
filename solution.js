const { nums, words } = require("./data/data.js");

//Every
const isEveryNumGreaterThan2 = (nums) =>
	nums.every((num) => {
		return num >= 2;
	});

const isEveryWordShorterThan7 = (words) =>
	words.every((word) => {
		return word.length < 7;
	});

//Filter

const arrayLessThan5 = (nums) =>
	nums.filter((num) => {
		return num < 5;
	});

const arrayOddLengthWords = (words) => {
	for (const words of words) {
		console.log(word.length);
	}
	const oddLength = wordLength % 2 === 1;
	words.filter((word) => {
		return wordLength === oddLength;
	});
};

//Find

const firstValDivisibleBy4 = (nums) =>
	nums.find((num) => {
		const divisibleBy4 = (num) => {
			if (num / 4) {
				return num;
			}
			return divisibleBy4;
		};
		return divisibleBy4;
	});

const firstWordLongerThan4Char = (words) =>
	words.find((word) => {
		const wordLongerThan4 = (word) => {
			if (word.length > 4) {
				return word;
			}
		};
		return wordLongerThan4;
	});

//Find Index

const firstNumIndexDivisibleBy3 = (nums) =>
	nums.findIndex((num) => {
		const divisibleBy3 = num / 3;
		return divisibleBy3;
	});

const firstWordIndexLessThan2Char = (words) =>
	words.findIndex( ( word ) =>
	{
		const length = word.length;
		const less2CharWord = word.length < 2;
		return less2CharWord;
	});

//For Each

const logValuesTimes3 = (nums) =>
	nums.forEach((num) => {
		const times3 = num * 3;
		return console.log(times3);
	});

const logWordsWithExclamation = (words) =>
	words.forEach((word) => {
		const exclamationWord = word + "!";
		return exclamationWord;
	});

//Map

const arrayValuesSquaredTimesIndex = (nums) =>
	nums.map((num, i) => {
		const numIndex = nums[i];
		const squaredNum = Math.pow(num, 3);
		const result = squaredNum * numIndex;
		return result;
	});

const arrayWordsUpcased = (words) =>
	words.map((word) => {
		return word.toUpperCase();
	});

//Some

const areSomeNumsDivisibleBy7 = (nums) =>
	nums.some((num) => {
		return num / 7;
	});

const doSomeWordsHaveAnA = (words) => words.some((word) => {});

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
