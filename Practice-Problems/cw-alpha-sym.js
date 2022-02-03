/* eslint-disable max-lines-per-function */
/*

Alphabet Symmetry

Given an array of words, return an array of the number of letters that occupy
their positions in the alphabet for each word.


PROBLEM:
=================

Input: An array
Output: An array

Explicit Requirements:
- Input will consist of alphabetic characters, both upper and lower, no spaces
- Count one time if a letter appears in a string in the same position as it does
  in the alphabet, regardless of it being upper or lower
  - ex: 'aboDE' ==> a is 1, b is 2, D is 4, E is 5
- The return value is an array with the count for the word in the same element
  spot as the original word in the array argument


EXAMPLES:
=================

solve(["abode","ABc","xyzD"]) = [4, 3, 1]


DATA STRUCTURES/ALGORITHM:
=================

Array of Strings ==> Array as a key ==> Array of Numbers


- START array
- DECLARE 'key' and initialize to letters in the appropriate element
- DECLARE 'result' and initialize to empty array
- ITERATE through array argument
  - ADD 0 to 'result'
  - ITERATE through the current word
    - For each letter:
      -EVALUATE if letter is at same place as it is in 'key'
        - If true, incremenet element at outer index in 'result' by 1
- RETURN 'result'

*/

function solve(array) {
  let key = [
    'aA',
    'bB',
    'cC',
    'dD',
    'eE',
    'fF',
    'gG',
    'hH',
    'iI',
    'jJ',
    'kK',
    'lL',
    'mM',
    'nN',
    'oO',
    'pP',
    'qQ',
    'rR',
    'sS',
    'tT',
    'uU',
    'vV',
    'wW',
    'xX',
    'yY',
    'zZ',
  ];
  let result = [];

  for (let outerIdx = 0; outerIdx < array.length; outerIdx += 1) {
    result.push(0);
    let currentWord = array[outerIdx];

    for (let innerIdx = 0; innerIdx < currentWord.length; innerIdx += 1) {
      let currentLetter = currentWord[innerIdx];

      if (key[innerIdx].includes(currentLetter)) {
        result[outerIdx] += 1;
      }
    }
  }

  return result;
}

console.log(solve(['abode', 'ABc', 'xyzD']));
