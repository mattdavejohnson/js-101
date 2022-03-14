/*
Complete the solution so that it returns the number of times the search_text
is found within the full_text.


PROBLEM:
===============

Input: Two strings
Output: A number

Explicit Requirements:
- Find how many times the passed in search string is found in the passed in
  string
- The number representing the amount of times the search string is found is
  the return value


EXAMPLES:
===============

solution('aa_bb_cc_dd_bb_e', 'bb') // should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') // should return 1


DATA STRUCTURES/ALGORITHM:
===============

String ==> Array ==> Number


- START with two strings, 'full' and 'search'
- DECLARE 'result' and initialize to 0
- DECLARE 'substrings' and initialize to getSubstrings call
- ITERATE through each element of 'substrings'
  - EVALUATE if current element is equal to 'search'
    - If true, increment 'result' by 1
- RETURN 'result'


Creating each substring:

- ITERATE through given string from 0 until string.length - 1
  - ITERATE from outer index + 1 until string.length
    - SLICE from outer index and inner index and ADD to result array

*/

function getSubstrings(string) {
  let substrings = [];

  for (let outerIdx = 0; outerIdx < string.length; outerIdx += 1) {
    for (
      let innerIdx = outerIdx + 1;
      innerIdx <= string.length;
      innerIdx += 1
    ) {
      let substring = string.slice(outerIdx, innerIdx);
      substrings.push(substring);
    }
  }

  return substrings;
}

function solution(full, search) {
  let result = 0;
  let substrings = getSubstrings(full);

  substrings.forEach((sub) => {
    if (sub === search) {
      result += 1;
    }
  });

  return result;
}

console.log(solution('aa_bb_cc_dd_bb_e', 'bb'));
console.log(solution('aaabbbcccc', 'bbb'));
