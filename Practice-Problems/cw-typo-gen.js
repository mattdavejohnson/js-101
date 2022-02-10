/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/*
Typoglycemia Generator

return a string where:

- the first and last characters remain in original place for each word
- characters between the first and last characters must be sorted
  alphabetically
- punctuation should remain at the same place as it started,
  for example: shan't -> sahn't


PROBLEM:
==============

Input: A string
Output: A string

Explicit Requirements:
- For each word, the first and last characters remain in their original
  place.
- Characters between the first and last characters must be sorted
  alphabetically
- Punctuation should remain at the same place as it started
- Word are seperated by single spaces
- Only spaces separate words, special characters do not
  ex: tik-tak -> tai-ktk
- Special characters do not take the position of non special characters
  ex: -dcba -> -dbca
- Punctuation is limited to 4 characters: (-) (') (,) (.)
- Ignore capitalisation
- If string is 1, 2, or 3 letters long, do not change
- If string has punctuation in it, leave punctuation in same spot and
  sort the rest of the word around it
  ex: you'll -> ylo'ul


EXAMPLES:
==============

tik-tak -> tai-ktk

-dcba -> -dbca

'professionals' -> 'paefilnoorsss'


DATA STRUCTURES/ALGORITHM:
==============

String ==> Array ==> String

Cases to handle

- Words w/o punc that are 3 or less length
- Words start/end w/ punc that are 3 or less length
- Words w/o punc
- Words start/end w/ punc
- Words w/ punc in middle that are 4 or less length (no change)
- Words w/ punc in the middle (first and last same, middle alpha with
  punc in same place)
- Words with more than one punc


Main program

- START string
- DECLARE 'stringArray' and initialize to string split into words
- DECLARE 'result' and initialize to 'stringArray' transformed by
  calling each element passed into scrambleWord
- RETURN 'result' joined


Scramble a word

- START string
- DECLARE 'punctuation' and initialize to array of possible punctuation
  symbols
- EVALUATE if string contains any punctuation
  - If true:
    - If string begins with punctuation
      - RETURN function call to startWithPunc with string passed in
    - If string ends with punctuation
      - If string has punctuation also in the middle
        - RETURN function call to moreThanOnePunc with string passed in
      - RETURN function call to endWithPunc with string passed in
    - If string length is 4 or less
      - RETURN string
    - If string length more than 4
      - RETURN function call to middlePunc with string passed in
- EVALUATE if string is length 3 or less
  - If true, return string
- DECLARE 'firstLetter' and initialize to the first letter of string argument
- DECLARE 'lastLetter' and initialize to the last letter of string argument
- DECLARE 'middle' and initialize to slice of string argument from second
  letter to second to last letter, split into an array
- REASSIGN 'middle' to SORT 'middle' alphabetically and join
- RETURN 'firstLetter' + 'middle' + 'lastLetter'


Starts with punctuation

- START string
- DECLARE 'frontPunc' and initialize to first char in string arg
- DECLARE 'firstLetter' and initialize to second char in string arg
- DECLARE 'lastLetter' and initialize to last char in string arg
- DECLARE 'middle' and initialize to slice of string argument from third
  letter to second to last letter, split into an array
- REASSIGN 'middle' to SORT 'middle' alphabetically and join
- RETURN 'frontPunc' + 'firstLetter' + 'middle' + 'lastLetter'


Ends with punctuation

- START string
- DECLARE 'endPunc' and initialize to last char in string arg
- DECLARE 'firstLetter' and initialize to first char in string arg
- DECLARE 'lastLetter' and initialize to second to last char in string arg
- DECLARE 'middle' and initialize to slice of string argument from second
  letter to third to last letter, split into an array
- REASSIGN 'middle' to SORT 'middle' alphabetically and join
- RETURN 'firstLetter' + 'middle' + 'lastLetter' + 'endPunc'


Punctuation in the middle

- START string
- DECLARE 'firstLetter' and initialize to first letter in string arg
- DECLARE 'lastLetter' and initialize to last letter in string arg
- DECLARE 'middle' and initialize to slice of string argument from second
  letter to second to last letter, split into an array
- Determine which punctuation mark is in 'middle'
- DECLARE 'puncIndex' and initialize to the index of the punc mark
- DECLARE 'puncMark' and initialize to the punc mark removed from 'middle'
- SORT 'middle' alphabetically
- ASSIGN 'middle' at 'puncIndex' to 'puncMark'
- REASSIGN 'middle' to 'middle' joined
- RETURN 'firstLetter' + 'middle' + 'lastLetter'


More than one punctuation

lock-in, => lcik-on,
supra-chiasmatic. => saaac-hiimprstuc.
burn-out. => bnor-uut.
jiggery-pokery. => jeeggik-oprryy.
won't, => 'wno\'t,

- START string
- DECLARE 'endingPunc' and initialize to last character of string arg
- DECLARE 'wordNoEnding' and initialize to slice of string arg from 0
  to second to last character
- DECLARE 'scramWord' and initialize to 'wordNoEnding' passed to puncInMiddle
- RETURN 'scramWord' + 'endingPunc'

*/

// Main program
function scrambleWords(string) {
  let stringArray = string.split(' ');
  let result = stringArray.map((word) => scrambleWord(word));

  return result.join(' ');
}

// Handles individual words
function scrambleWord(string) {
  let punctuation = ['-', '.', ',', "'"];
  let chars = string.split('');
  let charsWithoutEnding = string.slice(0, string.length - 1).split('');

  if (chars.some((el) => punctuation.includes(el))) {
    if (string.length <= 4) {
      return string;
    } else if (punctuation.includes(string[0])) {
      return startWithPunc(string);
    } else if (punctuation.includes(string[string.length - 1])) {
      if (charsWithoutEnding.some((el) => punctuation.includes(el))) {
        return moreThanOnePunc(string);
      }
      return endWithPunc(string);
    } else {
      return puncInMiddle(string);
    }
  }

  if (string.length <= 3) {
    return string;
  }

  let firstLetter = string[0];
  let lastLetter = string[string.length - 1];
  let middle = string.slice(1, string.length - 1).split('');

  middle = middle.sort().join('');

  return firstLetter + middle + lastLetter;
}

// Handles words that start with punctuation
function startWithPunc(string) {
  let frontPunc = string[0];
  let firstLetter = string[1];
  let lastLetter = string[string.length - 1];
  let middle = string.slice(2, string.length - 1).split('');

  middle = middle.sort().join('');

  return frontPunc + firstLetter + middle + lastLetter;
}

// Handles words that end with punctuation
function endWithPunc(string) {
  let endPunc = string[string.length - 1];
  let firstLetter = string[0];
  let lastLetter = string[string.length - 2];
  let middle = string.slice(1, string.length - 2).split('');

  middle = middle.sort().join('');

  return firstLetter + middle + lastLetter + endPunc;
}

// Handles words with punctuation in the middle
function puncInMiddle(string) {
  let firstLetter = string[0];
  let lastLetter = string[string.length - 1];
  let middle = string.slice(1, string.length - 1).split('');
  let punctuation = ['-', '.', ',', "'"].map((punc) => middle.indexOf(punc));
  let puncIndex = punctuation.filter((num) => num > 0)[0];
  let puncMark = middle.splice(puncIndex, 1)[0];

  middle.sort();
  middle.splice(puncIndex, 0, puncMark);
  middle = middle.join('');

  return firstLetter + middle + lastLetter;
}

// Handles words with more than one punctuation
function moreThanOnePunc(string) {
  let endingPunc = string[string.length - 1];
  let wordNoEnding = string.slice(0, string.length - 1);
  let scramWord = puncInMiddle(wordNoEnding);

  return scramWord + endingPunc;
}

console.log(scrambleWord('dance'));
console.log(scrambleWord('dance.'));
console.log(scrambleWord('hey'));
console.log(scrambleWord('professionals'));
console.log(scrambleWord('-dcba'));
console.log(scrambleWord('dcba.'));
console.log(scrambleWord('.hey'));
console.log(scrambleWord('hey-'));
console.log(scrambleWord("it's"));
console.log(scrambleWord('lock-in,'));
console.log(scrambleWord('a'));
console.log(scrambleWords('lock-in,'));

// "it's no zig-zag lateritious she's a, dice"
// 'it\'s no zag-izg laeiiorttus seh\'s a, dcie'
