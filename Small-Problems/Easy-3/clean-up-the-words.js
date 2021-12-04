// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string
// with all of the non-alphabetic characters replaced by spaces.

/*

P:

Input: A string
Output: A string


E:

cleanUp("---what's my +*& line?");    // " what s my line "


D:

Strings


A:

1. Declare const LETTERS and initialize it to a string with each letter of
the alphabet.
2. Declare variable result and initialize it to an empty string.
3. Loop through the passed in string.
  - If the current character is a letter, append letter to result.
  - If the current character is not a letter, check if previous letter
  is a ' '.
    - If it is not, append ' ' to result.
    - If it is, continue.
4. Return result.

C:

*/

function cleanUp(string) {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if (LETTERS.includes(string[index])) {
      result += string[index];
      continue;
    } else if (result[result.length - 1] === ' ') {
      continue;
    } else {
      result += ' ';
    }
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));
