// Write another function that returns true if the string passed as an
// argument is a palindrome, or false otherwise. This time, however, your
// function should be case-insensitive, and should ignore all
// non-alphanumeric characters.

/*

P:

Input: String
Output: Boolean

Return true if the passed in string is a palindrome, ignoring non-alphanumeric
characters and being case-insensitive.


E:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false


D:

Strings
Arrays
Booleans


A:

1. Declare variable filtered and initialize it to an empty array.
2. Loop through the passed in string.
  - If the current index is a letter, push it to the array.
3. Return the result of passing in filtered.join to isPalindrome function.


C:

*/

function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  return reverse === string;
}

function isRealPalindrome(string) {
  let lettersNumbers = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let filtered = [];

  for (let index = 0; index < string.length; index++) {
    let currentValue = string[index].toLowerCase();
    if (lettersNumbers.includes(currentValue)) {
      filtered.push(currentValue);
    }
  }

  return isPalindrome(filtered.join(''));
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));
