/*
Substring Fun

Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word
which should be returned as a string, where n is the position of the word in
the list.


PROBLEM:
================

Input: An array of strings
Output: A string

Explicit Requirements:
- Each test case will be a valid input
  - There will be enough letters in each word
- In the first word, at 0, we use the first letter, at 0
  - In the second word, at 1, we use the second letter, at 1
- If the array argument is empty, return an empty string


EXAMPLES:
================

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2


DATA STRUCTURES/ALGORITHM:
================

Array ==> String


- START array
- DECLARE 'result' and initialize to empty string
- ITERATE through each element in array argument
  - ADD the appropriate letter to 'result'
- RETURN 'result'

*/

function nthChar(array) {
  let result = '';

  for (let index = 0; index < array.length; index += 1) {
    let letter = array[index][index];

    result += letter;
  }

  return result;
}

console.log(nthChar(['yoda', 'best', 'has']));
