const { nums, words } = require('./data/data.js');

// Every
const isEveryNumGreaterThan2 = (nums) => {
	return nums.every((num) => num >= 2);
};

const isEveryWordShorterThan7 = (words) => {
	return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
	return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = (words) => {
	return words.filter((word) => word.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = (nums) => {
	return nums.find((num) => {
		if (num % 4 === 0) return num;
	});
};

const firstWordLongerThan4Char = (words) => {
	return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
	return nums.findIndex((num) => num % 3 === 0);
};

const firstWordIndexLessThan2Char = (words) => {
	return words.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = (nums) => {
	return nums.forEach((num) => console.log(num * 3));
};

const logWordsWithExclamation = (words) => {
	return words.forEach((word) => console.log(`${word}!`));
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
	return nums.map((num, i) => num ** 2 * i);
};

const arrayWordsUpcased = (words) => {
	return words.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
	return nums.some((num) => num % 7 === 0);
};

const doSomeWordsHaveAnA = (words) => {
	return words.some((word) => word.includes('a'));
};

// Hungry for More -

// Reduce
const sumAllNums = (nums) => nums.reduce((sum, num) => sum + num, 0);

const concatAllWords = (words) =>
	words.reduce((concatWord, word) => concatWord + word, '');

// Sort

// `numbers` without arguments - I knew that I would get a lexicographical sort.
const sortNumsNoArgs = (nums) => nums.sort();

// `words` without arguments -
const sortWordsNoArgs = (words) => words.sort();

// `numbers` in ascending order
const sortNumsAscending = (nums) => nums.sort((a, b) => a - b);

// `numbers` in descending order
const sortNumsDescending = (nums) => nums.sort((a, b) => b - a);

// `words` in ascending order
const sortWordsAscending = (words) => {
	return words.sort((a, b) => {
		if (a > b) {
			return 1;
		} else if (a < b) {
			return -1;
		} else {
			return 0;
		}
	});
};

// `words` in descending order
const sortWordsDescending = (words) => {
	return words.sort((a, b) => {
		if (a > b) {
			return -1;
		} else if (a < b) {
			return 1;
		} else {
			return 0;
		}
	});
};

// Array Methods Challenge Problems -

// isPanagram

const isPanagram = (panagram) => {
	if (!panagram || panagram.length < 1 || Array.isArray(panagram) === false)
		return 'Please enter a valid array with at least one string!';

	const charCounter = (words) => {
		const chars = words.join('').toLowerCase();
		const charCount = {};

		for (let char of chars) {
			char = char.replace(/[^a-z]/gi, '');
			charCount[char] = (charCount[char] || 0) + 1;
		}

		return charCount;
	};

	const isEachCharAtLeastOnce = (charObj) => {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
		const chars = Object.keys(charObj);

		for (let letter of alphabet) {
			if (!chars.includes(letter)) {
				return false;
			}
		}
		return true;
	};

	return isEachCharAtLeastOnce(charCounter(panagram));
};

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
