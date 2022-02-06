/*
Detect Pangram

Given a string, detect whether or not it is a pangram. Return True if it is,
False if not. Ignore numbers and punctuation.


PROBLEM:
====================

Input: A string
Output: A boolean

Explicit Requirements:
- A pangram is a sentence that contains every single letter of the alphabet
  at least once
- Determine whether the string arg is a pangram
- Ignore numbers and punctuation
- Case does not matter


EXAMPLES:
====================

"The quick brown fox jumps over the lazy dog" ==> true


DATA STRUCTURES/ALGORITHM:
====================

String ==> Array ==> Boolean


- START string
- DECLARE 'alphabet' and initialize to string of each letter
- DECLARE 'lowercaseString' and initialize to string lowercased
- ITERATE through each letter of 'alphabet'
  - For each letter:
    - EVALUATE if letter is in 'lowercaseString'
      - If false, RETURN false
- RETURN true

*/

function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let lowercaseString = string.toLowerCase();

  for (let index = 0; index < alphabet.length; index += 1) {
    let letter = alphabet[index];
    if (!lowercaseString.includes(letter)) {
      return false;
    }
  }

  return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
