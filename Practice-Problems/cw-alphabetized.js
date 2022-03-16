/*

Re-order the characters of a string, so that they are concatenated into a new
string in "case-insensitively-alphabetical-order-of-appearance" order.
Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the
english alphabet letters.

PROBLEM:
==================

Input: A string
Oupt: A string

Explicit Requirements:
- All non-letter characters should be removed
- No numerals will be included
- When sorting alphabatically, case does not matter


EXAMPLES:
==================

alphabetized("The Holy Bible") // "BbeehHilloTy"


DATA STRUCTURES/ALGORITHM
==================

String ==> Array ==> String


- START string
- DECLARE 'lettersArray' and initialize to an array of the string argument
  split into its letters
- REMOVE all non-letter characters from 'lettersArray'
- SORT 'lettersArray' into alphabetical order
  - Use toLowerCase for comparisons
- RETURN 'lettersArray' joined to a string

*/

function alphabetized(string) {
  let lettersArray = string.split('').filter((char) => {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
  });

  lettersArray.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });

  return lettersArray.join('');
}

console.log(alphabetized('The Holy Bible'));
