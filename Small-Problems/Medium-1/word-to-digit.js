/* eslint-disable max-lines-per-function */
/*
Write a function that takes a sentence string as an argument and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two',
'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
corresponding digit character.
*/

/*

P:

Input: A string
Output: A string

Accept string argument and return a string with any word that is a number
replaced with the digit character.


E:

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."


D:

Object
Array
String


A:

1. Declare constant variable 'NUMBERS' and initialize it to an object with the
keys consisting of 'zero' through 'nine' and the values consisting of 0 through
9.
2. Declare variable 'result' and initialize to empty array
3. Split string argument into an array.
4. Loop through array.
  - Check if current element word is a number. See if it exists as a key on the
  NUMBERS object.
    - If yes, replace the element with the corresponding value and add to
    'results'.
    - If no, add to 'results'.
5. Join results and return.


C:

*/

function wordToDigit(string) {
  const NUMBERS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let strArr = string.split(' ');
  let results = [];

  for (let index = 0; index < strArr.length; index += 1) {
    let current = strArr[index];
    let keys = Object.keys(NUMBERS);

    if (keys.includes(current)) {
      results.push(NUMBERS[current]);
    } else if (current[current.length - 1] === '.') {
      let word = current.slice(0, current.length - 1);
      if (keys.includes(word)) {
        results.push(`${NUMBERS[word]}.`);
      } else {
        results.push(current);
      }
    } else {
      results.push(current);
    }
  }

  return results.join(' ');
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
