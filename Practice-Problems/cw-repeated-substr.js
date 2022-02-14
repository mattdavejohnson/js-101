/* eslint-disable max-lines-per-function */
/*
Repeated Substring

For a given nonempty string s find a minimum substring t and the maximum
number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.


PROBLEM:
================

Input: A string
Output: An array

Explicit Requirements:
- The string will be nonempty
- The string consists of only lowercase letters
- We are looking for the minimum length substring that can be repeated
  to make the input string
  - We are returning the substring and the number of times it is repeated
    to form the input string
- If no substring can be repeated to form the input string, the original
  string and 1 is returned


EXAMPLES:
================

"ababab" ==> ["ab", 3]

"abcde" ==> ["abcde", 1]


DATA STRUCTURES/ALGORITHM:
================

String ==> Array of substrings ==> Array


- START string
- DECLARE 'substrings' and initialize to empty array
- ADD each substring of string argument to 'substrings'
  - ITERATE from 0 to string length - 1
    - ITERATE from outer + 1 to string length
      - Slice string at outer and inner and ADD to 'substrings'
- SORT 'substrings' from shortest to longest
- ITERATE through each element in 'substrings'
  - For each substring:
    - DECLARE 'currentSubstring' and initialize to current substring
    - DECLARE 'test' and initialize to current substring
    - DECLARE 'timesRepeated' and initialize to 1
    - ITERATE while 'test' length is less than string argument length
      - ADD current substring to 'test'
      - INCREMENT 'timesRepeated' by 1
    - EVALUATE if 'test' is equal to string argument
      - If true, return array of 'currentSubstring'' and 'timesRepeated'
- RETURN -1 indicating something went wrong

*/

function repeatSub(string) {
  let substrings = [];

  for (let outerIdx = 0; outerIdx < string.length; outerIdx += 1) {
    for (
      let innerIdx = outerIdx + 1;
      innerIdx <= string.length;
      innerIdx += 1
    ) {
      substrings.push(string.slice(outerIdx, innerIdx));
    }
  }

  substrings.sort((a, b) => a.length - b.length);

  for (let index = 0; index < substrings.length; index += 1) {
    let currentSubstring = substrings[index];
    let test = substrings[index];
    let timesRepeated = 1;

    while (test.length < string.length) {
      test += currentSubstring;
      timesRepeated += 1;
    }

    if (test === string) {
      return [currentSubstring, timesRepeated];
    }
  }

  return -1;
}

console.log(repeatSub('ababab'));
console.log(repeatSub('abcde'));
console.log(repeatSub('aaaaa'));
