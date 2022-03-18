const {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstIndexDivisibleBy3,
  firstWordShorterThanOrEqualTo3Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesTimesSelfTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
} = require("../solution.js");

const { nums, words, products } = require("../data/data.js");

describe("Array Methods", () => {
  test("something something", () => {});

  test("Every number is greater than or equal to 2", () => {
    expect(/\.every/.test(isEveryNumGreaterThan2.toString())).toBe(true);
    expect(isEveryNumGreaterThan2(nums)).toBe(false);
  });

  test("Every word is shorter than 7 characters", () => {
    expect(/\.every/.test(isEveryWordShorterThan7().toString())).toBe(false);
    expect(isEveryWordShorterThan7(words)).toBe(true);
  });

  test("A new array with all values less than 5", () => {
    arrayLessThan5;
    expect(/\.filter/.test(arrayLessThan5.toString())).toBe(true);
    expect(arrayLessThan5(nums)).toStrictEqual([1, 2, 3, 4, 0]);
  });

  test("A new array with all words with odd lengths", () => {
    expect(/\.filter/.test(arrayOddLengthWords.toString())).toBe(true);
    expect(arrayOddLengthWords(words)).toStrictEqual([
      "The",
      "quick",
      "brown",
      "fox",
      "jumps",
      "the",
      "dog",
    ]);
  });

  test("Find first value that is divisible by 4", () => {
    expect(/\.find/.test(firstValDivisibleBy4.toString())).toBe(true);
    expect(firstValDivisibleBy4(nums)).toBe(4);
  });
  test("Find first word longer than 4 characters", () => {
    expect(/\.find/.test(firstWordLongerThan4Char.toString())).toBe(true);
    expect(firstWordLongerThan4Char(words)).toBe("quick");
  });

  test("find the index of the first number that is divisible by 3", () => {
    expect(/\.indexOf/.test(firstIndexDivisibleBy3.toString())).toBe(true);
    expect(firstIndexDivisibleBy3(nums)).toBe(2);
  });
  test("find the index of the first word that is less than or equal to 3 characters long", () => {
    expect(/\.indexOf/.test(firstWordShorterThanOrEqualTo3Char.toString())).toBe(true);
    expect(firstWordShorterThanOrEqualTo3Char(words)).toBe(0);
  });

  test("Console log the values times 3", () => {
    expect(/\.forEach/.test(logValuesTimes3.toString(nums))).toBe(true);
    expect(logValuesTimes3(nums)).toBe(undefined);
  });

  test("Console log each word with an exclamation point", () => {
    expect(/\.forEach/.test(logWordsWithExclamation.toString(words))).toBe(
      true
    );
    expect(logWordsWithExclamation(words)).toBe(undefined);
  });

  test("A new array of values that are multiplied by itself and its index.", () => {
    expect(/\.map/.test(arrayValuesTimesSelfTimesIndex.toString())).toBe(true);
    expect(arrayValuesTimesSelfTimesIndex(nums)).toStrictEqual([
      0, 4, 18, 48, 100, 180, 294, 448, 648, 900, 0,
    ]);
  });

  test("A new array of words that are all uppercase", () => {
    expect(/\.map/.test(arrayWordsUpcased.toString())).toBe(true);
    expect(arrayWordsUpcased(words)).toStrictEqual([
      "THE",
      "QUICK",
      "BROWN",
      "FOX",
      "JUMPS",
      "OVER",
      "THE",
      "LAZY",
      "DOG",
    ]);
  });

  test("Are some numbers divisible  by 7?", () => {
    expect(/\.some/.test(areSomeNumsDivisibleBy7.toString())).toBe(true);
    expect(areSomeNumsDivisibleBy7(nums)).toBe(true);
  });
  test("Do some words have an a?", () => {
    expect(/\.some/.test(doSomeWordsHaveAnA.toString())).toBe(true);
    expect(doSomeWordsHaveAnA(words)).toBe(true);
  });
});
