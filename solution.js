const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (array) => {
	return array.every((each) => {
		return each > 2;
	});
	//
};

const isEveryWordShorterThan7 = (array) => {
	return array.every((each) => {
		return each.length < 7;
	});
	//
};

// Filter

const arrayLessThan5 = (array) => {
	return array.filter((each) => {
		return each < 5;
	});
	//
};

const arrayOddLengthWords = (array) => {
	return array.filter((each) => {
		return each.length % 2;
	});
	//
};

// Find

const firstValDivisibleBy4 = (array) => {
	return array.find((each) => {
		return each % 4 === 0;
	});
	//
};

const firstWordLongerThan4Char = (array) => {
	return array.find((each) => each.length > 4);
	//
};

// Find Index

const firstNumIndexDivisibleBy3 = (array) => {
	return array.findIndex((each) => each % 3 === 0);
	//
};

const firstWordIndexLessThan2Char = (array) => {
	//
	return array.findIndex((each) => each.length < 2);
};

// For Each

const logValuesTimes3 = (array) => {
	//
	array.forEach((each) => {
		console.log(each * 3);
	});
};

const logWordsWithExclamation = (array) => {
	//
	array.forEach((each) => {
		console.log(`${each}!`);
	});
};

// Map

const arrayValuesSquaredTimesIndex = (array) => {
	//
	return array.map((each, index) => {
		return each ** 2 * index;
	});
};

const arrayWordsUpcased = (array) => {
	//
	return array.map((each, index) => {
		return each.toUpperCase();
	});
};

// Some

const areSomeNumsDivisibleBy7 = (array) => {
	//
	return array.some((each) => each % 7 === 0);
};

const doSomeWordsHaveAnA = (array) => {
	//
	return array.some((each) => each.includes("a"));
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
