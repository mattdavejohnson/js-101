/*
Longest Vowel Chain

Given a lowercase string that has alphabetic characters only (both vowels
and consonants) and no spaces, return the length of the longest vowel
substring.


PROBLEM:
=================

Input: A string
Output: A number

Explicit Requirements:
- Vowels are a, e, i, o, u
- The string argument will only have alphabetic characters
  - No spaces
  - No punctuation
- The return value is the length of the longest vowel substring
- If the longest substring is only one vowel, return 1


EXAMPLES:
=================

codewarriors ==> 2, representing io
suoidea == > 3, representing uoi
strengthlessnesses ==> 1, representing e
iiihoovaeaaaoougjyaw ==> 8, representing aeaaaoou


DATA STRUCTURES/ALGORITHM:
=================

String ==> Array ==> Number


- START string
- DECLARE 'vowels' and initialize to string of vowels
- DECLARE 'result' and initialize to empty array
- DECLARE 'count' and initialize to 0
- ITERATE through each letter of string argument
  - For the current letter:
    - EVALUATE if it is a vowel
      - If true, increment 'count' by 1
      - If false:
        - If 'count' is greater than 0, ADD 'count' to 'result'
        - REASSIGN 'count' to 0
- RETURN the highest value element in 'result'

*/

function solve(string) {
  let vowels = 'aeiou';
  let result = [];
  let count = 0;

  for (let index = 0; index <= string.length; index += 1) {
    let letter = string[index];

    if (vowels.includes(letter)) {
      count += 1;
    } else {
      if (count > 0) {
        result.push(count);
      }

      count = 0;
    }
  }

  return Math.max(...result);
}

console.log(solve('codewarriors'));
console.log(solve('suoidea'));
console.log(solve('strengthlessnesses'));
console.log(solve('iiihoovaeaaaoougjyaw'));
