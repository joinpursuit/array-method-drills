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
	function oddWordLength(word) {
		return word.length % 2 === 1;
	}

	const result = words.filter((word) => oddWordLength(word));
	return result;
};
//Find

const firstValDivisibleBy4 = (nums) => {
	function divisibleBy4(num) {
			return num % 4 === 0  
	}

	
	
	const result = nums.find( ( num ) => divisibleBy4( num ) );
	
	return result;
};

const firstWordLongerThan4Char = (words) =>
	words.find((word) => {
		const wordLongerThan4 = word.length > 4;
		if (wordLongerThan4) {
			return word;
		}

		return wordLongerThan4;
	});

//Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
	function divisibleBy3 (num) {
		return num % 3 === 0
	}
	const result = nums.findIndex( ( num ) => divisibleBy3( num ) );
	
	return result;
};

const firstWordIndexLessThan2Char = (words) =>
	words.findIndex((word) => {
		const length = word.length;
		const less2CharWord = length < 2;
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
		return Math.pow(num, 2) * [i];
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

const doSomeWordsHaveAnA = (words) =>
	words.some((word) => {
		return word.includes("a");
	});

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
