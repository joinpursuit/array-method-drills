const {nums, words} = require('./data/data.js');
const { logValuesTimes3 } = require( './solution' );

// Reduce
const reduceNums = (nums) => {
return nums.reduce( ( accumulator, currentValue ) =>
	{
		return accumulator + currentValue
	} );
};

const reduceWords = ( words ) =>
{
	return words.reduce( ( accumulator, currentValue ) =>
	{
		return accumulator + currentValue + " "
	})
};

console.log(reduceWords(words));