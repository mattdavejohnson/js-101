// Write a function that determines and returns the UTF-16 string value of a
// string passed in as an argument.

/*

P:

Input: A string
Output: An integer.

Sum the UTF-16 values for every character in the string.

E:

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811


D:

None.


A:

1. Pass in a string.
2. Declare a total variable and initialize it to 0.
3. Check if the passed in string is length 0.
  - If yes, return 0.
4. Loop through the string character by character.
5. Call charCodeAt() on each character.
  - Add the return value to total variable.
6. Return total variable.


C:

*/

function utf16Value(string) {
  let total = 0;

  for (let index = 0; index < string.length; index++) {
    total += string.charCodeAt(index);
  }

  return total;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = '\u03A9';
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));
