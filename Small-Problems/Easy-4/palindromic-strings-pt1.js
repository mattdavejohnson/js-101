// Write a function that returns true if the string passed as an argument
// is a palindrome, or false otherwise.

/*

P:

Input: String
Output: Boolean


E:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true


D:

Strings
Arrays
Booleans


A:

1. Declare reverse variable and initialize it to the value of splitting the
input string, then reversing, then joining.
2. Return the result of comparing reverse and the passed in string for
equality.


C:

*/

function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  return reverse === string;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
