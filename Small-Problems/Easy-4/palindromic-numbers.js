// Write a function that returns true if its integer argument is palindromic,
// or false otherwise.

/*

P:

Input: Number
Output: Boolean


E:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true


D:

Numbers
Strings
Booleans
Arrays


A:

1. Declare variable original and initialize to result of converting passed in
number to a string.
2. Declare variable reverse and initialize to original split, reversed, then
joined.
3. Return result of comparing equality between original and reverse.


C:

*/

function isPalindromicNumber(number) {
  let original = String(number);
  let reverse = original.split('').reverse().join('');

  return original === reverse;
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
