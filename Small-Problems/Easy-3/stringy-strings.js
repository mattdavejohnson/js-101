// Write a function that takes one argument, a positive integer, and returns
// a string of alternating '1's and '0's, always starting with a '1'.

/*

P:

Input: A positive integer
Output: A string

- Output a string of alternating 1s and 0s, always starting with 1.
- The length of the string should equal the number passed in.


E:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"


D:

A string


A:

1. Declare a result variable and initialize it to an empty string.
2. Loop as many times as is equal to passed in number.
  - If the index is even, append 1 to result.
  - If the index is odd, append 0 to result.
3. Return result.

C:

*/

function stringy(number) {
  let result = '';

  for (let index = 0; index < number; index++) {
    if (index % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
