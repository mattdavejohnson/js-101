/*

In this kata, you've to count lowercase letters in a given string and return
the letter count in a hash with 'letter' as key and count as 'value'.

PROBLEM:
===================

Input: A string
Output: An object

Explicit Requirements:
- Input string will be one word and all lowercase letters
- Count each occurrance of each letter in the string and save that number in
  an object
  - The key is the letter and the value is the number of times it occurred


EXAMPLES:
===================

letterCount("codewars")
{"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1}

letterCount("activity")
{"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1}

letterCount("arithmetics")
{"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

letterCount("traveller")
{"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1}

letterCount("daydreamer")
{"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1}


DATA STRUCTURES/ALGORITHM:
===================

String ==> Object

- START string
- DECLARE 'result' and initialize to an empty object
- ITERATE through each letter of string argument
  - For each letter:
    - Check if it exists as a key in 'result'
      - If true, add one to the value
      - If false, add letter as a key with 1 as the value
- RETURN 'result'

*/

function letterCount(string) {
  let result = {};

  for (let index = 0; index < string.length; index += 1) {
    let letter = string[index];

    if (result.hasOwnProperty(letter)) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}

console.log(letterCount('codewars'));
console.log(letterCount('activity'));
console.log(letterCount('arithmetics'));
console.log(letterCount('traveller'));
console.log(letterCount('daydreamer'));
