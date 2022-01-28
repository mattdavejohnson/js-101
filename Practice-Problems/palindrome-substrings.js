/*

PROBLEM:

Given a string, write a function which returns an array of all substrings which
are palindromes.

Input: A string
Output: An array containing all substrings that are palindromes

Explicit Requirements:
  - Palindromes are words spelled the same forwards and backwards
  - Palindromes are case sensitive

Implicit Requirements:
  - If no palindromes exist, return empty array
  - If input is empty string, return empty array
  - Palindromes must be at least 2 letters long
    - 'dd' is a palindrome


EXAMPLES/TEST CASES:

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
should return: ["ili"]

console.log(palindromeSubstrings("abcddcbA"))
should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"))
should log: []

console.log(palindromeSubstrings(""))
should log: []


DS/ALGO:

String -> Array

Problem

- Find all substrings of a string
  - Find all substrings which are palindromes

- START string
- DECLARE 'substrings' and init to 'getSubstrings'
- DECLARE 'palindromes' and init to array of each element in 'substrings' which
  are palindromes
  - SELECT elements of 'substrings' which 'isPalindrome' returns true for
- RETURN 'palindromes'


Helper function isPalindrome

- Accepts a string argument
- Returns true if argument is a palindrome, false if not

- START string
- DECLARE 'reverse' and init to input string reversed
- EVALUATE if input string and 'reverse' are equal
  - RETURN true if equal, false if not


Helper function getSubstrings

- Accepts a string argument
- Returns an array with all substrings of string argument

- START string
- DECLARE 'substrings' and init to empty array
- ITERATE through given string elements
  - ITERATE with inner loop for second index for slice
    - ADD each substring to 'substrings'
- RETURN 'substrings'

*/

function palindromeSubstrings(string) {
  let substrings = getSubstrings(string);
  let palindromes = substrings.filter((word) => isPalindrome(word));

  return palindromes;
}

function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');

  return string === reverse;
}

function getSubstrings(string) {
  let substrings = [];

  for (let index = 0; index <= string.length - 2; index += 1) {
    for (
      let secondIndex = index + 2;
      secondIndex <= string.length;
      secondIndex += 1
    ) {
      let currentWord = string.slice(index, secondIndex);

      substrings.push(currentWord);
    }
  }

  return substrings;
}

console.log(palindromeSubstrings('supercalifragilisticexpialidocious'));
console.log(palindromeSubstrings('abcddcbA'));
console.log(palindromeSubstrings('palindrome'));
console.log(palindromeSubstrings(''));
