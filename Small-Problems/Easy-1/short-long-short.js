// Write a function that takes two strings as arguments, determines the
// length of the two strings, and then returns the result of concatenating
// the shorter string, the longer string, and the shorter string once again.

/*

P:

Input: Two strings
Output: One string


E:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"


D:

None.


A:

1. Accept two strings.
2. Determine the length of each string.
  - If string 1 is shorter:
    - Return the concatenation of string 1 + string 2 + string 1.
  - If string 2 is shorter:
    - Return the concatenation of string 2 + string 1 + string 2.


C:

*/

function shortLongShort(stringOne, stringTwo) {
  if (stringOne.length < stringTwo.length) {
    return stringOne + stringTwo + stringOne;
  } else if (stringTwo.length < stringOne.length) {
    return stringTwo + stringOne + stringTwo;
  } else {
    return 'Strings are the same length';
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
