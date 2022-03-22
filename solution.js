const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (array) => {
    //
    return array.every((item) => {
        return item >= 2;
    });
};

const isEveryWordShorterThan7 = (array) => {
    //
    if (!array) {
        return true;
    }
    return array.every((item) => {
        return item.length < 7;
    });
};

// Filter

const arrayLessThan5 = (array) => {
    //
    return array.filter((item) => {
        return item < 5;
    });
};

const arrayOddLengthWords = (array) => {
    //
    if (!array) {
        return true;
    }
    return array.filter((item) => {
        return item.length % 2 === 1;
    });
};

// Find

const firstValDivisibleBy4 = (array) => {
    //
    return array.find((item, index) => {
        if (item % 4 === 0) {
            return index;
        }
    });
};

const firstWordLongerThan4Char = (array) => {
    //
    return array.find((item, index) => {
        if (item.length > 4) {
            return index;
        }
    });
};

// For Each

const logValuesTimes3 = (array) => {
    //
    array.forEach((item) => {
        console.log(item * 3);
    });
};

const logWordsWithExclamation = (array) => {
    //
    array.forEach((item) => {
        console.log(item + "!");
    });
};

// Map

const arrayValuesTimes100TimesIndex = (array) => {
    //
    return array.map((item, index) => {
        return item * item * index;
    });
};

const arrayWordsUpcased = (array) => {
    //
    return array.map((item) => {
        return item.toUpperCase();
    });
};

// Some

const areSomeNumsDivisibleBy7 = (array) => {
    //
    return array.some((item) => {
        return item % 7 === 0;
    });
};

const doSomeWordsHaveAnA = (array) => {
    //
    return array.some((item) => {
        return item.includes("a");
    });
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
